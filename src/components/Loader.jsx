// FuturisticLoader.jsx
import { Html, useProgress } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export default function Loader() {
  const { progress } = useProgress()
  const ringRef = useRef()
  const glowRef = useRef()

  // Animate rotation + glow pulse
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.7
      ringRef.current.rotation.y = t * 0.5
    }
    if (glowRef.current) {
      glowRef.current.material.opacity = 0.5 + Math.sin(t * 3) * 0.3
    }
  })

  return (
    <>
      {/* Neon ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1, 0.25, 32, 100]} />
        <meshStandardMaterial
          emissive={'#00faff'}
          emissiveIntensity={2}
          color={'#0ff'}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Glow aura */}
      <mesh ref={glowRef} scale={1.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color={'#00e5ff'}
          transparent
          opacity={0.4}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Overlay text */}
      <Html center>
        <div
          style={{
            color: '#00faff',
            fontSize: '22px',
            fontWeight: 'bold',
            fontFamily: 'Orbitron, sans-serif',
            marginTop: '100px',
            letterSpacing: '2px',
            textShadow: '0px 0px 15px #00faff',
          }}
        >
          {progress.toFixed(0)}%
        </div>
      </Html>
    </>
  )
}
