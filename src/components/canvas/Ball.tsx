import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { Technology } from '../../types';

interface BallProps {
  icon: Technology["icon"]
}

const Ball: React.FC<BallProps> = ({ icon }) => {
  const [decal] = useTexture([icon]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} map={decal} />
      </mesh>
    </Float>
  );
};

const BallCanvas: React.FC<BallProps> = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
