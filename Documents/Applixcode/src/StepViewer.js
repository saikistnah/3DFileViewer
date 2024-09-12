import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'

import { LoadStep } from './StepLoader'
import { Environment, OrbitControls } from '@react-three/drei'

import { Select,EffectComposer, SSAO, SMAA, Selection, Outline } from "@react-three/postprocessing"
import { useControls, folder } from "leva"

function Box(props) {
  return (
    <mesh
      {...props} >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  )
}

function StepModel({ url, ...props }) {
  //const group = useRef()
  const [obj, setObj] = useState(null)
  const [hovered, hover] = useState(false)
  const config = useControls({
    all: { value: false },
    parts: folder(
      {
        gear: { value: false },
      },
      { collapsed: true },
    ),
  })
  useEffect(() => {
    async function load() {
      // const mainObject = await LoadStep('/as1_pe_203.stp')
      const mainObject = await LoadStep(url)
      console.log('mainObject', mainObject)
      setObj(mainObject)
    }
    load()
  }, [])
  if (!obj) {
    return null
  }
  return (
    <Selection>
          <EffectComposer multisampling={0} autoClear={false} enableNormalPass enableZoom>
            <SSAO radius={0.05} intensity={150} luminanceInfluence={0.5} color="black" />
            <Outline visibleEdgeColor="green" hiddenEdgeColor="green" blur width={1000} edgeStrength={100} />
            <SMAA />
          </EffectComposer>
          <group {...props} scale={2.5} onPointerOver={(e) => hover(e.object.parent.name)} onPointerOut={(e) => hover(null)} dispose={null}>
            <Select name="gear" enabled={hovered === "gear" || config.gear}>
            <Box geometry={obj.children[0].geometry} material={obj.children[0].material}/>
            </Select>
          </group>
    </Selection>
  )
}

export default function StepViewer() {
  return (
    <Canvas width="100%">
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <StepModel
        scale={[0.1, 0.1, 0.1]}
        url="/17HM08-1204S.STEP"
      />
    </Canvas>
  )
}
