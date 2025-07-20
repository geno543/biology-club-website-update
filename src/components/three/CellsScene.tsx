import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, AdaptiveDpr, Loader } from '@react-three/drei';
import Cell3D from './Cell3D';
import { memo, useMemo, Suspense } from 'react';
import dynamic from 'next/dynamic';

const CellsScene = memo(() => {
  const cells = useMemo(() => {
    const cellsArray = [];
    const count = 100; // Reduced number of cells
    
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 150;
      const z = -80 - Math.random() * 80;
      
      const sizeGroup = Math.random();
      let scale;
      if (sizeGroup < 0.15) {
        scale = 2.0 + Math.random() * 0.8;
      } else if (sizeGroup < 0.35) {
        scale = 1.5 + Math.random() * 0.5;
      } else if (sizeGroup < 0.65) {
        scale = 1.1 + Math.random() * 0.4;
      } else {
        scale = 0.8 + Math.random() * 0.3;
      }
      
      cellsArray.push({
        position: [x, y, z] as [number, number, number],
        scale,
        delay: Math.random() * 30
      });
    }
    return cellsArray;
  }, []);

  return (
    <div className="absolute inset-0">
      <Canvas 
        camera={{ 
          position: [0, 0, 100],
          fov: 45,
          near: 0.1,
          far: 1000
        }}
        style={{ touchAction: 'none' }}
        shadows={false} // Disabled shadows for performance
        dpr={Math.min(1.5, window.devicePixelRatio)} // Limit DPR
        performance={{ min: 0.5 }} // Allow performance scaling
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <pointLight position={[100, 100, 100]} intensity={1.0} />
          <pointLight position={[-100, -100, 100]} intensity={0.8} />
          
          <fog attach="fog" args={['#000', 80, 250]} />
          
          {cells.map((cell, index) => (
            <Cell3D
              key={index}
              position={cell.position}
              scale={cell.scale}
              delay={cell.delay}
            />
          ))}
          
          <OrbitControls 
            enabled={false}
            makeDefault
          />
          <AdaptiveDpr pixelated />
          <Preload all />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
});

CellsScene.displayName = 'CellsScene';

export default dynamic(() => Promise.resolve(CellsScene), { ssr: false });
