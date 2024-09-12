import { useRef, useState } from "react"
import { useFBX } from "@react-three/drei"
import { Select } from "@react-three/postprocessing"
import { useControls, folder } from "leva"


export function Engine({ ...props }) {
  const group = useRef()
  let url = 'machine-transformed.fbx';
  const nodes = useFBX(url);
  console.log(nodes)
  //const { nodes } = useGLTF("/machine-transformed.glb")
  const [hovered, hover] = useState()
  const config = useControls({
    all: { value: false },
    parts: folder(
      {
        gear: { value: false },
        shaft: { value: false },
        cylinder: { value: false },
        piston1: { value: true },
        piston2: { value: false },
        piston3: { value: false },
      },
      { collapsed: true },
    ),
  })
  return (
    <group onPointerOver={(e) => hover(e.object.parent.name)} onPointerOut={(e) => hover(null)} ref={group} {...props} dispose={null}>
      <Select enabled={config.all}>
        <Select name="gear" enabled={hovered === "gear" || config.gear}>
          <mesh geometry={nodes.children[53].geometry} material={nodes.children[53].material} />
          <mesh geometry={nodes.children[51].geometry} material={nodes.children[51].material} />
          <mesh geometry={nodes.children[15].geometry} material={nodes.children[15].material} />
          <mesh geometry={nodes.children[50].geometry} material={nodes.children[50].material} />
          <mesh geometry={nodes.children[41].geometry} material={nodes.children[41].material} />
          <mesh geometry={nodes.children[8].geometry} material={nodes.children[8].material} />
          <mesh geometry={nodes.children[11].geometry} material={nodes.children[11].material} />
          <mesh geometry={nodes.children[2].geometry} material={nodes.children[2].material} />
          <mesh geometry={nodes.children[31].geometry} material={nodes.children[31].material} />
          <mesh geometry={nodes.children[21].geometry} material={nodes.children[21].material} />
          <mesh geometry={nodes.children[10].geometry} material={nodes.children[10].material} />
          <mesh geometry={nodes.children[28].geometry} material={nodes.children[28].material} />
        </Select>

        <Select name="shaft" enabled={hovered === "shaft" || config.shaft}>
          <mesh geometry={nodes.children[34].geometry} material={nodes.children[34].material} />
          <mesh geometry={nodes.children[20].geometry} material={nodes.children[20].material} />
          <mesh geometry={nodes.children[33].geometry} material={nodes.children[33].material} />
          <mesh geometry={nodes.children[16].geometry} material={nodes.children[16].material} />
          <mesh geometry={nodes.children[6].geometry} material={nodes.children[6].material} />
        </Select>

        <Select name="cylinder" enabled={hovered === "cylinder" || config.cylinder}>
          <mesh geometry={nodes.children[43].geometry} material={nodes.children[43].material} />
          <mesh geometry={nodes.children[48].geometry} material={nodes.children[48].material} />
          <mesh geometry={nodes.children[60].geometry} material={nodes.children[60].material} />
          <mesh geometry={nodes.children[30].geometry} material={nodes.children[30].material} />
          <mesh geometry={nodes.children[1].geometry} material={nodes.children[1].material} />
          <mesh geometry={nodes.children[24].geometry} material={nodes.children[24].material} />
          <mesh geometry={nodes.children[3].geometry} material={nodes.children[3].material} />
          <mesh geometry={nodes.children[13].geometry} material={nodes.children[13].material} />
        </Select>

        <Select name="piston1" enabled={hovered === "piston1" || config.piston1}>
          <mesh geometry={nodes.children[45].geometry} material={nodes.children[45].material} />
          <mesh geometry={nodes.children[46].geometry} material={nodes.children[46].material} />
          <mesh geometry={nodes.children[23].geometry} material={nodes.children[23].material} />
          <mesh geometry={nodes.children[18].geometry} material={nodes.children[18].material} />
          <mesh geometry={nodes.children[25].geometry} material={nodes.children[25].material} />
          <mesh geometry={nodes.children[14].geometry} material={nodes.children[14].material} />
          <mesh geometry={nodes.children[29].geometry} material={nodes.children[29].material} />
          <mesh geometry={nodes.children[23].geometry} material={nodes.children[23].material} />
          <mesh geometry={nodes.children[27].geometry} material={nodes.children[27].material} />
          <mesh geometry={nodes.children[35].geometry} material={nodes.children[35].material} />
          <mesh geometry={nodes.children[61].geometry} material={nodes.children[61].material} />
          <mesh geometry={nodes.children[44].geometry} material={nodes.children[44].material} />
          <mesh geometry={nodes.children[55].geometry} material={nodes.children[55].material} />
        </Select>

        <Select name="piston2" enabled={hovered === "piston2" || config.piston2}>
          <mesh geometry={nodes.children[36].geometry} material={nodes.children[36].material} />
          <mesh geometry={nodes.children[58].geometry} material={nodes.children[58].material} />
          <mesh geometry={nodes.children[56].geometry} material={nodes.children[56].material} />
          <mesh geometry={nodes.children[39].geometry} material={nodes.children[39].material} />
          <mesh geometry={nodes.children[26].geometry} material={nodes.children[26].material} />
          <mesh geometry={nodes.children[38].geometry} material={nodes.children[38].material} />
          <mesh geometry={nodes.children[0].geometry} material={nodes.children[0].material} />
          <mesh geometry={nodes.children[59].geometry} material={nodes.children[59].material} />
          <mesh geometry={nodes.children[5].geometry} material={nodes.children[5].material} />
          <mesh geometry={nodes.children[40].geometry} material={nodes.children[40].material} />
          <mesh geometry={nodes.children[49].geometry} material={nodes.children[49].material} />
        </Select>

        <Select name="piston3" enabled={hovered === "piston3" || config.piston3}>
          <mesh geometry={nodes.children[32].geometry} material={nodes.children[32].material} />
          <mesh geometry={nodes.children[19].geometry} material={nodes.children[19].material} />
          <mesh geometry={nodes.children[47].geometry} material={nodes.children[47].material} />
          <mesh geometry={nodes.children[51].geometry} material={nodes.children[51].material} />
          <mesh geometry={nodes.children[37].geometry} material={nodes.children[37].material} />
          <mesh geometry={nodes.children[7].geometry} material={nodes.children[7].material} />
          <mesh geometry={nodes.children[22].geometry} material={nodes.children[22].material} />
          <mesh geometry={nodes.children[9].geometry} material={nodes.children[9].material} />
          <mesh geometry={nodes.children[57].geometry} material={nodes.children[57].material} />
          <mesh geometry={nodes.children[17].geometry} material={nodes.children[17].material} />
          <mesh geometry={nodes.children[54].geometry} material={nodes.children[54].material} />
        </Select>
      </Select>
    </group>
  )
}
