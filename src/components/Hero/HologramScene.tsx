"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Line, OrbitControls, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Random points for particles
const generateParticles = (count = 1000) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const radius = 2 + Math.random() * 3;
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }
  return positions;
};

const CyberGlobe = () => {
  const globeRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (globeRef.current) {
      globeRef.current.rotation.y = t * 0.1;
      globeRef.current.rotation.z = t * 0.05;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.05;
    }
  });

  const particles = generateParticles(1500);

  return (
    <group ref={globeRef}>
      {/* Wireframe Sphere */}
      <Sphere args={[2, 32, 32]}>
        <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.15} />
      </Sphere>

      {/* Inner Glowing Sphere */}
      <Sphere args={[1.9, 32, 32]}>
        <meshBasicMaterial color="#bc13fe" transparent opacity={0.05} />
      </Sphere>

      {/* Network Nodes/Particles */}
      <Points ref={particlesRef} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f3ff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

export const HologramScene = () => {
  return (
    <div className="absolute right-0 top-0 w-full lg:w-1/2 h-screen z-0 opacity-50 lg:opacity-100 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#00f3ff" intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#bc13fe" intensity={1} />
        <CyberGlobe />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};
