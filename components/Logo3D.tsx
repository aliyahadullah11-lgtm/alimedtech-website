import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* ✅ MOBILE CHECK (MOST IMPORTANT) */
const isMobile = window.innerWidth < 768;

const Logo3D: React.FC<{ size?: number; showText?: boolean }> = ({
  size = 1.5,
  showText = true,
}) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  /* ❌ MOBILE PAR 3D COMPLETELY OFF */
  if (isMobile) {
    return null;
  }

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Main Shape */}
        <mesh>
          <octahedronGeometry args={[size, 0]} />
          <MeshDistortMaterial
            color="#3b82f6"
            speed={2}
            distort={0.3}
          />
        </mesh>

        {/* Wireframe */}
        <mesh>
          <octahedronGeometry args={[size * 1.1, 1]} />
          <meshBasicMaterial
            color="#a855f7"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[size * 1.4, 0.02, 16, 100]} />
          <meshBasicMaterial color="#3b82f6" />
        </mesh>

        {showText && (
          <Text
            position={[0, -size * 1.8, 0]}
            fontSize={0.4}
            color="white"
            anchorX="center"
            anchorY="middle"
            font="https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-g.woff"
          >
            AliMedTech
          </Text>
        )}
      </Float>
    </group>
  );
};

export default Logo3D;