"use client";

import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";

import { initGlobalPointer } from "@/lib/globalPointer";

import { InteractiveBackgroundScene } from "./InteractiveBackgroundScene";

function BackgroundCanvas() {
  useEffect(() => {
    initGlobalPointer();
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 1.8, 11], fov: 50 }}
      dpr={[1, 1.25]}
      frameloop="always"
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ background: "transparent" }}
    >
      <InteractiveBackgroundScene />
    </Canvas>
  );
}

function StaticFallback() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 hero-mesh opacity-50" />
      <div className="absolute inset-0 grid-overlay opacity-20" />
    </div>
  );
}

export function PageBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    >
      <Suspense fallback={<StaticFallback />}>
        <BackgroundCanvas />
      </Suspense>
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background/50" />
    </div>
  );
}
