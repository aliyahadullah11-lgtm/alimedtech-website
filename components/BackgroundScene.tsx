
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Grid } from '@react-three/drei';
import * as THREE from 'three';

const BackgroundScene: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);

  const sphere = useMemo(() => {
    const coords = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      coords[i * 3] = (Math.random() - 0.5) * 50;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 50;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return coords;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
      pointsRef.current.rotation.x += 0.0002;
    }
  });

  return (
    <group>
      <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      <Grid
        infiniteGrid
        fadeDistance={40}
        fadeStrength={5}
        sectionColor="#1e293b"
        cellColor="#0f172a"
        sectionSize={5}
        cellSize={1}
        position={[0, -10, 0]}
      />
      
      <fog attach="fog" args={['#020617', 5, 30]} />
    </group>
  );
};

export default BackgroundScene;
