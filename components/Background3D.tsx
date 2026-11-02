"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"

function ServerRack({
  position,
  scale = 1,
  accent = "#38bdf8",
}: {
  position: [number, number, number]
  scale?: number
  accent?: string
}) {
  return (
    <group position={position} scale={scale}>
      {/* Rack chassis */}
      <mesh castShadow>
        <boxGeometry args={[0.9, 1.75, 0.62]} />
        <meshStandardMaterial
          color="#111c2b"
          metalness={0.78}
          roughness={0.3}
        />
      </mesh>

      {/* Front face */}
      <mesh position={[0, 0, 0.321]}>
        <boxGeometry args={[0.78, 1.62, 0.025]} />
        <meshStandardMaterial
          color="#07111d"
          metalness={0.55}
          roughness={0.35}
        />
      </mesh>

{/* Rack rails */}
      {[-0.35, 0.35].map((x) => (
        <mesh key={x} position={[x, 0, 0.343]}>
          <boxGeometry args={[0.018, 1.48, 0.012]} />
          <meshBasicMaterial color="#334155" />
        </mesh>
      ))}

      {/* Server units */}
      {[-0.57, -0.19, 0.19, 0.57].map((y, index) => (
        <group key={y} position={[0, y, 0.345]}>
          <mesh>
            <boxGeometry args={[0.61, 0.29, 0.035]} />
            <meshStandardMaterial
              color="#17283a"
              metalness={0.6}
              roughness={0.32}
            />
          </mesh>

          {/* Ventilation slots */}
          {[-0.19, -0.13, -0.07, -0.01].map((x) => (
            <mesh key={x} position={[x, 0, 0.021]}>
              <boxGeometry args={[0.025, 0.14, 0.008]} />
              <meshBasicMaterial color="#64748b" />
            </mesh>
          ))}

          {/* Status LEDs */}
          <mesh position={[0.22, 0.055, 0.022]}>
            <sphereGeometry args={[0.022, 12, 12]} />
            <meshBasicMaterial color={index === 2 ? "#4ade80" : accent} />
          </mesh>
          <mesh position={[0.22, -0.055, 0.022]}>
            <sphereGeometry args={[0.012, 10, 10]} />
            <meshBasicMaterial color="#f59e0b" />
          </mesh>
        </group>
      ))}

      {/* Top and bottom accent strips */}
      <mesh position={[0, 0.86, 0.33]}>
        <boxGeometry args={[0.68, 0.025, 0.018]} />
        <meshBasicMaterial color={accent} />
      </mesh>
      <mesh position={[0, -0.86, 0.33]}>
        <boxGeometry args={[0.68, 0.025, 0.018]} />
        <meshBasicMaterial color={accent} />
      </mesh>

      {/* Side panel edge */}
      <mesh position={[0.46, 0, 0]}>
        <boxGeometry args={[0.025, 1.65, 0.58]} />
        <meshStandardMaterial
          color="#1e293b"
          metalness={0.7}
          roughness={0.38}
        />
      </mesh>
    </group>
  )
}

function DataOrbit() {
  const ringRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.22) * 0.12
      ringRef.current.rotation.y = clock.getElapsedTime() * 0.12
    }
  })

  return (
    <group ref={ringRef} position={[0, 0, -0.65]}>
      <mesh rotation={[Math.PI / 2.5, 0.15, 0]}>
        <torusGeometry args={[2.05, 0.006, 8, 160]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.28} />
      </mesh>
      <mesh rotation={[Math.PI / 2.2, -0.25, 0.3]}>
        <torusGeometry args={[2.25, 0.004, 8, 160]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.17} />
      </mesh>
    </group>
  )
}

function MovingServerCluster() {
  const clusterRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (clusterRef.current) {
      // Smooth side-to-side movement, staying mostly on the right of the hero.
      clusterRef.current.position.x = 2.05 + Math.sin(t * 0.32) * 0.72
      clusterRef.current.position.y = Math.sin(t * 0.48) * 0.12
      clusterRef.current.rotation.y = Math.sin(t * 0.3) * 0.28 - 0.18
      clusterRef.current.rotation.z = Math.sin(t * 0.25) * 0.025
    }
  })

  return (
    <group ref={clusterRef}>
      <Float speed={0.45} rotationIntensity={0.04} floatIntensity={0.12}>
        <ServerRack position={[0, 0, 0]} scale={1.05} accent="#38bdf8" />
      </Float>
      <Float speed={0.55} rotationIntensity={0.05} floatIntensity={0.16}>
        <ServerRack position={[-1.12, -0.28, -0.55]} scale={0.68} accent="#818cf8" />
      </Float>
      <Float speed={0.5} rotationIntensity={0.05} floatIntensity={0.14}>
        <ServerRack position={[1.08, -0.2, -0.42]} scale={0.72} accent="#22d3ee" />
      </Float>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.75} />
      <directionalLight position={[3, 4, 5]} intensity={1.35} color="#dbeafe" />
      <pointLight position={[2, 1, 3]} intensity={1.2} color="#0ea5e9" distance={7} />
      <DataOrbit />
      <MovingServerCluster />
    </>
  )
}

export default function Background3D() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 42 }}
        dpr={[1, 1.25]}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}