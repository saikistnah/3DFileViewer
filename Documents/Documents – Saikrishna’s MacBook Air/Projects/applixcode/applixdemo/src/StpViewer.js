import {React,memo,Suspense} from 'react';
import { Canvas,useLoader } from '@react-three/fiber';
import { Environment, OrbitControls,useFBX } from '@react-three/drei';
//import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import {STLLoader} from 'three/examples/jsm/loaders/STLLoader'
import './App.css'

const StpViewer = memo(() => {
  let url = 'machine-transformed.fbx';
  const geometry = useFBX(url);
  console.log(geometry)
  console.log(geometry.children[1].material)
  const geom = useLoader(STLLoader, "output_stl_file.stl");
  console.log("STL:",geom)
  return (
    <div className='FBXStyle'>
      <Canvas>
        <Suspense fallback={null}>
          <primitive object={geometry} scale={0.005} />
          <OrbitControls />
          <Environment preset='studio' background />
        </Suspense>
      </Canvas>
    </div>
  );
});

export default StpViewer;