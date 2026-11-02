"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"

function Orb() {
  const orb = useRef<THREE.Group>(null)
  const ring = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (orb.current) {
      orb.current.rotation.y = t * 0.12
      orb.current.rotation.x = Math.sin(t * 0.18) * 0.08
    }

    if (ring.current) {
      ring.current.rotation.z = t * 0.12
      ring.current.rotation.x = 0.9 + Math.sin(t * 0.15) * 0.04
    }
  })

  return (
    <group position={[2.05, 0.05, 0]}>
      <pointLight position={[0, 0, 1.8]} intensity={1.2} color="#38bdf8" distance={4} />
      <pointLight position={[-1, 1, -1]} intensity={0.7} color="#6366f1" distance={3} />

      <Float speed={0.45} rotationIntensity={0.08} floatIntensity={0.16}>
        <group ref={orb}>
          {/* Outer translucent glass shell */}
          <mesh>
            <icosahedronGeometry args={[1.05, 4]} />
            <meshPhysicalMaterial
              color="#164e63"
              metalness={0.35}
              roughness={0.18}
              transmission={0.48}
              thickness={1.2}
              clearcoat={1}
              clearcoatRoughness={0.08}
              transparent
              opacity={0.88}
            />
          </mesh>

          {/* Soft luminous inner core */}
          <mesh scale={0.58}>
            <icosahedronGeometry args={[1.05, 3]} />
            <meshStandardMaterial
              color="#0891b2"
              emissive="#0891b2"
              emissiveIntensity={0.65}
              metalness={0.45}
              roughness={0.3}
            />
          </mesh>

          {/* Fine geometric shell lines */}
          <mesh scale={1.015}>
            <icosahedronGeometry args={[1.05, 2]} />
            <meshBasicMaterial
              color="#7dd3fc"
              wireframe
              transparent
              opacity={0.12}
            />
          </mesh>
        </group>
      </Float>

      {/* One elegant orbital ring */}
      <group ref={ring}>
        <mesh rotation={[Math.PI / 2.8, 0.12, 0]}>
          <torusGeometry args={[1.42, 0.009, 8, 160]} />
          <meshBasicMaterial color="#67e8f9" transparent opacity={0.48} />
        </mesh>
      </group>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.75} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} color="#dbeafe" />
      <Orb />
    </>
  )
}

export default function Background3D() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 42 }}
        dpr={[1, 1.25]}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}