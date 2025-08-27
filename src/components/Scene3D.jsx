import React, { Suspense, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, Html } from '@react-three/drei'
import { MOUSE } from 'three'
import * as THREE from 'three'
import { Model } from './Brainwing'
import Navbar from './Navbar'
import Loader from './Loader'

export default function Scene3D({ onSelectPoi, selectedPoi }) {
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false })
  const pois = useMemo(() => [
    {
      id: 'poi-1',
      position: [0, 50, 0],
      title: 'Lodha Altamount',
      eta: 1,
      description: 'Lodha Altamount is a postmodern luxury residential skyscraper located in the billionaires row of Mumbai, India',
      image: '/lodha.png',
    },{
      id: 'poi-2',
      position: [600, 10, -2100],
      title: 'Coastal Road',
      eta: 2,
      description: 'Coastal Road is an 8-lane, 29.2-km long grade separated expressway along Mumbais western coastline connecting Marine Lines in the south to Kandivali in the north.',
      image: '/coastal .jpg',
    },{
      id: 'poi-3',
      position: [1500, 60, -2100],
      title: 'Antilia',
      eta: 3,
      description: 'Antilia is the residence of the Indian billionaire businessman Mukesh Ambani and his family. It is located on Billionaires Row in Mumbai',
      image: '/antilia.jpg',
    },{
      id: 'poi-4',
      position: [1100, 10, -1200],
      title: 'Hanging Garden',
      eta: 4,
      description: 'The Hanging Gardens, in Mumbai, also known as Pherozeshah Mehta Gardens, are terraced gardens perched at the top of Malabar Hill, on its western side, just opposite the Kamala Nehru Park',
      image: '/hanging garden.jpg',
    }
    
  ], [])
  return (
    <div
      style={{ position: 'relative', width: '100%', height: '100%' }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true })
      }}
      onMouseEnter={() => setCursor((c) => ({ ...c, visible: true }))}
      onMouseLeave={() => setCursor((c) => ({ ...c, visible: false }))}
    >
             <Canvas 
         shadows 
         camera={{ position: [0, 500, 1000], fov: 35, near: 1, far: 50000 }}
         gl={{ 
           antialias: true, 
           powerPreference: "high-performance",
           stencil: false,
           depth: true,
           alpha: false
         }}
         dpr={[1, 2]}
       >
        <ambientLight intensity={0.6} />
                 <directionalLight 
           position={[1000, 2000, 1000]} 
           intensity={1.2} 
           castShadow 
           shadow-mapSize={[2048, 2048]}
           shadow-camera-far={5000}
           shadow-camera-left={-1000}
           shadow-camera-right={1000}
           shadow-camera-top={1000}
           shadow-camera-bottom={-1000}
         />

        <Suspense fallback={<Loader/>}>
          <Environment files="/models/environment.exr" background backgroundIntensity={2} />
          <Model />
          {pois.map((p) => (
            <PoiMarker key={p.id} poi={p} onClick={() => onSelectPoi && onSelectPoi(p)} />
          ))}
          <CameraRig selectedPoi={selectedPoi} />
        </Suspense>
        

        
        {/* Coordinate Finder - Click anywhere to get 3D coordinates */}
        <mesh 
          position={[0, 0, 0]} 
          onClick={(e) => {
            e.stopPropagation();
            const point = e.point;
            console.log('🎯 3D Coordinates:', [Math.round(point.x * 100) / 100, Math.round(point.y * 100) / 100, Math.round(point.z * 100) / 100]);
            console.log('📍 Screen Position:', [e.clientX, e.clientY]);
            console.log('📐 Distance from camera:', Math.round(e.distance * 100) / 100);
          }}
          geometry={new THREE.PlaneGeometry(10000, 10000)}
          material={new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })}
        />

        <OrbitControls
          makeDefault
          enableDamping
          dampingFactor={0.1}
          enablePan
          screenSpacePanning={false}
          mouseButtons={{ LEFT: MOUSE.PAN, RIGHT: MOUSE.ROTATE, MIDDLE: MOUSE.DOLLY }}
          target={[0, 0, 0]}
          minPolarAngle={Math.PI / 2 - 0.3}
          maxPolarAngle={Math.PI / 2 - 0.1}
          minAzimuthAngle={-Math.PI / 2 + 0.01}
          maxAzimuthAngle={Math.PI / 2 - 0.01}
          autoRotate
          autoRotateSpeed={0.2}
        />
      </Canvas>

      <div
        style={{
          position: 'absolute',
          left: `${cursor.x}px`,
          top: `${cursor.y}px`,
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: '2px solid rgba(255,255,255,0.9)',
          boxShadow: '0 0 6px rgba(0,0,0,0.25)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 10,
          opacity: cursor.visible ? 1 : 0,
          transition: 'opacity 120ms ease',
        }}
      />
    </div>
  )
}

function PoiMarker({ poi, onClick }) {
  return (
    <group position={poi.position}>
      <Html center zIndexRange={[1000, -10]} style={{ pointerEvents: 'auto', zIndex: 1000 }}>
                <div
          onPointerDown={(e) => { e.stopPropagation() }}
          onClickCapture={(e) => { e.stopPropagation(); onClick && onClick(); console.log('POI clicked', poi) }}
          style={{
            width: 'clamp(24px, 3vw, 32px)',
            height: 'clamp(24px, 3vw, 32px)',
            borderRadius: '50%',
            background: 'linear-gradient(145deg, #f5b199, #e28b73)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
            border: '2px solid rgba(255,255,255,0.85)',
            display: 'grid',
            placeItems: 'center',
            transform: 'translateY(-20px)',
            zIndex: 30,
            cursor: 'pointer',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}>
          <div style={{ 
            width: 'clamp(8px, 1vw, 12px)', 
            height: 'clamp(8px, 1vw, 12px)', 
            borderRadius: '50%', 
            background: '#fff' 
          }} />
        </div>
      </Html>
    </group>
  )
}

function CameraRig({ selectedPoi }) {
  const controls = useThree((s) => s.controls)
  const camera = useThree((s) => s.camera)
  const target = useRef(null)
  const vel = useRef({ pos: [0, 0, 0], tar: [0, 0, 0] })

  useFrame((_, dt) => {
    if (!controls) return
    const damping = 1 - Math.pow(0.08, dt * 60)
    const destinationTarget = target.current
    if (!destinationTarget) return
    // Compute desired camera position offset back along view
    const desired = [destinationTarget[0] + 0, destinationTarget[1] + 500, destinationTarget[2] + 1200]
    // Lerp camera
    camera.position.x += (desired[0] - camera.position.x) * damping
    camera.position.y += (desired[1] - camera.position.y) * damping
    camera.position.z += (desired[2] - camera.position.z) * damping
    // Lerp controls target
    controls.target.x += (destinationTarget[0] - controls.target.x) * damping
    controls.target.y += (destinationTarget[1] - controls.target.y) * damping
    controls.target.z += (destinationTarget[2] - controls.target.z) * damping
    controls.update()
  })

  React.useEffect(() => {
    if (!controls) return
    if (selectedPoi) {
      controls.autoRotate = false
      target.current = selectedPoi.position
    } else {
      controls.autoRotate = true
      target.current = null
    }
  }, [selectedPoi, controls])

  return null
}


