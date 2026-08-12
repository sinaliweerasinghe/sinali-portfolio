import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';

export default function FloatingShape() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3);
    meshRef.current.rotation.y = Math.cos(clock.getElapsedTime() * 0.5);
    meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={1.2}>
      <MeshDistortMaterial
        color="#6C63FF"
        roughness={0.2}
        metalness={0.8}
        distort={0.4}
        speed={2}
        emissive="#3D3B8A"
        emissiveIntensity={0.3}
      />
    </Sphere>
  );
}