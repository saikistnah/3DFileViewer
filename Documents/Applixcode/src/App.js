import React from 'react';
import {StlViewer} from "react-stl-viewer";
//import ReactThreeFbxViewer from 'react-three-fbx-viewer';
import stlfile from './3DSMaxExport.stl'


//const url = "/Users/saikrishnagudla/Documents/Documents – Saikrishna’s MacBook Air/Projects/applixcode/applixdemo/src/3DSMaxExport.STL";
//let fbxUrl = require('./asd.fbx');
const style = {
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
}
/*
const cameraPosition = {
  x:150,
  y:300,
  z:350
}
*/

function App() {
    return (
        <StlViewer
            style={style}
            orbitControls
            shadows
            url={stlfile}
        />
    );
}

export default App;
