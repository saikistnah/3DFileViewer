import { useBox } from "@react-three/cannon";
import { useFBX } from "@react-three/drei";
import React, { Suspense } from "react";
import * as THREE from 'three'
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

const Trees = (props) => {
  const [ref] = useBox(() => ({
    mass: 1,
    type: "Static",
    ...props,
  }));
  const manager = new THREE.LoadingManager();
  manager.addHandler( /\.tga$/i, new TGALoader() );
  //let fbx = useFBX(props.fbx);
  let fbx = new FBXLoader(manager);
  fbx.load(props.fbx,null)
  //fbx.path="/Users/saikrishnagudla/Documents/Documents – Saikrishna’s MacBook Air/Projects/applixcode/applixdemo/src/batman70.fbx"
  console.log(fbx)
  return (
    <Suspense fallback={null}>
      <mesh ref={ref} scale={props.scale} position={props.position}>
        <primitive object={fbx} dispose={null} />
      </mesh>
    </Suspense>
  );
};

export default Trees;