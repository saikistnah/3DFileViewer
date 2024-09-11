import React from "react";
import Trees from "./Trees";
import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import batmanfile from './batman70.fbx'
import tablexfile from './tablex.fbx'

const TreeDisplay = () => {
  return (
    <Canvas>
    <Physics>
      <Trees
        fbx={batmanfile}
        position={[10, 0, 20]}
        scale={[0.01, 0.01, 0.01]}
      />
      
    </Physics>
    </Canvas>
  );
};
export default TreeDisplay;