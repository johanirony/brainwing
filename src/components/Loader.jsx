// Loader.jsx
import { Html, useProgress } from '@react-three/drei'

export default function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div style={{
        background: 'rgba(0,0,0,0.7)',
        padding: '20px 40px',
        borderRadius: '12px',
        color: 'white',
        fontSize: '18px',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
      }}>
        🚀 Loading {progress.toFixed(0)}%
      </div>
    </Html>
  )
}
