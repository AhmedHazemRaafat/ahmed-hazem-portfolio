"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group, Mesh, PointLight, Points } from "three";
import * as THREE from "three";

import { globalPointer } from "@/lib/globalPointer";
import { useReducedMotion } from "@/lib/useReducedMotion";

const GRID_SIZE = 42;
const GRID_DIVISIONS = 28;

function WireframeTerrain({ reducedMotion }: { reducedMotion: boolean }) {
  const meshRef = useRef<Mesh>(null);

  const geometry = useMemo(
    () =>
      new THREE.PlaneGeometry(GRID_SIZE, GRID_SIZE, GRID_DIVISIONS, GRID_DIVISIONS),
    []
  );

  const basePositions = useMemo(
    () => Float32Array.from(geometry.attributes.position.array),
    [geometry]
  );

  useFrame((state) => {
    if (!meshRef.current || reducedMotion) return;

    const t = state.clock.elapsedTime * 0.3;
    const positions = geometry.attributes.position;
    const { x: mx, y: my } = globalPointer;

    for (let i = 0; i < positions.count; i++) {
      const bx = basePositions[i * 3];
      const by = basePositions[i * 3 + 1];
      const wave =
        Math.sin(bx * 0.35 + t) * Math.cos(by * 0.35 + t * 0.7) * 0.45 +
        Math.sin(bx * 0.15 - t * 0.4) * 0.12;
      const ripple = (mx * bx + my * by) * 0.09;
      const cursorWave =
        Math.exp(-((bx - mx * 12) ** 2 + (by - my * 8) ** 2) * 0.08) * 0.6;
      positions.setZ(i, wave + ripple + cursorWave);
    }

    positions.needsUpdate = true;
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      rotation={[-Math.PI / 2.15, 0, 0]}
      position={[0, -3, 0]}
    >
      <meshBasicMaterial
        color="#6366f1"
        wireframe
        transparent
        opacity={0.16}
      />
    </mesh>
  );
}

function HorizonGlow() {
  return (
    <mesh position={[0, -2.5, -3]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[22, 10]} />
      <meshBasicMaterial color="#4f46e5" transparent opacity={0.05} />
    </mesh>
  );
}

function AccentRings({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current || reducedMotion) return;
    const t = state.clock.elapsedTime;
    const { x: mx, y: my } = globalPointer;
    groupRef.current.rotation.z = t * 0.04 + mx * 0.08;
    groupRef.current.rotation.x =
      Math.PI / 2.8 + Math.sin(t * 0.25) * 0.04 + my * 0.05;
  });

  return (
    <group ref={groupRef} position={[0, 0.5, -1]}>
      {[3.2, 3.8, 4.4].map((radius, i) => (
        <mesh key={radius} rotation={[Math.PI / 2.5, 0, i * 0.35]}>
          <torusGeometry args={[radius, 0.005, 6, 96]} />
          <meshBasicMaterial
            color="#818cf8"
            transparent
            opacity={0.08 + i * 0.03}
          />
        </mesh>
      ))}
    </group>
  );
}

function Constellation({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<Group>(null);

  const { positions, connections } = useMemo(() => {
    const count = 48;
    const pos: number[] = [];
    const seeds: THREE.Vector3[] = [];

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 14;
      const y = Math.random() * 5 - 0.5;
      const z = (Math.random() - 0.5) * 4 - 2;
      pos.push(x, y, z);
      seeds.push(new THREE.Vector3(x, y, z));
    }

    const linePoints: number[] = [];
    seeds.forEach((a, i) => {
      let nearest = -1;
      let minDist = Infinity;
      seeds.forEach((b, j) => {
        if (i === j) return;
        const d = a.distanceTo(b);
        if (d < minDist && d < 2.8) {
          minDist = d;
          nearest = j;
        }
      });
      if (nearest >= 0 && i < nearest) {
        linePoints.push(
          a.x,
          a.y,
          a.z,
          seeds[nearest].x,
          seeds[nearest].y,
          seeds[nearest].z
        );
      }
    });

    return {
      positions: new Float32Array(pos),
      connections: new Float32Array(linePoints),
    };
  }, []);

  useFrame((state) => {
    if (!groupRef.current || reducedMotion) return;
    const t = state.clock.elapsedTime * 0.1;
    const { x: mx } = globalPointer;
    groupRef.current.rotation.y = t + mx * 0.15;
  });

  return (
    <group ref={groupRef} position={[0, 0.2, -0.5]}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#a78bfa"
          transparent
          opacity={0.4}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[connections, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#6366f1" transparent opacity={0.1} />
      </lineSegments>
    </group>
  );
}

function CursorLight({ reducedMotion }: { reducedMotion: boolean }) {
  const lightRef = useRef<PointLight>(null);

  useFrame(() => {
    if (!lightRef.current || reducedMotion) return;
    lightRef.current.position.x = THREE.MathUtils.lerp(
      lightRef.current.position.x,
      globalPointer.x * 10,
      0.08
    );
    lightRef.current.position.y = THREE.MathUtils.lerp(
      lightRef.current.position.y,
      globalPointer.y * 5 + 1,
      0.08
    );
  });

  return (
    <pointLight
      ref={lightRef}
      position={[0, 1, 4]}
      intensity={0.7}
      color="#a78bfa"
      distance={18}
    />
  );
}

function SceneGroup({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<Group>(null);

  useFrame(() => {
    if (!groupRef.current || reducedMotion) return;
    const { x: mx, y: my } = globalPointer;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mx * 0.18,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      my * 0.1,
      0.05
    );
  });

  return (
    <group ref={groupRef}>
      <HorizonGlow />
      <WireframeTerrain reducedMotion={reducedMotion} />
      <AccentRings reducedMotion={reducedMotion} />
      <Constellation reducedMotion={reducedMotion} />
    </group>
  );
}

export function InteractiveBackgroundScene() {
  const reducedMotion = useReducedMotion();

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 4, 6]} intensity={0.35} color="#818cf8" />
      <CursorLight reducedMotion={reducedMotion} />
      <SceneGroup reducedMotion={reducedMotion} />
    </>
  );
}
