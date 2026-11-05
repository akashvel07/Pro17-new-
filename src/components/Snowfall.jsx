/* eslint-disable */
// Snow Fall — Originkit for Pro17 Analytics Footer
import React, { useRef, useEffect } from "react";

const COMPONENT_DEFAULTS = {
  count: 70,
  wind: 0,
  windVariation: 0.6,
  sizeMin: 0.5,
  sizeMax: 1.5,
  speedMin: 0.3,
  speedMax: 1.5,
  opacityMin: 15,
  opacityMax: 70,
  direction: "down",
  color: "#ffffff",
};

export default function Snowfall(props = {}) {
  const merged = { ...COMPONENT_DEFAULTS, ...props };
  const {
    count = 65,
    speedMin = 0.4,
    speedMax = 2.0,
    wind = 0,
    windVariation = 0.8,
    sizeMin = 1,
    sizeMax = 3.5,
    opacityMin = 20,
    opacityMax = 85,
    direction = "down",
    color = "#ffffff",
    style = {},
    className = "",
  } = merged;

  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Live config read by the loop so tweaks don't re-scatter the snow.
  const cfg = useRef({ color, wind, windVariation });
  cfg.current = { color, wind, windVariation };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const canvas = canvasRef.current;
    const cont = containerRef.current;
    if (!canvas || !cont) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let W = 0;
    let H = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let flakes = [];
    const rand = (a, b) => a + Math.random() * (b - a);
    const dirSign = direction === "up" ? -1 : 1;
    const sLo = Math.min(speedMin, speedMax);
    const sHi = Math.max(speedMin, speedMax);
    const rLo = Math.min(sizeMin, sizeMax);
    const rHi = Math.max(sizeMin, sizeMax);
    const oLo = Math.min(opacityMin, opacityMax) / 100;
    const oHi = Math.max(opacityMin, opacityMax) / 100;

    function build(entry) {
      const cr = entry?.contentRect;
      const rw =
        cr?.width ||
        cont.clientWidth ||
        cont.getBoundingClientRect().width;
      const rh =
        cr?.height ||
        cont.clientHeight ||
        cont.getBoundingClientRect().height;
      W = Math.max(1, Math.floor(rw) || 1);
      H = Math.max(1, Math.floor(rh) || 1);
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const n = Math.max(0, Math.round(count));
      flakes = new Array(n);
      for (let i = 0; i < n; i++) {
        flakes[i] = {
          x: Math.random() * W,
          y: Math.random() * H,
          r: rand(rLo, rHi),
          vy: rand(sLo, sHi),
          vx: rand(-1, 1),
          phase: Math.random() * Math.PI * 2,
          sway: rand(0.2, 0.9),
          alpha: rand(oLo, oHi),
        };
      }
    }

    function draw() {
      const { color: snowColor } = cfg.current;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = snowColor;
      for (let i = 0; i < flakes.length; i++) {
        const f = flakes[i];
        ctx.globalAlpha = f.alpha;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function loop(t) {
      const { wind: wBase, windVariation: wVar } = cfg.current;
      for (let i = 0; i < flakes.length; i++) {
        const f = flakes[i];
        f.y += f.vy * dirSign;
        f.x +=
          wBase +
          f.vx * wVar +
          Math.sin(t * 0.0012 + f.phase) * f.sway;
        if (dirSign > 0 && f.y - f.r > H) {
          f.y = -f.r;
          f.x = Math.random() * W;
        } else if (dirSign < 0 && f.y + f.r < 0) {
          f.y = H + f.r;
          f.x = Math.random() * W;
        }
        if (f.x < -f.r) f.x = W + f.r;
        else if (f.x > W + f.r) f.x = -f.r;
      }
      draw();
      raf = requestAnimationFrame(loop);
    }

    build();
    draw();
    raf = requestAnimationFrame(loop);

    const ro = new ResizeObserver((entries) => {
      if (entries && entries[0]) {
        build(entries[0]);
        draw();
      }
    });
    ro.observe(cont);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [
    count,
    speedMin,
    speedMax,
    sizeMin,
    sizeMax,
    opacityMin,
    opacityMax,
    direction,
  ]);

  return (
    <div
      ref={containerRef}
      className={`snowfall-container ${className}`}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
        ...style,
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          display: "block",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
