import {Canvas} from '@react-three/fiber'
import {FC, useEffect, useState} from 'react'
import {BufferGeometry} from 'three'
import {STLLoader} from 'three/examples/jsm/loaders/STLLoader'


const Scene = ({fileUrl}) => {
  const [geometry, setGeometry] = useState()

  useEffect(() => {
    const stlLoader = new STLLoader()
    stlLoader.load(fileUrl, geo => {
      setGeometry(geo)
    })
  }, [])

  return (
    <Canvas>
      <ambientLight />
      <mesh geometry={geometry}>
        <meshStandardMaterial color="#cccccc" />
      </mesh>
    </Canvas>
  )
}

export default Scene