import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { TextureLoader, PlaneGeometry } from 'three';
import { useNavigate } from 'react-router-dom';

const RotatingMesh = ({ rotation }) => {
  const navigate = useNavigate();
  const textureLoader = new TextureLoader();
  const radius = 6;
  const [currentTextureIndex, setCurrentTextureIndex] = useState(0);
  const meshRef = useRef();

  const loadTexture = (path) => {
    return textureLoader.load(path);
  };

  const textures = useMemo(() => [
    { texture: loadTexture('hello/assets/daises.png'), path: 'daises' },
    { texture: loadTexture('hello/assets/substitution.jpg'), path: 'substitution' },
    { texture: loadTexture('hello/assets/frontiers.png'), path: 'nextfrontiers' },
    { texture: loadTexture('hello/assets/omniquest.png'), path: 'omniquest' },
    { texture: loadTexture('hello/assets/koala.png'), path: 'koala' },
    { texture: loadTexture('hello/assets/spieglein.jpg'), path: 'spieglein' },
    { texture: loadTexture('hello/assets/busy.png'), path: 'busydoinotin' },
    { texture: loadTexture('hello/assets/beichten.png'), path: 'beichten' },
  ], []);

  const planeGeometry = useMemo(() => {
    const geometry = new PlaneGeometry(1.5, 2, 60, 60);
    const vertices = geometry.attributes.position;

    for (let i = 0; i < vertices.count; i++) {
      const x = vertices.getX(i);
      const theta = (x / 3) * Math.PI * 1.5;
      vertices.setX(i, x + (radius * Math.sin(theta) * 0.1));
      vertices.setZ(i, radius + radius * Math.cos(theta) * 0.05);
    }

    vertices.needsUpdate = true;
    return geometry;
  }, [radius]);

  const rotationIncrement = 5.77;

  useEffect(() => {
    const normalizedRotation = (rotation[1] % 360 + 360) % 360;
    const textureIndex = Math.floor(normalizedRotation / rotationIncrement) % textures.length;
    setCurrentTextureIndex(textureIndex);
  }, [rotation, rotationIncrement, textures.length]);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 12], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full h-full"
    >
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <mesh ref={meshRef} rotation={rotation}>
        <primitive object={planeGeometry} />
        <meshBasicMaterial
          attach="material"
          map={textures[currentTextureIndex].texture}
          toneMapped={false}
        />
      </mesh>
    </Canvas>
  );
};

export default RotatingMesh;
