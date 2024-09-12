import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Scene from './Scene';
//import Fbxviewer from './Fbxviewer';
//import StepViewer from './StepViewer'
//import stepfilepath from './simplefile.stp'
//import TreeDisplay from './TreeDisplay'
//import StpViewer from './StpViewer'
//import FBXBom from './FBXBom'
import SingleFileUploader from './SingleFileUploader'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SingleFileUploader/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
