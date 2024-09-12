import * as THREE from 'three'
import occtimportjs from 'occt-import-js'

// const wasmBlob = dataURItoBlob(occtimportWasm)
// const wasmUrl = URL.createObjectURL(wasmBlob)
const wasmUrl = 'https://cdn.jsdelivr.net/npm/occt-import-js@0.0.22/dist/occt-import-js.wasm'

export async function LoadStep(fileUrl) {
  // const occtimportWasm = await import('occt-import-js/dist/occt-import-js.wasm').then((res) => res.default)

  // console.log('occtimportWasm', occtimportWasm)
  const targetObject = new THREE.Object3D()

  // init occt-import-js
  const occt = await occtimportjs({
    locateFile: (name) => {
      console.log('name', name)
      // return occtimportWasm
      return wasmUrl
    }
  })

  
  //const occt = await occtimportWasm ();

  // download a step file
  // let fileUrl = '../test/testfiles/cax-if/as1_pe_203.stp';
  let response = await fetch(fileUrl)
  let buffer = await response.arrayBuffer()

  // read the imported step file
  let fileBuffer = new Uint8Array(buffer)
  console.log(fileBuffer)
  let result = occt.ReadStepFile(fileBuffer,null)
   console.log(result)
  // process the geometries of the result
  for (let resultMesh of result.meshes) {
    let geometry = new THREE.BufferGeometry()

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(resultMesh.attributes.position.array, 3))
    if (resultMesh.attributes.normal) {
      geometry.setAttribute('normal', new THREE.Float32BufferAttribute(resultMesh.attributes.normal.array, 3))
    }
    const index = Uint16Array.from(resultMesh.index.array)
    geometry.setIndex(new THREE.BufferAttribute(index, 1))

    let material = null
    if (resultMesh.color) {
      const color = new THREE.Color(resultMesh.color[0], resultMesh.color[1], resultMesh.color[2])
      material = new THREE.MeshPhongMaterial({ color: color })
    } else {
      material = new THREE.MeshPhongMaterial({ color: 0xcccccc })
    }

    const mesh = new THREE.Mesh(geometry, material)
    targetObject.add(mesh)
  }
  return targetObject
}

