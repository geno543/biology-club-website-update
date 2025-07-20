import { useRef, useCallback } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface CellProps {
  position: [number, number, number];
  scale?: number;
  delay?: number;
}

export default function Cell3D({ position, scale = 1, delay = 0 }: CellProps) {
  const cellRef = useRef<THREE.Group>(null);
  const time = useRef(delay);
  const { viewport } = useThree();
  const initialPosition = useRef(position);
  
  // Simplified movement parameters
  const movement = useRef({
    x: Math.random() * Math.PI * 2,
    y: Math.random() * Math.PI * 2,
    speed: {
      primary: 0.04 + Math.random() * 0.1,
      secondary: 0.02 + Math.random() * 0.08,
    },
    amplitude: {
      primary: 20 + Math.random() * 10,
      secondary: 10 + Math.random() * 8,
    },
    direction: {
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
    }
  });

  useFrame((_, delta) => {
    if (!cellRef.current) return;
    
    time.current += delta;

    const m = movement.current;
    const t = time.current;

    // Simplified movement calculation
    const xMovement = 
      Math.sin(t * m.speed.primary + m.x) * m.amplitude.primary * m.direction.x +
      Math.cos(t * m.speed.secondary) * m.amplitude.secondary;
    
    const yMovement = 
      Math.cos(t * m.speed.primary + m.y) * m.amplitude.primary * m.direction.y +
      Math.sin(t * m.speed.secondary) * m.amplitude.secondary;

    // Simplified boundary handling
    const maxX = viewport.width * 2;
    const maxY = viewport.height * 2;
    
    const boundaryCheck = (pos: number, max: number) => {
      return Math.max(-max, Math.min(max, pos));
    };

    const newX = boundaryCheck(initialPosition.current[0] + xMovement, maxX);
    const newY = boundaryCheck(initialPosition.current[1] + yMovement, maxY);
    const newZ = initialPosition.current[2];

    cellRef.current.position.set(newX, newY, newZ);

    // Simple rotation
    cellRef.current.rotation.x += delta * 0.2;
    cellRef.current.rotation.y += delta * 0.3;
  });

  return (
    <group ref={cellRef} position={position}>
      <Sphere args={[1, 16, 16]} scale={scale}>
        <meshPhongMaterial
          attach="material"
          color="#50c878"
          transparent
          opacity={0.6}
          shininess={60}
        />
      </Sphere>
    </group>
  );
}
