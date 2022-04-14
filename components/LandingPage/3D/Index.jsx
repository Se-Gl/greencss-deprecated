import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import Phone from './Phone3D'
import Tilt3D from './Tilt3D'

export default function ThreeDObject() {
  return (
    <div className='threed-canvas mr-10rem' style={{ pointerEvents: 'none' }}>
      <Canvas className='threed-canvas' gl={{ antialias: true }}>
        <OrbitControls
          // autoRotate={true}
          enablePan={true}
          enableZoom={false}
          enableDamping={true}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 2.5}
          // autoRotateSpeed={0.66}
        />

        <ambientLight intensity={0.75} />
        <directionalLight position={[-2, -0.25, -2]} color={0x80f906} />
        <directionalLight position={[1, 0.9, 1.5]} color={0xffffff} />
        <Suspense fallback={null}>
          <Tilt3D object={<Phone />} />
        </Suspense>
      </Canvas>
    </div>
  )
}
