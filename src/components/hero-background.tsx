"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, RoundedBox, Sphere, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

function FloatingPhone({ position }: { position: [number, number, number] }) {
  const phoneRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (phoneRef.current) {
      phoneRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      phoneRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={phoneRef} position={position} scale={0.8}>
        {/* Phone body */}
        <RoundedBox args={[1.8, 3.6, 0.15]} radius={0.15} smoothness={4}>
          <meshStandardMaterial 
            color="#1a1a2e" 
            metalness={0.9} 
            roughness={0.1}
          />
        </RoundedBox>
        
        {/* Screen */}
        <RoundedBox args={[1.5, 3.2, 0.02]} radius={0.1} position={[0, 0, 0.1]}>
          <meshStandardMaterial 
            color="#0f0f23"
            emissive="#4a90d9"
            emissiveIntensity={0.1}
            metalness={0.5}
            roughness={0.2}
          />
        </RoundedBox>
        
        {/* Camera bump */}
        <Sphere args={[0.15, 16, 16]} position={[-0.5, 1.5, -0.05]}>
          <meshStandardMaterial color="#2a2a3e" metalness={0.9} roughness={0.1} />
        </Sphere>
      </group>
    </Float>
  );
}

function FloatingCover({ position, color }: { position: [number, number, number]; color: string }) {
  const coverRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (coverRef.current) {
      coverRef.current.rotation.y = state.clock.elapsedTime * 0.4 + position[0];
      coverRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
      <mesh ref={coverRef} position={position}>
        <RoundedBox args={[1.5, 2.5, 0.08]} radius={0.08}>
          <MeshDistortMaterial 
            color={color} 
            speed={2} 
            distort={0.2}
            metalness={0.7}
            roughness={0.2}
          />
        </RoundedBox>
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const particles = useMemo(() => {
    const arr = new Float32Array(100);
    for (let i = 0; i < 100; i++) {
      arr[i] = Math.random() * 10 - 5;
    }
    return arr;
  }, []);

  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(particles, 3));
    return geometry;
  }, [particles]);
  
  return (
    <points geometry={particleGeometry}>
      <pointsMaterial 
        size={0.05} 
        color="#4a90d9" 
        transparent 
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function GlowingOrbs() {
  const orb1Ref = useRef<THREE.Mesh>(null);
  const orb2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (orb1Ref.current && orb2Ref.current) {
      const t = state.clock.elapsedTime;
      orb1Ref.current.position.x = Math.sin(t * 0.5) * 2;
      orb1Ref.current.position.y = Math.cos(t * 0.3) * 2;
      orb2Ref.current.position.x = Math.cos(t * 0.4) * 3;
      orb2Ref.current.position.y = Math.sin(t * 0.6) * 3;
    }
  });

  return (
    <>
      <mesh ref={orb1Ref} position={[-3, 1, -2]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial 
          color="#4a90d9" 
          transparent 
          opacity={0.15}
          emissive="#4a90d9"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh ref={orb2Ref} position={[3, -1, -3]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial 
          color="#9b59b6" 
          transparent 
          opacity={0.1}
          emissive="#9b59b6"
          emissiveIntensity={0.5}
        />
      </mesh>
    </>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.12_0.015_240)] via-[oklch(0.15_0.02_250)] to-[oklch(0.12_0.015_240)]" />
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#4a90d9" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9b59b6" />
        
        <GlowingOrbs />
        
        <FloatingPhone position={[2, 0, 0]} />
        <FloatingCover position={[-2.5, 0.5, -1]} color="#3498db" />
        <FloatingCover position={[-2, -1, -2]} color="#9b59b6" />
        <FloatingCover position={[2.5, 1, -1.5]} color="#e74c3c" />
        
        <ParticleField />
      </Canvas>
    </div>
  );
}
