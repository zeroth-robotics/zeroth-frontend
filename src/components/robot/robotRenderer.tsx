"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import URDFLoader from "urdf-loader";
import { URDFJoint } from "urdf-loader/src/URDFClasses";

const URDF_URL = "/cad/gpr-20241204.urdf";
const SCALE = 4;
const TRANSLATE_Y = 1.9;

interface Waypoint {
  start: number;
  end: number;
}

const WAYPOINTS: { [key: string]: Waypoint } = {
  L_shoulder_y: { start: 0, end: 0.5 },
  L_shoulder_x: { start: 0, end: 0.5 },
  L_shoulder_z: { start: 0, end: 0.5 },
  R_elbow: { start: 0, end: 0.5 },
  R_wrist: { start: 0, end: 0.5 },
  R_shoulder_y: { start: 0, end: 0.5 },
  R_shoulder_x: { start: 0, end: 0.5 },
  R_shoulder_z: { start: 0, end: 0.5 },
  L_elbow: { start: 0, end: 0.5 },
  L_wrist: { start: 0, end: 0.5 },
  L_hip_y: { start: 0, end: 0.5 },
  L_hip_x: { start: 0, end: 0.5 },
  L_hip_z: { start: 0, end: 0.5 },
  L_knee: { start: 0, end: 0.5 },
  L_ankle: { start: 0, end: 0.5 },
  R_hip_y: { start: 0, end: 0.5 },
  R_hip_x: { start: 0, end: 0.5 },
  R_hip_z: { start: 0, end: 0.5 },
  R_knee: { start: 0, end: 0.5 },
  R_ankle: { start: 0, end: 0.5 },
};

const DURATION_S = 1;

const RobotRenderer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    if (mountRef.current) {
      const { clientWidth, clientHeight } = mountRef.current;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    }
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const loader = new URDFLoader();
    loader.load(URDF_URL, (robot: THREE.Object3D) => {
      scene.add(robot);

      // Correcting for the robot initial size and position.
      robot.rotateY(Math.PI / 2);
      robot.translateY(TRANSLATE_Y);
      robot.scale.set(SCALE, SCALE, SCALE);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controls.screenSpacePanning = false;
      controls.maxPolarAngle = Math.PI / 2;

      let time = 0;

      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();

        // Update joint positions with a sinusoidal pattern
        time += 0.01;
        robot.traverse((child) => {
          const joint = child as URDFJoint;
          if (joint.isURDFJoint) {
            if (WAYPOINTS[joint.name]) {
              const { start, end } = WAYPOINTS[joint.name];
              const value = start + (end - start) * Math.sin((time * Math.PI) / DURATION_S);
              joint.setJointValue(value);
            }
          }
        });

        renderer.render(scene, camera);
      };

      animate();
    });

    const light = new THREE.AmbientLight(0x404040);
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    camera.position.z = 5;

    const handleResize = () => {
      if (mountRef.current) {
        const { clientWidth, clientHeight } = mountRef.current;
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(clientWidth, clientHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default RobotRenderer;
