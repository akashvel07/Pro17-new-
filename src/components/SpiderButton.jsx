/* eslint-disable */
// SpiderButton — Originkit for Pro17 Analytics
// A glossy suit-red pill edged with white thread and cobwebs that fires web at approaching pointers.

import React, { useEffect, useRef, useState } from "react";

const GLOVE =
  "M9 14V3.6a2.5 2.5 0 0 1 5 0V12.2a2.2 2.2 0 0 1 4.4 0.4a2.2 2.2 0 0 1 4.4 0.8a2.2 2.2 0 0 1 4.2 1.6V22c0 4-2.6 7-6 7H14.6c-3 0-5.4-1.8-6.6-4.4L4.1 18.6a2.3 2.3 0 0 1 3.6-2.8L9 17.4Z";
const GLOVE_LINES = "M18.4 12.6V17.2M22.8 13.4V17.6M14 12.2V16.6";
const CUFF =
  "M12.6 28.6h12.2a1.6 1.6 0 0 1 1.6 1.6v3.4a1.6 1.6 0 0 1-1.6 1.6H12.6a1.6 1.6 0 0 1-1.6-1.6v-3.4a1.6 1.6 0 0 1 1.6-1.6Z";
const CUFF_LINES = "M15.4 29.2v5.4M18.7 29.2v5.4M22 29.2v5.4";
const HOT_X = 11.5,
  HOT_Y = 1;

const GRIPS = [
  [11.5, 3.6],
  [16.2, 13.2],
  [20.6, 14],
  [24.9, 15.8],
  [5.6, 18],
  [11.5, 10],
  [18.5, 22],
  [18.7, 31.6],
];

const ARROW = "M1.5 1.5V23.2L6.6 18.4L10.1 26.4L13.6 24.9L10.2 17.1H17.3Z";
const ARROW_HOT_X = 1.5,
  ARROW_HOT_Y = 1.5;

const ARROW_GRIPS = [
  [2.6, 4.2],
  [2.4, 10],
  [6.5, 7.5],
  [11.5, 12.5],
  [2.4, 17.5],
  [14.5, 16],
  [11.5, 24.2],
  [6.8, 17.5],
];

const NATIVE_GRIPS = [
  [0, 0],
  [5, 7],
  [-4, 6],
  [8, 13],
  [-2, 12],
  [3, 3],
  [6, 18],
  [0, 16],
];

const MS = 7;
const NP = 12;

const VERT = `attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}`;

const FRAG = `precision highp float;
uniform vec2 uRes;
uniform float uDpr;
uniform vec4 uPill;
uniform float uLean;
uniform vec3 uBase;
uniform vec3 uShine;
uniform float uRim;
uniform float uGlint;
uniform float uShadow;

vec2 field(vec2 p){
  float rr = uPill.w * 0.5;
  vec2 c = vec2(uPill.x + uPill.z * 0.5, uPill.y + rr);
  float a = max(0.0, uPill.z * 0.5 - rr);
  vec2 q = p - c;
  return vec2(length(q - vec2(clamp(q.x, -a, a), 0.0)) - rr, rr);
}
float dist(vec2 p){ return field(p).x; }

float env(vec3 R){
  R.x += uLean * 0.18;
  float up = -R.y;
  float e = 0.015;
  e += smoothstep(0.3, 0.5, up) * smoothstep(0.75, 0.55, up) * smoothstep(0.8, 0.5, abs(R.x)) * 2.6;
  e += smoothstep(0.8, 0.95, up) * 0.6;
  e += smoothstep(-0.5, -0.7, R.x) * smoothstep(0.5, 0.25, abs(R.y)) * 1.1;
  e += smoothstep(0.6, 0.85, R.x) * smoothstep(0.6, 0.2, abs(R.y)) * 0.5;
  e += smoothstep(0.25, 0.7, R.y) * 1.25;
  return e;
}

void main(){
  vec2 p = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y) / uDpr;
  vec2 f = field(p);
  float d = f.x;
  float aa = clamp(0.5 - d * uDpr, 0.0, 1.0);

  float sh = 0.0;
  if (aa < 1.0 && uShadow > 0.0 && d < 30.0) {
    float ds = dist(p - vec2(2.0, 9.0));
    sh = (1.0 - smoothstep(-4.0, 16.0, ds)) * uShadow;
  }

  vec3 col = vec3(0.0);
  if (aa > 0.0) {
    float B = max(f.y, 0.8);
    float s = clamp(-d, 0.0, B);
    float z = sqrt(max(1e-3, s * (2.0 * B - s)));
    float slope = min((B - s) / z, 6.0);
    float e = 0.5;
    vec2 g = vec2(dist(p + vec2(e, 0.0)) - d, dist(p + vec2(0.0, e)) - d);
    g = length(g) > 1e-6 ? normalize(g) : vec2(0.0);
    vec3 n = normalize(vec3(g * slope, 1.0));
    vec3 R = reflect(vec3(0.0, 0.0, -1.0), n);
    float fres = 0.05 + 0.95 * pow(1.0 - max(n.z, 0.0), 3.0);
    col = uBase + min(env(R) * fres * uRim, 1.0) * uShine;
    col += pow(max(dot(R, normalize(vec3(-0.35, -0.75, 0.56))), 0.0), 70.0) * 1.2 * uGlint;
    col += pow(max(dot(R, normalize(vec3(0.55, -0.35, 0.76))), 0.0), 140.0) * 0.55 * uGlint;
  }
  float alpha = aa + (1.0 - aa) * sh;
  gl_FragColor = vec4(col * aa, alpha);
}`;

const ADVANCED_DEFAULTS = {
  hover: 50,
  grain: 0,
  vignette: 0,
  sense: 260,
  release: 200,
  cobwebSize: 30,
  threadBorder: true,
  senseLines: true,
  shine: "#EDF0F7",
  rim: 100,
  glint: 100,
  shadow: 20,
  gloveScale: 155,
  pressScale: 96,
  strandWidth: 100,
  stretchThin: 50,
  gravity: 65,
  damping: 92,
  snapDamping: 86,
  sway: 5,
  lungeMs: 140,
  splatInMs: 900,
  splatOutMs: 600,
  lingerMs: 1700,
  fingerLift: 52,
  ghostDelayMs: 2500,
  hairs: true,
  webs: true,
};

const RGB_CACHE = new Map();
function toRgb(input, fallback) {
  if (typeof input !== "string") return fallback;
  let hit = RGB_CACHE.get(input);
  if (hit === undefined) {
    hit = parseRgb(input);
    RGB_CACHE.set(input, hit);
  }
  return hit ?? fallback;
}

function parseRgb(raw) {
  let s = raw.trim();
  const v = /^var\(\s*--[^,]+,\s*(.+)\)$/.exec(s);
  if (v) s = v[1].trim();
  const hex = /^#([0-9a-f]{3,8})$/i.exec(s);
  if (hex) {
    let h = hex[1];
    if (h.length === 3 || h.length === 4)
      h = h.slice(0, 3).split("").map((c) => c + c).join("");
    if (h.length < 6) return null;
    return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  }
  const fn = /^rgba?\(([^)]*)\)$/i.exec(s);
  if (fn) {
    const p = fn[1].split(/[\s,/]+/).filter(Boolean).map(parseFloat);
    if (p.length >= 3 && p.slice(0, 3).every(Number.isFinite))
      return [p[0] / 255, p[1] / 255, p[2] / 255];
  }
  return null;
}

const mixRgb = (a, b, t) => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
  a[2] + (b[2] - a[2]) * t,
];
const cssRgb = (c, a = 1) =>
  `rgba(${Math.round(c[0] * 255)},${Math.round(c[1] * 255)},${Math.round(c[2] * 255)},${a})`;

const num = (v, fallback, lo, hi) => {
  const n = typeof v === "number" && Number.isFinite(v) ? v : fallback;
  return Math.max(lo, Math.min(hi, n));
};

const SHINE_FALLBACK = [0.93, 0.94, 0.97];
const SUIT_FALLBACK = [0.6, 0.11, 0.15]; // Pro17 Primary Red #981B25
const WEB_FALLBACK = [0.96, 0.96, 0.97];

// Extra canvas padding around the button to let the web lines shoot out
const PADDING = 140;

export default function SpiderButton({
  id,
  children,
  label = "Schedule Consultation",
  onClick,
  type = "button",
  suitColor = "#981B25", // Pro17 brand primary red
  webColor = "#F5F5F7",
  textColor = "#FFFFFF",
  cursor = "native", // native pointer integration so web attaches to mouse
  size = 48,
  strands = 7,
  reach = 130,
  cobwebs = true,
  disabled = false,
  className = "",
  style = {},
  buttonStyle = {},
  advanced = {},
}) {
  const adv = { ...ADVANCED_DEFAULTS, ...advanced };

  const stageRef = useRef(null);
  const btnRef = useRef(null);
  const glRef = useRef(null);
  const handRef = useRef(null);
  const [fallback, setFallback] = useState(false);

  const live = useRef({
    suitColor,
    webColor,
    cobwebs,
    strands,
    reach,
    cursor,
    adv,
  });
  live.current = {
    suitColor,
    webColor,
    cobwebs,
    strands,
    reach,
    cursor,
    adv,
  };

  useEffect(() => {
    const stage = stageRef.current;
    const btn = btnRef.current;
    const glc = glRef.current;
    const hc = handRef.current;
    if (!stage || !btn || !glc || !hc) return;

    const hx = hc.getContext("2d");
    if (!hx) return;

    const reduced =
      typeof window !== "undefined" &&
      !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    // ---- WebGL setup ----
    let gl = glc.getContext("webgl", {
      premultipliedAlpha: true,
      antialias: false,
      alpha: true,
    });
    const shaders = [];
    let prog = null;
    let quad = null;

    const disposeGL = () => {
      if (!gl) return;
      if (quad) gl.deleteBuffer(quad);
      if (prog) gl.deleteProgram(prog);
      for (const s of shaders) gl.deleteShader(s);
      quad = null;
      prog = null;
      shaders.length = 0;
    };

    if (gl) {
      const sh = (t, src) => {
        const s = gl.createShader(t);
        if (!s) return null;
        shaders.push(s);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
      };
      const vs = sh(gl.VERTEX_SHADER, VERT);
      const fs = sh(gl.FRAGMENT_SHADER, FRAG);
      const p = gl.createProgram();
      if (p && vs && fs) {
        gl.attachShader(p, vs);
        gl.attachShader(p, fs);
        gl.linkProgram(p);
        if (gl.getProgramParameter(p, gl.LINK_STATUS)) {
          prog = p;
        } else {
          gl.deleteProgram(p);
        }
      }
    }

    let U = null;
    let quadData = null;
    if (gl && prog) {
      gl.useProgram(prog);
      const uni = (n) => gl.getUniformLocation(prog, n);
      U = {
        uRes: uni("uRes"),
        uDpr: uni("uDpr"),
        uPill: uni("uPill"),
        uLean: uni("uLean"),
        uBase: uni("uBase"),
        uShine: uni("uShine"),
        uRim: uni("uRim"),
        uGlint: uni("uGlint"),
        uShadow: uni("uShadow"),
      };

      quad = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, quad);
      const aLoc = gl.getAttribLocation(prog, "a");
      gl.enableVertexAttribArray(aLoc);
      gl.vertexAttribPointer(aLoc, 2, gl.FLOAT, false, 0, 0);
      quadData = new Float32Array(8);
    } else {
      disposeGL();
      setFallback(true);
    }

    let w = 0,
      h = 0,
      dpr = 1;
    let lastGlKey = "";
    let lastOvKey = "";

    const gloveP = new Path2D(GLOVE),
      gloveL = new Path2D(GLOVE_LINES),
      cuffP = new Path2D(CUFF),
      cuffL = new Path2D(CUFF_LINES);
    const arrowP = new Path2D(ARROW);

    const SHAPES = {
      glove: {
        shadow: [gloveP, cuffP],
        fill: [cuffP, gloveP],
        stroke: [
          [cuffP, 1.9],
          [cuffL, 1.1],
          [gloveP, 1.9],
          [gloveL, 1.1],
        ],
        grips: GRIPS,
        hot: [HOT_X, HOT_Y],
        mid: [16, 18],
        creep: [17, 20],
      },
      arrow: {
        shadow: [arrowP],
        fill: [arrowP],
        stroke: [[arrowP, 1.5]],
        grips: ARROW_GRIPS,
        hot: [ARROW_HOT_X, ARROW_HOT_Y],
        mid: [7.5, 14],
        creep: [7, 14],
      },
    };

    let pressed = false;
    let press = 1,
      pressV = 0;

    const pill = { x: 0, y: 0, w: 0, h: 0, r: 0, ls: 0, P: 1 };

    const measure = () => {
      const bw = btn.offsetWidth,
        bh = btn.offsetHeight;
      pill.w = bw * press;
      pill.h = bh * press;
      pill.x = PADDING + (bw - pill.w) / 2;
      pill.y = PADDING + (bh - pill.h) / 2;
      pill.r = pill.h / 2;
      pill.ls = Math.max(0, pill.w - pill.h);
      pill.P = 2 * pill.ls + 2 * Math.PI * pill.r || 1;
    };

    const at = (s) => {
      const { x, y, w: W, h: H, r, ls, P } = pill;
      s = ((s % P) + P) % P;
      if (s < ls) return { x: x + r + s, y, nx: 0, ny: -1 };
      s -= ls;
      if (s < Math.PI * r) {
        const a = -Math.PI / 2 + s / r;
        return {
          x: x + W - r + Math.cos(a) * r,
          y: y + r + Math.sin(a) * r,
          nx: Math.cos(a),
          ny: Math.sin(a),
        };
      }
      s -= Math.PI * r;
      if (s < ls) return { x: x + W - r - s, y: y + H, nx: 0, ny: 1 };
      s -= ls;
      const a = Math.PI / 2 + s / r;
      return {
        x: x + r + Math.cos(a) * r,
        y: y + r + Math.sin(a) * r,
        nx: Math.cos(a),
        ny: Math.sin(a),
      };
    };

    const nearest = (qx, qy) => {
      const { x, w: W, r, ls } = pill;
      const cy = pill.y + r;
      const cx = Math.max(x + r, Math.min(x + W - r, qx));
      const dist = Math.hypot(qx - cx, qy - cy) - r;
      let s;
      if (qx > x + W - r)
        s = ls + (Math.atan2(qy - cy, qx - cx) + Math.PI / 2) * r;
      else if (qx < x + r) {
        let a = Math.atan2(qy - cy, qx - cx);
        if (a < -Math.PI / 2) a += Math.PI * 2;
        s = 2 * ls + Math.PI * r + (a - Math.PI / 2) * r;
      } else
        s = qy < cy ? qx - (x + r) : ls + Math.PI * r + (x + W - r - qx);
      return { s, dist };
    };

    const loopDiff = (a, b) => {
      const P = pill.P;
      let d = (b - a) % P;
      if (d > P / 2) d -= P;
      if (d < -P / 2) d += P;
      return d;
    };

    const fit = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      const bw = btn.offsetWidth || 180;
      const bh = btn.offsetHeight || 48;
      w = bw + PADDING * 2;
      h = bh + PADDING * 2;

      hc.width = Math.max(1, Math.round(w * dpr));
      hc.height = Math.max(1, Math.round(h * dpr));
      if (gl) {
        glc.width = Math.max(1, Math.round(w * dpr));
        glc.height = Math.max(1, Math.round(h * dpr));
        gl.viewport(0, 0, glc.width, glc.height);
      }
      lastGlKey = "";
      lastOvKey = "";
      measure();
    };

    const ptr = {
      x: -999,
      y: -999,
      inside: false,
      last: 0,
      down: false,
    };

    const onWindowMove = (e) => {
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      // Coordinate mapped to the padded canvas
      ptr.x = clientX - rect.left + PADDING;
      ptr.y = clientY - rect.top + PADDING;

      // Check distance to button
      const distToBtn = Math.hypot(
        clientX - (rect.left + rect.width / 2),
        clientY - (rect.top + rect.height / 2)
      );

      ptr.inside = distToBtn < PADDING + 120;
      if (ptr.inside) {
        ptr.last = performance.now();
      }
    };

    const onDown = (e) => {
      if (e.target === btn && !reduced) pressed = true;
      ptr.down = true;
    };

    const onUp = () => {
      pressed = false;
      ptr.down = false;
    };

    window.addEventListener("pointermove", onWindowMove, { passive: true });
    btn.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });

    let mode = "idle";
    let violentSnap = false;
    let grow = 0;
    let seekF = 0;
    let list = [];
    let webs = [];
    let fireS = 0;
    let hand = { x: -999, y: -999 };
    let anchor = { x: 0, y: 0 };
    let stretch = 0;
    let lean = 0;
    let sc = 1.0;
    let drawn = false;
    let shape = SHAPES.arrow;
    let grips = NATIVE_GRIPS;
    const coat = new Float32Array(GRIPS.length);
    let splat = [];

    const gripAt = (g) =>
      drawn
        ? {
            x: hand.x + (g[0] - shape.hot[0]) * sc,
            y: hand.y + (g[1] - shape.hot[1]) * sc,
          }
        : { x: hand.x + g[0], y: hand.y + g[1] };

    const spawn = () => {
      list = [];
      const main = Math.max(
        2,
        Math.min(MS, Math.round(num(live.current.strands, 7, 2, MS)))
      );
      const total = main * 2 - 1;
      const root = at(fireS);
      for (let k = 0; k < total; k++) {
        const hair = k % 2 === 1;
        const mi = Math.floor(k / 2);
        const g = hair
          ? [
              (grips[mi % grips.length][0] +
                grips[(mi + 1) % grips.length][0]) /
                2,
              (grips[mi % grips.length][1] +
                grips[(mi + 1) % grips.length][1]) /
                2,
            ]
          : grips[mi % grips.length];
        list.push({
          x: new Float32Array(NP).fill(root.x),
          y: new Float32Array(NP).fill(root.y),
          px: new Float32Array(NP).fill(root.x),
          py: new Float32Array(NP).fill(root.y),
          spread:
            (k / (total - 1)) * 2 - 1 + (Math.random() - 0.5) * 0.15,
          s: fireS,
          slack: 1.02 + Math.random() * (hair ? 0.2 : 0.12),
          width: hair ? 0.5 : 0.8 + Math.random() * 0.45,
          grip: g,
          gi: hair ? -1 : mi % grips.length,
          ex: root.x,
          ey: root.y,
          follow: 9 + Math.random() * 8,
          seg: 0,
          phase: Math.random() * 10,
          hair,
        });
      }
      webs = [];
      for (let k = 0; k < list.length - 1; k++) {
        const count = 2 + Math.floor(Math.random() * 3);
        for (let c = 0; c < count; c++) {
          const i = 3 + Math.floor(Math.random() * (NP - 5));
          const j = Math.max(
            2,
            Math.min(NP - 2, i + Math.round((Math.random() - 0.5) * 3))
          );
          webs.push([k, k + 1, i, j, (Math.random() - 0.5) * 5]);
        }
      }
      splat = Array.from({ length: 9 }, () => [
        (Math.random() - 0.5) * 0.35,
        0.8 + Math.random() * 0.35,
      ]);
      grow = 0;
      mode = "seek";
    };

    const snapWeb = (violent) => {
      if (mode === "idle" || mode === "snap") return;
      mode = "snap";
      violentSnap = violent;
    };

    const capS = (a) => {
      const { r, ls } = pill;
      if (Math.cos(a) >= 0) return ls + (a + Math.PI / 2) * r;
      const b = a < Math.PI / 2 ? a + Math.PI * 2 : a;
      return 2 * ls + Math.PI * r + (b - Math.PI / 2) * r;
    };

    const cobwebsList = (size) => {
      const k = Math.min(size, pill.h * 0.95);
      return [
        { s: capS(-Math.PI * 0.75), size: k, drape: false },
        { s: capS(Math.PI * 0.22), size: k * 0.85, drape: false },
        { s: capS(Math.PI * 0.8), size: k * 0.5, drape: false },
      ];
    };

    const hashVal = (k, salt) => {
      const v = Math.sin((k + salt * 17.3) * 12.9898) * 43758.5453;
      return v - Math.floor(v);
    };

    const pillPath = () => {
      const { x, y, w: W, h: H, r } = pill;
      hx.beginPath();
      hx.moveTo(x + r, y);
      hx.lineTo(x + W - r, y);
      hx.arc(x + W - r, y + r, r, -Math.PI / 2, Math.PI / 2);
      hx.lineTo(x + r, y + H);
      hx.arc(x + r, y + r, r, Math.PI / 2, (Math.PI * 3) / 2);
      hx.closePath();
    };

    const drawCobwebs = (list, thread, web, tingle) => {
      hx.save();
      pillPath();
      hx.clip();
      hx.lineCap = "round";
      hx.lineJoin = "round";
      if (thread) {
        const n = Math.max(20, Math.round(pill.P / 5));
        for (const [phase, alpha, width] of [
          [0, 0.85, 0.9],
          [Math.PI, 0.5, 0.6],
        ]) {
          hx.strokeStyle = cssRgb(web, alpha);
          hx.lineWidth = width;
          hx.beginPath();
          for (let k = 0; k <= n; k++) {
            const sk = (k / n) * pill.P;
            const q = at(sk);
            const inset =
              2.6 +
              0.7 * Math.sin(sk * 0.21 + phase) +
              0.35 * Math.sin(sk * 0.053 + phase * 0.5);
            const x = q.x - q.nx * inset,
              y = q.y - q.ny * inset;
            if (k === 0) hx.moveTo(x, y);
            else hx.lineTo(x, y);
          }
          hx.closePath();
          hx.stroke();
        }
      }
      hx.lineWidth = 0.75;
      list.forEach((c, salt) => drawCobweb(c, salt, web, tingle));
      hx.restore();
    };

    const drawCobweb = (c, salt, web, tingle) => {
      const q = at(c.s);
      const cx = pill.x + pill.w / 2,
        cy = pill.y + pill.h / 2;
      const facing = Math.max(
        0,
        Math.cos(
          Math.atan2(q.y - cy, q.x - cx) - Math.atan2(anchor.y - cy, anchor.x - cx)
        )
      );
      hx.strokeStyle = cssRgb(
        web,
        Math.min(1, 0.72 + 0.28 * tingle * facing * facing)
      );
      hx.beginPath();
      const na = Math.atan2(-q.ny, -q.nx);
      const hubX = q.x - q.nx * 0.5,
        hubY = q.y - q.ny * 0.5;
      const m = 6;
      const spokes = [];
      for (let k = 0; k < m; k++) {
        const a =
          na +
          ((k / (m - 1)) * 2 - 1) * 1.1 +
          (hashVal(k, salt) - 0.5) * 0.2;
        const L = c.size * (0.7 + 0.45 * hashVal(k, salt + 3));
        spokes.push([Math.cos(a) * L, Math.sin(a) * L]);
        hx.moveTo(hubX, hubY);
        hx.lineTo(hubX + Math.cos(a) * L, hubY + Math.sin(a) * L);
      }
      const rings = [0.35, 0.65, 0.9];
      rings.forEach((f, ri) => {
        for (let k = 0; k < m - 1; k++) {
          const ax = hubX + spokes[k][0] * f,
            ay = hubY + spokes[k][1] * f;
          const bx = hubX + spokes[k + 1][0] * f,
            by = hubY + spokes[k + 1][1] * f;
          hx.moveTo(ax, ay);
          hx.quadraticCurveTo(
            hubX + ((ax + bx) / 2 - hubX) * 0.8,
            hubY + ((ay + by) / 2 - hubY) * 0.8,
            bx,
            by
          );
        }
      });
      hx.stroke();
    };

    let raf = 0;
    let prev = -1;
    let t0 = -1;

    const draw = (now) => {
      const dt = prev < 0 ? 0 : Math.min(0.033, (now - prev) / 1000);
      prev = now;
      if (t0 < 0) t0 = now;
      if (!w || !h) return;

      const L = live.current;
      const A = L.adv;
      drawn = false; // native cursor
      grips = NATIVE_GRIPS;

      const suit = toRgb(L.suitColor, SUIT_FALLBACK);
      const borderOn = L.cobwebs !== false;
      const cwSize = num(A.cobwebSize, 30, 10, 80);
      const cw = borderOn ? cobwebsList(cwSize) : [];
      const threadOn = borderOn && A.threadBorder !== false;
      const web = toRgb(L.webColor, WEB_FALLBACK);
      const shine = toRgb(A.shine, SHINE_FALLBACK);
      const thinK = num(A.stretchThin, 50, 0, 90) / 100;
      const widthK = num(A.strandWidth, 100, 20, 300) / 100;

      const pressTo = pressed ? num(A.pressScale, 96, 50, 100) / 100 : 1;
      for (let i = 0; i < 4; i++) {
        const q = dt / 4;
        pressV += (420 * (pressTo - press) - 18 * pressV) * q;
        press += pressV * q;
      }
      if (Math.abs(press - 1) < 1e-4 && Math.abs(pressV) < 1e-3) {
        press = 1;
        pressV = 0;
      }
      const transform = press === 1 ? "" : `scale(${press})`;
      if (btn.style.transform !== transform) btn.style.transform = transform;
      measure();

      const time = (now - t0) / 1000;
      hand = { x: ptr.x, y: ptr.y };
      const present = ptr.inside;

      anchor = { x: hand.x, y: hand.y };
      const near = nearest(anchor.x, anchor.y);
      fireS = near.s;
      const D = Math.max(0, near.dist);

      const sn = num(A.sense, 260, 0, 800);
      const rc = num(L.reach, 130, 0, 600);
      const rl = num(A.release, 200, 0, 800);
      const cx = pill.x + pill.w / 2;
      lean +=
        ((present
          ? Math.max(-1, Math.min(1, (hand.x - cx) / (pill.w * 1.5)))
          : 0) -
          lean) *
        Math.min(1, dt * 4);

      if (!reduced) {
        if (mode === "idle" && present && D < sn) spawn();
        else if (mode === "snap" && !violentSnap && present && D < sn)
          mode = "seek";
        else if (mode === "seek" && (!present || D > sn + 25)) snapWeb(false);
        else if (mode === "seek" && D < rc) {
          mode = "grow";
          grow = 0;
        } else if ((mode === "grow" || mode === "hold") && (!present || D > rl))
          snapWeb(true);
      }

      const holding = mode === "hold" || mode === "grow";
      const seeking = mode === "seek";
      const fT = seeking
        ? Math.max(0, Math.min(1, (sn - D) / Math.max(1, sn - rc)))
        : holding
        ? 1
        : 0;
      seekF += (fT - seekF) * Math.min(1, dt * 5);
      stretch = holding ? Math.min(1, D / Math.max(1, rl)) : 0;
      if (mode === "grow") {
        grow = Math.min(1, grow + dt / (num(A.lungeMs, 140, 50, 1000) / 1000));
        if (grow >= 1) mode = "hold";
      }

      const gravity = num(A.gravity, 65, 0, 2000);
      const swayAmp = num(A.sway, 5, 0, 100);
      const taut = (st) => 1 + (st.slack - 1) * 0.25;
      const spreadPx =
        Math.max(14, Math.min(pill.w * 0.3, D * 0.4 + 14)) *
        (seeking ? 0.65 : 1);
      let aliveCount = 0;

      for (const st of list) {
        const target = fireS + st.spread * spreadPx;
        st.s +=
          loopDiff(st.s, target) *
          Math.min(1, dt * (mode === "snap" ? 1.5 : 6));
        const root = at(st.s);
        const out = -2.6;
        const rx = root.x + root.nx * out,
          ry = root.y + root.ny * out;
        let pinTip = false;
        const gp = gripAt(st.grip);
        if (seeking) {
          st.ex = rx;
          st.ey = ry;
          pinTip = true;
          st.seg = 0.01;
        } else if (mode === "grow") {
          const e = 1 - Math.pow(1 - grow, 3);
          st.ex = rx + (gp.x - rx) * e;
          st.ey = ry + (gp.y - ry) * e;
          pinTip = true;
          st.seg =
            (Math.hypot(st.ex - rx, st.ey - ry) * taut(st)) / (NP - 1);
        } else if (holding) {
          const k = 1 - Math.exp(-dt * st.follow * 1.4);
          st.ex += (gp.x - st.ex) * k;
          st.ey += (gp.y - st.ey) * k;
          pinTip = true;
          st.seg =
            (Math.hypot(st.ex - rx, st.ey - ry) * taut(st)) / (NP - 1);
        } else {
          st.seg *= Math.exp(-dt * 5.5);
          if (st.seg * (NP - 1) > 1.5) aliveCount++;
        }
        const damp =
          mode === "snap"
            ? num(A.snapDamping, 86, 0, 99) / 100
            : num(A.damping, 92, 0, 99) / 100;
        for (let i = 1; i < NP; i++) {
          const vx = (st.x[i] - st.px[i]) * damp,
            vy = (st.y[i] - st.py[i]) * damp;
          st.px[i] = st.x[i];
          st.py[i] = st.y[i];
          const mid = Math.sin((i / (NP - 1)) * Math.PI);
          const wx =
            Math.sin(time * 1.6 + st.phase + i * 0.55) * swayAmp * mid;
          const wy =
            Math.cos(time * 1.3 + st.phase * 1.3 + i * 0.45) * swayAmp * mid;
          st.x[i] += vx + wx * dt * dt;
          st.y[i] += vy + (gravity + wy) * dt * dt;
        }
        st.x[0] = st.px[0] = rx;
        st.y[0] = st.py[0] = ry;
        if (pinTip) {
          st.x[NP - 1] = st.ex;
          st.y[NP - 1] = st.ey;
        }
        const len = Math.max(0.01, st.seg);
        for (let it = 0; it < 12; it++) {
          for (let i = 0; i < NP - 1; i++) {
            const dx = st.x[i + 1] - st.x[i],
              dy = st.y[i + 1] - st.y[i];
            const d = Math.hypot(dx, dy) || 0.0001;
            const diff = (d - len) / d;
            const a = i === 0 ? 0 : 0.5,
              b = pinTip && i + 1 === NP - 1 ? 0 : i === 0 ? 1 : 0.5;
            const m = a + b || 1;
            st.x[i] += dx * diff * (a / m);
            st.y[i] += dy * diff * (a / m);
            st.x[i + 1] -= dx * diff * (b / m);
            st.y[i + 1] -= dy * diff * (b / m);
          }
        }
      }
      if (mode === "snap" && aliveCount === 0) {
        mode = "idle";
        list = [];
        webs = [];
      }

      const thin = 1 - thinK * stretch;

      // Draw pill WebGL shader
      const rim = num(A.rim, 100, 0, 300) / 100,
        glint = num(A.glint, 100, 0, 300) / 100;
      const glKey = [
        w,
        h,
        pill.x,
        pill.y,
        pill.w,
        pill.h,
        lean.toFixed(3),
        suit,
        shine,
        rim,
        glint,
      ].join("|");
      if (gl && prog && U && quadData && glKey !== lastGlKey) {
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniform2f(U.uRes, glc.width, glc.height);
        gl.uniform1f(U.uDpr, dpr);
        gl.uniform4f(U.uPill, pill.x, pill.y, pill.w, pill.h);
        gl.uniform1f(U.uLean, lean);
        gl.uniform3f(U.uBase, suit[0], suit[1], suit[2]);
        gl.uniform3f(U.uShine, shine[0], shine[1], shine[2]);
        gl.uniform1f(U.uRim, rim);
        gl.uniform1f(U.uGlint, glint);
        gl.uniform1f(U.uShadow, 0.2);

        const padBox = 34;
        const x0 = Math.max(0, pill.x - padBox),
          x1 = Math.min(w, pill.x + pill.w + padBox),
          y0 = Math.max(0, pill.y - padBox),
          y1 = Math.min(h, pill.y + pill.h + padBox + 10);
        const X = (v) => (v / w) * 2 - 1,
          Y = (v) => 1 - (v / h) * 2;
        quadData.set([
          X(x0),
          Y(y0),
          X(x1),
          Y(y0),
          X(x0),
          Y(y1),
          X(x1),
          Y(y1),
        ]);
        gl.bufferData(gl.ARRAY_BUFFER, quadData, gl.DYNAMIC_DRAW);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        lastGlKey = glKey;
      }

      // Draw overlay
      const tingle = seeking && A.senseLines !== false ? seekF : 0;
      const ovMoving = list.length > 0 || tingle > 0.02;
      const ovKey = ovMoving
        ? ""
        : [w, h, pill.x, pill.y, pill.w, pill.h, web, borderOn, cwSize, threadOn].join(
            "|"
          );
      if (ovMoving || ovKey !== lastOvKey) {
        hx.setTransform(dpr, 0, 0, dpr, 0, 0);
        hx.clearRect(0, 0, w, h);
        if (cw.length || threadOn) drawCobwebs(cw, threadOn, web, tingle);
      }
      lastOvKey = ovKey;
      hx.lineCap = "round";
      hx.lineJoin = "round";

      // Spider sense lightning squiggles
      if (tingle > 0.02) {
        const cx = pill.x + pill.w / 2,
          cy = pill.y + pill.h / 2;
        const toward = Math.atan2(anchor.y - cy, anchor.x - cx);
        hx.strokeStyle = cssRgb(web, Math.min(1, 0.25 + 0.85 * tingle));
        hx.lineWidth = 1.8;
        const n = 6;
        for (let k = 0; k < n; k++) {
          const a = toward + ((k / (n - 1)) * 2 - 1) * 1.2;
          const ca = Math.cos(a),
            sa = Math.sin(a);
          const off = 8;
          const r0x = pill.w / 2 + off,
            r0y = pill.h / 2 + off;
          const flick = 0.75 + 0.25 * Math.sin(time * 31 + k * 2.3);
          const len = (10 + 20 * tingle) * flick;
          const bx = cx + ca * r0x,
            by = cy + sa * r0y;
          hx.beginPath();
          hx.moveTo(bx, by);
          for (let z = 1; z <= 4; z++) {
            const t = (z / 4) * len,
              side = (z % 2 ? 1 : -1) * 3.2 * (z < 4 ? 1 : 0);
            hx.lineTo(bx + ca * t - sa * side, by + sa * t + ca * side);
          }
          hx.stroke();
        }
      }

      // Web lines
      if (list.length && !seeking) {
        hx.strokeStyle = cssRgb(web, 0.95);
        for (const st of list) {
          if (st.hair && A.hairs === false) continue;
          hx.lineWidth = (st.hair ? 0.7 : 1.5 * st.width) * widthK * thin;
          hx.beginPath();
          hx.moveTo(st.x[0], st.y[0]);
          for (let i = 1; i < NP - 1; i++)
            hx.quadraticCurveTo(
              st.x[i],
              st.y[i],
              (st.x[i] + st.x[i + 1]) / 2,
              (st.y[i] + st.y[i + 1]) / 2
            );
          hx.lineTo(st.x[NP - 1], st.y[NP - 1]);
          hx.stroke();
        }
        if (holding && A.webs !== false) {
          hx.strokeStyle = cssRgb(web, 0.7);
          hx.lineWidth = 0.6 * widthK;
          for (const [a, b, i, j, kink] of webs) {
            const As = list[a],
              Bs = list[b];
            if (!As || !Bs) continue;
            hx.beginPath();
            hx.moveTo(As.x[i], As.y[i]);
            hx.quadraticCurveTo(
              (As.x[i] + Bs.x[j]) / 2 + kink * 0.3,
              (As.y[i] + Bs.y[j]) / 2 + Math.abs(kink) * 0.8,
              Bs.x[j],
              Bs.y[j]
            );
            hx.stroke();
          }
        }
      }
    };

    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      draw(now);
    };

    const ro = new ResizeObserver(fit);
    ro.observe(btn);
    fit();
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onWindowMove);
      btn.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      disposeGL();
    };
  }, []);

  const suit = toRgb(suitColor, SUIT_FALLBACK);
  const btnHeight = typeof size === "number" ? `${size}px` : size;

  return (
    <div
      ref={stageRef}
      className={`spider-button-stage ${className}`}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        verticalAlign: "middle",
        ...style,
      }}
    >
      {/* 2D Canvas for cobwebs, spider sense tingles, and web lines */}
      <canvas
        ref={handRef}
        style={{
          position: "absolute",
          top: -PADDING,
          left: -PADDING,
          width: `calc(100% + ${PADDING * 2}px)`,
          height: `calc(100% + ${PADDING * 2}px)`,
          pointerEvents: "none",
          zIndex: 3,
        }}
        aria-hidden="true"
      />

      {/* WebGL Canvas for lacquer suit pill shader */}
      <canvas
        ref={glRef}
        style={{
          position: "absolute",
          top: -PADDING,
          left: -PADDING,
          width: `calc(100% + ${PADDING * 2}px)`,
          height: `calc(100% + ${PADDING * 2}px)`,
          pointerEvents: "none",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Real focusable, clickable HTML button */}
      <button
        ref={btnRef}
        id={id}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className="spider-pill-button"
        style={{
          position: "relative",
          zIndex: 2,
          height: btnHeight,
          padding: "0 1.6rem",
          borderRadius: 9999,
          border: 0,
          margin: 0,
          color: textColor,
          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          fontSize: "0.925rem",
          fontWeight: 700,
          letterSpacing: "-0.01em",
          lineHeight: 1,
          whiteSpace: "nowrap",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          transformOrigin: "50% 50%",
          WebkitTapHighlightColor: "transparent",
          background: fallback
            ? `linear-gradient(180deg, ${cssRgb(
                mixRgb(suit, [1, 1, 1], 0.15)
              )} 0%, ${cssRgb(suit)} 45%, ${cssRgb(
                mixRgb(suit, [0, 0, 0], 0.6)
              )} 100%)`
            : "transparent",
          boxShadow: fallback
            ? "inset 0 1px 0 rgba(255,255,255,.25), inset 0 -1.5px 0 rgba(255,255,255,.2), 0 8px 24px -6px rgba(152,27,37,.45)"
            : "none",
          textShadow:
            "0 1px 1px rgba(0,0,0,.6), 0 -0.5px 0 rgba(255,255,255,.3)",
          transition: "transform 0.1s ease",
          ...buttonStyle,
        }}
      >
        {children || label}
      </button>
    </div>
  );
}
