
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Server({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[0.8, 2.2, 0.65]} />
        <meshStandardMaterial
          color="#082f49"
          metalness={0.8}
          roughness={0.3}
          wireframe
        />
      </mesh>

      {Array.from({ length: 4 }).map((_, i) => (
        <group key={i} position={[0, 0.75 - i * 0.5, 0.34]}>
          <mesh>
            <boxGeometry args={[0.65, 0.32, 0.08]} />
            <meshStandardMaterial
              color="#0e7490"
              metalness={0.7}
              roughness={0.3}
            />
          </mesh>

          <mesh position={[-0.2, 0, 0.06]}>
            <sphereGeometry args={[0.035, 12, 12]} />
            <meshStandardMaterial
              color="#22d3ee"
              emissive="#0891b2"
              emissiveIntensity={2}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function NetworkNodes() {
  const group = useRef<THREE.Group>(null);

  const nodes: [number, number, number][] = [
    [-3, 1.5, 0],
    [3, 1.2, -0.5],
    [-2.5, -1.5, 0.5],
    [2.8, -1.5, 0],
    [0, 2.5, -1],
    [0, -2.2, 0],
  ];

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.07;
      group.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
    }
  });

  return (
    <group ref={group}>
      {/* Central infrastructure */}
      <Float speed={1} floatIntensity={0.15} rotationIntensity={0.05}>
        <Server position={[-0.95, 0, 0]} />
        <Server position={[0.95, 0, 0]} />

        {/* Central cloud */}
        <mesh position={[0, 2.2, 0]}>
          <icosahedronGeometry args={[0.75, 2]} />
          <meshStandardMaterial
            color="#0891b2"
            emissive="#0369a1"
            emissiveIntensity={0.6}
            metalness={0.7}
            roughness={0.25}
            wireframe
          />
        </mesh>
      </Float>

      {/* Network nodes */}
      {nodes.map((position, i) => (
        <Float
          key={i}
          speed={1.5 + i * 0.2}
          floatIntensity={0.25}
          rotationIntensity={0.1}
        >
          <mesh position={position}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial
              color="#22d3ee"
              emissive="#0891b2"
              emissiveIntensity={2}
            />
          </mesh>
        </Float>
      ))}

      {/* Network connections */}
      {nodes.map((position, i) => {
        const target = nodes[(i + 1) % nodes.length];

        const points = [
          new THREE.Vector3(...position),
          new THREE.Vector3(...target),
        ];

        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        return (
          <primitive
            key={`line-${i}`}
            object={new THREE.Line(
              geometry,
              new THREE.LineBasicMaterial({
                color: "#0891b2",
                transparent: true,
                opacity: 0.55,
              })
            )}
          />
        );
      })}
    </group>
  );
}

export default function Architecture3D() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [6, 3, 9], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <pointLight position={[0, 2, 3]} color="#22d3ee" intensity={3} />
        <pointLight position={[-4, -2, 2]} color="#2563eb" intensity={2} />

        <NetworkNodes />
      </Canvas>
    </div>
  );
}
