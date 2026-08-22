"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function PhysicalSculpture() {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  // Target rotation with heavy physical inertia
  const targetRotation = useRef({ x: 0.25, y: -0.45 });

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    // Subtle pointer parallax response with heavy physical dampening
    targetRotation.current.x = 0.25 + pointer.y * 0.3;
    targetRotation.current.y = -0.45 + pointer.x * 0.4;

    // Smooth inertia
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      targetRotation.current.x,
      2.5,
      delta
    );
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetRotation.current.y,
      2.5,
      delta
    );
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Primary Matte Basalt Stone Monolith */}
      <mesh position={[-0.25, -0.1, 0]} rotation={[0.08, 0.12, -0.04]}>
        <boxGeometry args={[2.0, 3.2, 1.4]} />
        <meshStandardMaterial
          color="#16181D"
          roughness={0.85}
          metalness={0.15}
        />
      </mesh>

      {/* Intersecting Precision Optical Dark Glass / Titanium Prism */}
      <mesh position={[0.4, 0.25, 0.3]} rotation={[-0.12, -0.18, 0.08]}>
        <boxGeometry args={[1.6, 2.7, 1.2]} />
        <meshStandardMaterial
          color="#1E222B"
          roughness={0.12}
          metalness={0.7}
          transparent
          opacity={0.82}
        />
      </mesh>

      {/* Subtle Hairline Edge Perimeter for Architectural Tactility */}
      <mesh position={[0.4, 0.25, 0.3]} rotation={[-0.12, -0.18, 0.08]}>
        <boxGeometry args={[1.605, 2.705, 1.205]} />
        <meshBasicMaterial
          color="#4B515D"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </group>
  );
}

export function StudioObject() {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!mounted || hasWebGL === false) {
    return (
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="w-48 h-64 border border-surface-border bg-surface/40 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-12 h-12 border border-stone-muted mb-4 rotate-45" />
          <span className="text-[10px] font-mono tracking-[0.2em] text-stone uppercase">
            STUDIO OBJECT // BASALT & GLASS
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[360px] sm:h-[420px] md:h-[480px] relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 38 }}
        dpr={[1, Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 2)]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
        }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          {/* Studio Ambient Fill */}
          <ambientLight color="#2A2E38" intensity={0.6} />

          {/* Warm Key Spotlight (3200K Studio Light) */}
          <directionalLight
            position={[5, 6, 4]}
            intensity={1.9}
            color="#FBF8F0"
          />

          {/* Cool Rim Fill Light */}
          <directionalLight
            position={[-4, -3, -2]}
            intensity={0.7}
            color="#8E929A"
          />

          {/* Very Subtle Warm Amber Edge Light */}
          <pointLight
            position={[2, -2, 3]}
            intensity={0.4}
            color="#D97706"
          />

          <PhysicalSculpture />
        </Suspense>
      </Canvas>
    </div>
  );
}
