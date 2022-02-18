import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import Phone from './Phone3D'
import Camera from './Camera'

export default function ThreeDObject() {
  return (
    <div className='threed-canvas mr-10rem' style={{ pointerEvents: 'none' }}>
      <Canvas clasName='threed-canvas' gl={{ antialias: true }}>
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
        <directionalLight position={[-2, 1, -2]} color={0xbe0aff} />
        <directionalLight position={[1, 1, 1]} color={0xffffff} />
        <Suspense fallback={null}>
          <Camera object={<Phone />} />
        </Suspense>
      </Canvas>
    </div>
  )
}
