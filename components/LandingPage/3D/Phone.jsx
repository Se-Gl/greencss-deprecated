import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '@/lib/3dmodel'
import Loader from '@/components/logo/Loader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const Phone = ({ source = '/3D/phone.glb', initialScale = 0.75 }) => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  //   position center
  const [target] = useState(new THREE.Vector3(0, 0, 0))
  const [initialCameraPosition] = useState(new THREE.Vector3(1, 1, -10))
  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState()

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [renderer])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      //   initial phone scale
      const scale = initialScale
      const camera = new THREE.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 500)
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      const ambientLight = new THREE.AmbientLight(0xfdfdfd, 1.5)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.enablePan = false
      controls.enableZoom = false
      controls.enableDamping = true
      controls.maxPolarAngle = Math.PI / 1.5
      controls.minPolarAngle = Math.PI / 2.5
      setControls(controls)

      loadGLTFModel(scene, `${source}`, {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        animate()
        setLoading(false)
      })

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 150) * Math.PI * 4

          camera.position.y = 1
          camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        // console.log('unmount')
        cancelAnimationFrame(req)
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])

  return (
    <div ref={refContainer} className='scene'>
      {loading && (
        <div className='flex h-75vh'>
          <div className='m-auto'>
            <Loader />
          </div>
        </div>
      )}
    </div>
  )
}

export default Phone
