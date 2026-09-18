"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const DeviceShowcase = dynamic(
  () => import("screenframe3d/react").then((mod) => mod.DeviceShowcase),
  { ssr: false },
);

const poster = "/rediscover/device-poster.webp";
const tilt = { x: 0.12, y: -0.38, z: -0.06 };
const spring = { enabled: true, strength: 0.045, damping: 0.9, mass: 2.2 };

function canUseLiveDevice() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return false;
  }
  const canvas = document.createElement("canvas");
  return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
}

export function Device3D({
  src,
  alt,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!canUseLiveDevice()) return;
    const start = () => setEnabled(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start, { timeout: 1200 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(start, 120);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div
      className={ready ? "rd-device-3d is-live" : "rd-device-3d"}
      role="img"
      aria-label={alt}
    >
      <div className="rd-device-3d-poster">
        <Image
          src={poster}
          alt=""
          fill
          sizes="(max-width: 700px) 340px, 460px"
          priority
          draggable={false}
        />
      </div>
      {enabled ? (
        <DeviceShowcase
          screenshot={src}
          device="apple/iphone-14-pro"
          fov={48}
          zoom={1.8}
          scrollTilt
          tiltEnabled
          poster={false}
          cachePoster={false}
          cacheDeviceTextures
          baseTilt={tilt}
          spring={spring}
          onReady={() => setReady(true)}
        />
      ) : null}
    </div>
  );
}
