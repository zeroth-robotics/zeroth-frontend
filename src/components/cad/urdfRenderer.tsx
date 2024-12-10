import { useCallback, useEffect, useRef, useState } from "react";

import { UntarredFile } from "@/components/cad/untar";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import URDFLoader, { URDFJoint, URDFLink } from "urdf-loader";

interface JointControl {
  name: string;
  min: number;
  max: number;
  value: number;
}

type Theme = "light" | "dark";

interface ThemeColors {
  background: string;
  text: string;
  backgroundColor: number;
}

const getThemeColors = (theme: Theme): ThemeColors => {
  switch (theme) {
    case "light":
      return {
        background: "bg-[#f0f0f0]",
        text: "text-gray-800",
        backgroundColor: 0xf0f0f0,
      };
    case "dark":
      return {
        background: "bg-black",
        text: "text-gray-200",
        backgroundColor: 0x000000,
      };
  }
};

interface Props {
  urdfContent: string;
  files: UntarredFile[];
  useControls?: boolean;
  showWireframe?: boolean;
  supportedThemes?: Theme[];
  overrideColor?: string | null;
}

export default function URDFRenderer({ urdfContent, files, overrideColor = null }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const robotRef = useRef<THREE.Object3D | null>(null);

  // Toggle fullscreen.
  const [isFullScreen, setIsFullScreen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);

  // Used to store the renderer.
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  // Add new state/refs for auto-rotation
  const [isAutoRotating, setIsAutoRotating] = useState(false);

  useEffect(() => {
    const handleFullScreenChange = () => {
      const isNowFullScreen = !!document.fullscreenElement;
      setIsFullScreen(isNowFullScreen);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullScreenChange);
  }, []);

  const updateMaterials = useCallback(() => {
    if (!robotRef.current) return;

    robotRef.current.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const originalColor =
          child.material instanceof THREE.Material
            ? (child.material as THREE.MeshPhysicalMaterial).color
            : new THREE.Color(0x808080);
        child.material = new THREE.MeshPhysicalMaterial({
          metalness: 0.4,
          roughness: 0.5,
          wireframe: isWireframe,
          color: overrideColor ? new THREE.Color(overrideColor) : originalColor,
        });
      }
    });
  }, [theme, isWireframe]);

  const updateTheme = useCallback(() => {
    if (!sceneRef.current) return;

    const themeColors = getThemeColors(theme);
    sceneRef.current.background = new THREE.Color(themeColors.backgroundColor);
  }, [theme]);

  useEffect(() => {
    updateMaterials();
  }, [updateMaterials, isWireframe]);

  useEffect(() => {
    updateTheme();
  }, [updateTheme]);

  // Setup the scene.
  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Setup camera.
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;

    // Setup renderer.
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Setup controls.
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.autoRotateSpeed = 4.0;

    scene.children.forEach((child) => {
      if (child instanceof THREE.Light) {
        scene.remove(child);
      }
    });

    // Setup lights.
    const mainLight = new THREE.DirectionalLight(0xffffff, 2.0);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);

    // Setup fill light.
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
    fillLight.position.set(-5, 2, -5);
    scene.add(fillLight);

    // Setup ambient light.
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Setup loader.
    const loader = new URDFLoader();
    loader.loadMeshCb = (path, _manager, onComplete) => {
      const fileContent = files.find((f) => f.name.endsWith(path))?.content;

      if (fileContent) {
        const geometry = new STLLoader().parse(fileContent.buffer);
        const mesh = new THREE.Mesh(geometry);
        onComplete(mesh);
      } else {
        onComplete(new THREE.Object3D());
      }
    };

    // Parse URDF.
    const robot = loader.parse(urdfContent);
    robotRef.current = robot;
    scene.add(robot);

    // Calculate URDF information
    let jointCount = 0;
    let linkCount = 0;

    robot.traverse((child) => {
      if ("isURDFLink" in child && child.isURDFLink) {
        linkCount++;
      } else if ("isURDFJoint" in child && child.isURDFJoint) {
        jointCount++;
      }
    });

    setUrdfInfo({
      jointCount,
      linkCount,
    });

    // Center and scale the robot
    const box = new THREE.Box3().setFromObject(robot);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 5 / maxDim;
    robot.scale.multiplyScalar(scale);
    robot.position.sub(center.multiplyScalar(scale));

    // Position camera in front of the robot
    const distance = 10;
    camera.position.set(0, distance / 2, -distance);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    controls.update();

    // Collect joint information
    const joints: JointControl[] = [];
    robot.traverse((child) => {
      if ("isURDFJoint" in child && child.isURDFJoint) {
        const joint = child as URDFJoint;
        const min = Number(joint.limit.lower);
        const max = Number(joint.limit.upper);
        const initialValue = min <= 0 && max >= 0 ? 0 : (min + max) / 2;

        joints.push({
          name: joint.name,
          min: min,
          max: max,
          value: initialValue,
        });
        joint.setJointValue(initialValue);
      }
    });
    setJointControls(joints);

    // Collect link information.
    const links: URDFLink[] = [];
    robot.traverse((child) => {
      if ("isURDFLink" in child && child.isURDFLink) {
        const link = child as URDFLink;
        links.push(link);
      }
    });

    // Setup the animation loop.
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      controls.update();

      renderer.render(scene, camera);
      return animationId;
    };

    const animationId = animate();

    // Handle window resizing.
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;

      const camera = cameraRef.current;
      const renderer = rendererRef.current;

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Add fullscreen change handler that just triggers a resize
    const handleFullScreenChange = () => {
      const isNowFullScreen = !!document.fullscreenElement;
      setIsFullScreen(isNowFullScreen);
      requestAnimationFrame(handleResize);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    // Update the theme, materials, etc.
    updateTheme();
    updateMaterials();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) {
            object.geometry.dispose();
          }
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });

      if (renderer) {
        renderer.dispose();
      }

      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      if (controlsRef.current) {
        controlsRef.current.autoRotate = false;
        controlsRef.current.dispose();
      }
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, [urdfContent, files]);

  return (
    <div ref={parentRef} className={`relative ${isFullScreen ? "h-screen" : "h-full"}`}>
      <div ref={containerRef} className={`absolute inset-0 ${getThemeColors(theme).background}`} />
    </div>
  );
}
