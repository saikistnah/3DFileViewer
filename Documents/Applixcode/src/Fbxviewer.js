import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
//import fbx from './batman70.fbx'

const FbxViewer = () => {
  const ref = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: ref.current,
      antialias: true,
    });

    const controls = new OrbitControls(camera, renderer.domElement);

    const loader = new FBXLoader();
    const fbx = "/Modern Chair of mine1.fbx"
    loader.load(fbx.toString(), (object) => {
      scene.add(object);
    });

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={ref} />;
};

export default FbxViewer;