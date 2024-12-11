import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Object3D } from "three";
import { URDFLoader } from "urdf-loader";

export default function RobotPanel() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);

    const loader = new URDFLoader();
    loader.load("path/to/your/robot.urdf", (robot: Object3D) => {
      scene.add(robot);
    });

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}></div>;
}
