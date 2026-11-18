
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function ServerRack({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[1.25, 3.2, 0.8]} />
        <meshStandardMaterial
          color="#164e63"
          metalness={0.8}
          roughness={0.4}
          wireframe
        />
      </mesh>

      {Array.from({ length: 5 }).map((_, i) => (
        <group key={i} position={[0, 1.15 - i * 0.55, 0.42]}>
          <mesh>
            <boxGeometry args={[1.05, 0.4, 0.12]} />
            <meshStandardMaterial
              color="#0e7490"
              metalness={0.6}
              roughness={0.4}
            />
          </mesh>

          {[-0.35, -0.2, -0.05].map((x, j) => (
            <mesh key={j} position={[x, 0, 0.075]}>
              <sphereGeometry args={[0.025, 12, 12]} />
              <meshStandardMaterial
                color="#22d3ee"
                emissive="#0891b2"
                emissiveIntensity={1.2}
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

function ServerScene() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.06;
      group.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.4) * 0.06;
    }
  });

  return (
    <group ref={group}>
      <Float speed={0.7} rotationIntensity={0.03} floatIntensity={0.12}>
        <ServerRack position={[-1.5, 0, 0]} />
        <ServerRack position={[0, 0, 0]} />
        <ServerRack position={[1.5, 0, 0]} />
      </Float>
    </group>
  );
}

export default function Contact3D() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [5, 2.5, 8], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[0, 2, 3]} color="#22d3ee" intensity={1.5} />

        <ServerScene />
      </Canvas>
    </div>
  );
}
