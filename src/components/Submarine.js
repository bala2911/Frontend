import React, { useLayoutEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export const Submarine = ({ currentColor }) => {
  const { scene, nodes, materials } = useGLTF('./models/scene.gltf');
  console.log('nodes:', nodes);

  useLayoutEffect(() => {
    Object.assign(materials.Body, {
      roughness: 0,
      metalness: 0.25,
      emissive: new THREE.Color(0x000000),
      color: currentColor,
      envMapIntensity: 0.5,
    });
    Object.assign(materials.Logo, {
      roughness: 0,
      metalness: 0.25,
      emissive: new THREE.Color(0x000000),
      color: currentColor,
      envMapIntensity: 0.5,
    });
    Object.assign(materials.Lens, {
      roughness: 0,
      metalness: 0.25,
      emissive: new THREE.Color(0x000000),
      color: currentColor,
      envMapIntensity: 0.5,
    });
    console.log(materials);
  }, [scene, nodes, materials, currentColor]);

  return <primitive object={scene} />;
};
