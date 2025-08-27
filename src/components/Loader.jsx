// Loader.jsx
import { Html, useProgress } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Loader() {
  const { progress } = useProgress()
  const ringRef = useRef()

  // Rotate the ring
  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.x += 0.02
      ringRef.current.rotation.y += 0.02
    }
  })

  return (
    <>
      {/* 3D Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial color="#00d4ff" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* Progress Text overlay */}
      <Html center>
        <div style={{
          color: 'white',
          fontSize: '20px',
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
          marginTop: '80px',
          textShadow: '0px 0px 10px rgba(0,0,0,0.8)'
        }}>
          {progress.toFixed(0)}%
        </div>
      </Html>
    </>
  )
}
