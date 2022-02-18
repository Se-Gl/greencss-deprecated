import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import Phone from './Phone3D'

export default function Camera({ object }) {
  //   if (typeof window !== 'undefined') {
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  const cursor = {
    x: 0,
    y: 0
  }
  const mesh = {
    position: null
  }

  const Box = () => {
    const box = useRef()
    mesh.position = box
    return <mesh ref={box}>{object}</mesh>
  }

  const camera = useRef()

  window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.001
    cursor.y = event.clientY / sizes.height - 0.001
  })
  useFrame(() => {
    if (camera.current && mesh.position.current) {
      camera.current.position.x = cursor.x * 0.07
      camera.current.position.z = Math.cos(cursor.x * Math.PI * 0.1) * 0.1
      camera.current.position.y = cursor.y * 0.05

      camera.current.lookAt(mesh.position.current.position)
    }
  })
  return (
    <perspectiveCamera ref={camera} fov={75} aspect={sizes.width / sizes.height} near={1} far={10}>
      <Box />
    </perspectiveCamera>
  )
}
