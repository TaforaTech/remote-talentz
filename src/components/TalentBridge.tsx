"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import LogoMark from "./LogoMark";

/* The injected world map content lives in a 1008.3 × 650.9 coordinate space.
   FOCUS crops it to a wide panoramic band — full longitude, trimmed of the empty
   Arctic but reaching south to ~y630 so Australia (y≈493–599) and New Zealand
   (y≈566–611) stay in frame, with the route kept off the top edge. */
const FOCUS = { x: 0, y: 185, w: 1008.3, h: 445 };

/* BD = measured Bangladesh centroid — the hub every spoke radiates from. */
const BD = { x: 728.7, y: 395.7 };

const pct = (p: { x: number; y: number }) => ({
  left: `${((p.x - FOCUS.x) / FOCUS.w) * 100}%`,
  top: `${((p.y - FOCUS.y) / FOCUS.h) * 100}%`,
});

/* Client regions Bangladesh talent plugs into. Coordinates are real map-unit
   centroids (measured off world.svg), nudged onto visible land where a raw
   centroid drifts (Canada/US into the Arctic).
   `pos` places the label clear of its neighbours; `delay` staggers the draw-in
   + comet so the network animates as a cascade rather than all at once. */
type LabelPos = "above" | "below" | "left" | "right";
type Dest = {
  id: string;
  label: string;
  x: number;
  y: number;
  pos: LabelPos;
  delay: number;
  bow?: number;
};
/* `bow` overrides the default curvature for spokes that would otherwise tangle.
   The western trio all arc NORTH with nested bows so they fan cleanly: Türkiye
   bends gently (-0.12) over Turkmenistan, Germany sits between (-0.18), England
   arcs furthest north (-0.26) over Kazakhstan. New Zealand likewise uses a
   negative bow so its spoke arcs north over the Philippines and Papua New Guinea
   rather than drooping under Australia into empty ocean. */
const DESTS: Dest[] = [
  { id: "US", label: "United States", x: 205, y: 348, pos: "above", delay: 0, bow: 0.24 },
  { id: "CA", label: "Canada", x: 185, y: 254, pos: "above", delay: 0.95 },
  { id: "GB", label: "England", x: 462, y: 278, pos: "left", delay: 1.55, bow: -0.26 },
  { id: "DE", label: "Germany", x: 506, y: 296, pos: "left", delay: 1.35, bow: -0.18 },
  { id: "TR", label: "Türkiye", x: 575, y: 345, pos: "below", delay: 1.15, bow: -0.12 },
  { id: "SG", label: "Singapore", x: 770, y: 463, pos: "below", delay: 0.75, bow: 0.25 },
  { id: "AU", label: "Australia", x: 849, y: 546, pos: "below", delay: 0.35, bow: -0.2 },
  { id: "NZ", label: "New Zealand", x: 959, y: 588, pos: "left", delay: 0.55, bow: -0.36 },
];

/* Every spoke gets the SAME proportional curve: a quadratic whose control point
   sits on the south side of the chord, offset by bow x chord-length. Uniform
   curvature makes the spokes nest and fan instead of tangling — long western
   routes droop over Africa, eastern routes over the Indian Ocean, none bow north
   across Asia. Paths start at the hub so draw-in + comet flow outward. */
const BOW = 0.22;
const arcOf = (d: Dest) => {
  const vx = d.x - BD.x;
  const vy = d.y - BD.y;
  // chord rotated -90deg, flipped if needed so it always points south (down)
  let px = vy;
  let py = -vx;
  if (py < 0) {
    px = -px;
    py = -py;
  }
  const b = d.bow ?? BOW;
  const cx = (BD.x + d.x) / 2 + b * px;
  const cy = (BD.y + d.y) / 2 + b * py;
  return `M${BD.x},${BD.y} Q${cx.toFixed(1)},${cy.toFixed(1)} ${d.x},${d.y}`;
};
const LABEL_TF: Record<LabelPos, string> = {
  above: "translate(-50%,-165%)",
  below: "translate(-50%,70%)",
  left: "translate(calc(-100% - 9px),-50%)",
  right: "translate(9px,-50%)",
};

/* Bangladesh silhouette (potrace trace, mapsicon) used as the endpoint node.
   The raw path lives in a 0–10240 unit space mapped into a 1024×1024 box by
   `translate(0 1024) scale(0.1 -0.1)`; the country fills that box centred on
   ~(512,512). BD_NODE_BOX is how many map units that 1024 box should render as. */
const BD_NODE_BOX = 17;
const bdNodeTransform = (p: { x: number; y: number }) => {
  const s = BD_NODE_BOX / 1024;
  return `translate(${p.x - s * 512} ${p.y - s * 512}) scale(${s}) translate(0 1024) scale(0.1 -0.1)`;
};

/* Main outline — used for the pulsing ping copy. */
const BD_OUTLINE =
  "M2023 10175 c-27 -41 -40 -70 -36 -83 3 -13 -6 -37 -26 -66 -39 -56 -44 -119 -9 -114 14 2 25 14 32 34 l11 32 91 -36 92 -36 17 -56 c9 -30 19 -63 21 -72 5 -15 -2 -18 -40 -18 -47 0 -70 -13 -179 -102 -39 -30 -39 -31 -32 -84 l6 -53 -61 -31 c-46 -23 -69 -30 -91 -25 -27 6 -36 1 -92 -61 -95 -103 -94 -101 -64 -132 14 -15 29 -39 32 -54 7 -26 5 -28 -22 -28 -19 0 -38 -9 -53 -25 -20 -21 -23 -34 -21 -75 2 -46 0 -51 -25 -60 -26 -10 -27 -12 -21 -73 7 -71 41 -172 70 -204 l20 -22 36 28 c20 15 55 33 79 38 41 11 44 10 63 -16 24 -32 142 -133 212 -180 l47 -32 0 -78 0 -79 35 -6 c28 -6 38 -14 50 -41 7 -19 21 -35 29 -35 8 0 27 -16 42 -35 23 -31 32 -35 73 -35 30 0 55 -7 71 -20 30 -23 92 -26 110 -5 7 9 29 15 51 15 28 0 39 4 39 15 0 25 33 17 74 -16 35 -30 37 -35 33 -73 -3 -23 -8 -52 -12 -66 -4 -18 3 -40 27 -80 29 -49 37 -55 70 -58 20 -2 42 -10 48 -18 7 -8 26 -14 42 -14 40 0 88 -27 88 -49 0 -11 -21 -36 -46 -57 -42 -36 -45 -41 -35 -66 8 -20 7 -29 -4 -38 -9 -8 -13 -21 -9 -36 9 -36 -26 -31 -89 11 l-52 36 -26 -31 c-34 -40 -94 -43 -128 -6 -19 20 -36 25 -101 31 -72 6 -80 5 -119 -19 -49 -31 -50 -31 -110 -5 -42 17 -54 19 -90 9 l-41 -11 0 -55 c0 -41 -14 -96 -56 -217 -84 -239 -86 -245 -127 -252 -31 -6 -45 0 -124 52 l-88 59 -54 -8 c-30 -5 -57 -10 -59 -13 -2 -2 9 -27 26 -56 l30 -52 -21 -33 c-12 -18 -39 -41 -59 -50 -21 -9 -38 -18 -38 -18 0 -1 4 -16 9 -34 l10 -32 -40 6 -39 7 0 -48 c0 -32 -6 -55 -20 -72 -11 -14 -20 -29 -20 -34 0 -5 25 -45 55 -89 42 -62 55 -89 55 -118 0 -89 9 -109 65 -146 34 -22 84 -43 137 -56 66 -17 102 -34 178 -84 52 -35 124 -89 160 -120 65 -55 65 -56 131 -56 45 0 81 -7 114 -21 l47 -21 24 23 24 23 36 -35 c54 -51 72 -95 62 -145 -7 -33 -15 -45 -38 -54 -29 -12 -30 -14 -30 -86 0 -63 3 -75 20 -84 14 -8 20 -21 20 -45 0 -33 2 -35 32 -35 31 0 31 0 12 -21 -10 -12 -19 -33 -20 -48 -3 -132 -3 -131 -29 -131 -16 0 -34 -13 -56 -40 -26 -32 -37 -38 -56 -34 -13 4 -37 1 -53 -6 -25 -11 -33 -23 -51 -81 -11 -37 -18 -77 -14 -88 3 -11 1 -67 -5 -124 -9 -93 -9 -109 7 -141 13 -28 26 -39 56 -48 30 -9 47 -23 68 -56 15 -24 48 -56 72 -72 29 -18 47 -37 49 -52 2 -18 10 -24 35 -26 l31 -3 -14 -34 c-8 -19 -14 -59 -14 -89 0 -49 -3 -57 -29 -75 -22 -16 -30 -31 -34 -68 -7 -59 10 -121 36 -135 11 -6 70 -12 131 -14 61 -2 127 -8 146 -14 19 -5 52 -10 72 -10 61 0 49 -27 -61 -140 -105 -110 -121 -141 -121 -245 0 -38 4 -46 34 -64 28 -18 34 -29 40 -69 8 -59 39 -112 66 -112 26 0 37 -27 22 -51 -7 -10 -12 -33 -12 -49 0 -17 -7 -44 -15 -59 -8 -16 -12 -31 -9 -33 2 -3 9 -67 14 -142 9 -116 8 -142 -5 -173 -19 -45 -15 -58 22 -66 17 -4 37 -20 51 -41 23 -33 23 -38 16 -193 l-7 -160 57 -94 c44 -74 56 -104 56 -136 0 -34 4 -42 22 -47 22 -5 22 -7 -14 -43 -45 -47 -54 -90 -34 -158 9 -27 16 -76 16 -108 0 -56 -1 -58 -31 -69 -28 -10 -30 -13 -23 -42 9 -36 10 -91 4 -161 l-5 -50 55 -32 c32 -20 61 -46 69 -63 17 -34 61 -43 61 -12 0 44 -13 61 -53 75 -38 12 -42 17 -63 80 -19 55 -21 71 -11 97 6 16 14 30 18 30 6 0 31 -74 45 -132 10 -42 82 -53 121 -16 l23 21 0 -41 c0 -23 8 -57 17 -76 13 -29 14 -40 5 -61 -7 -14 -12 -50 -12 -80 l0 -55 65 0 c62 0 65 1 81 32 15 30 15 32 -4 47 -20 15 -20 18 -6 71 8 30 13 78 11 107 -3 43 -1 52 15 56 10 3 18 14 18 27 0 11 13 38 29 58 23 28 31 50 33 87 l3 50 21 -36 c20 -33 21 -46 16 -178 -6 -165 2 -191 52 -191 26 0 36 8 59 44 30 48 36 109 12 136 -12 13 -12 23 -3 54 10 30 21 43 54 59 42 20 42 20 46 81 2 42 11 74 28 100 l24 39 18 -53 c14 -42 17 -70 12 -135 -7 -81 -7 -83 -40 -99 -46 -22 -53 -55 -20 -99 14 -19 26 -41 26 -49 0 -34 22 -76 43 -82 26 -7 57 19 54 46 -2 18 5 20 66 23 83 3 107 20 89 60 -6 14 -23 31 -38 37 -35 16 -74 96 -74 153 0 36 3 45 18 45 37 0 45 -15 27 -50 -17 -32 -16 -33 14 -64 39 -40 100 -65 112 -45 6 11 11 11 21 1 6 -6 31 -12 55 -12 37 0 44 4 58 30 8 16 35 41 60 56 37 21 45 31 45 54 0 16 -11 42 -25 58 -23 27 -24 35 -18 97 l6 68 -34 28 -34 28 43 1 c51 0 51 -7 16 181 -30 162 -25 229 20 296 17 24 26 51 26 76 0 34 2 37 19 27 17 -8 25 -3 58 38 21 27 55 63 75 81 33 29 38 31 38 13 0 -11 -20 -38 -45 -61 -29 -26 -54 -63 -70 -101 -14 -33 -45 -92 -69 -132 l-44 -72 20 -41 c34 -65 58 -173 58 -262 0 -102 29 -188 67 -197 36 -10 43 0 43 62 1 47 6 64 30 96 21 27 30 51 30 76 0 49 42 90 91 89 l34 0 -42 -21 c-43 -22 -53 -39 -53 -99 0 -26 -8 -43 -29 -63 -18 -17 -31 -41 -33 -62 -4 -33 -2 -35 36 -45 38 -10 42 -9 62 16 12 15 39 58 60 96 21 37 48 72 59 77 12 5 51 33 88 60 l67 51 0 -48 0 -49 -44 -6 c-31 -5 -49 -14 -60 -31 -8 -13 -33 -34 -56 -46 -49 -28 -86 -81 -95 -137 -6 -36 -12 -45 -41 -57 -32 -13 -34 -17 -34 -62 0 -131 27 -159 92 -96 21 21 38 45 38 54 0 10 5 21 10 24 25 15 0 -71 -26 -90 -28 -20 -13 -58 33 -83 35 -19 50 -22 94 -16 42 6 62 16 110 55 63 53 73 75 116 259 11 47 27 86 43 105 14 17 36 59 48 93 13 34 28 64 34 68 8 5 9 1 4 -11 -3 -10 -4 -33 0 -51 6 -32 8 -34 50 -34 42 0 45 2 73 51 16 29 32 67 36 87 5 29 13 37 54 54 37 16 55 32 83 77 34 51 38 65 46 160 7 80 6 113 -4 149 -8 25 -14 84 -14 131 l0 86 -58 45 c-53 39 -61 51 -83 114 -20 58 -21 70 -9 74 8 3 28 18 44 34 28 29 29 30 22 113 l-7 84 38 -15 c77 -32 186 5 195 66 4 27 -1 33 -41 59 -36 23 -63 31 -123 36 -83 8 -115 27 -120 75 -3 24 0 25 69 33 67 8 74 7 118 -18 25 -15 48 -25 51 -23 2 3 -3 42 -11 87 -9 46 -15 87 -13 92 2 4 20 -6 41 -24 32 -27 41 -43 53 -97 9 -36 28 -85 44 -110 18 -29 35 -76 46 -133 15 -78 22 -94 65 -148 27 -33 49 -64 49 -69 0 -5 14 -10 32 -12 27 -3 33 -9 45 -44 9 -28 26 -50 51 -68 21 -14 46 -40 56 -57 14 -24 23 -29 40 -24 11 3 38 9 59 12 48 7 57 35 28 91 -21 42 -28 82 -13 82 19 0 50 -49 62 -97 13 -49 15 -52 58 -63 28 -7 76 -8 130 -4 72 6 89 11 113 33 16 15 31 41 34 62 7 36 6 36 -37 47 -24 6 -54 13 -67 14 -28 3 -42 28 -16 28 14 0 16 6 12 30 -6 29 -5 30 28 30 31 0 35 -3 35 -25 0 -22 4 -25 39 -25 33 0 97 15 110 26 2 2 -3 12 -13 23 -16 18 -16 18 27 14 l44 -5 10 38 c6 29 15 40 33 44 16 4 29 17 35 35 5 16 24 42 41 57 17 15 35 43 39 60 6 31 7 32 15 11 7 -16 3 -40 -14 -85 l-24 -63 43 -60 c24 -33 66 -78 94 -100 37 -29 88 -97 196 -259 l146 -218 15 -97 c16 -109 36 -171 64 -196 18 -17 19 -16 26 9 3 15 8 26 9 24 2 -2 9 -59 16 -127 10 -102 14 -121 24 -107 15 19 16 13 35 -144 10 -78 21 -113 61 -201 48 -103 49 -107 39 -158 -5 -30 -10 -86 -10 -125 0 -67 -10 -96 -32 -96 -4 0 -8 15 -8 33 l0 32 -20 -25 c-11 -14 -27 -47 -36 -73 -15 -46 -15 -51 6 -106 18 -50 21 -70 15 -137 l-7 -79 36 -17 c35 -17 36 -17 36 3 0 16 4 19 23 14 12 -4 29 -9 38 -11 13 -4 21 11 38 65 26 86 26 122 1 197 -20 58 -20 84 0 84 6 0 8 -10 4 -23 -4 -20 0 -26 24 -36 25 -11 35 -10 62 4 l33 17 -6 -40 c-4 -21 -19 -61 -34 -88 -24 -41 -28 -60 -27 -117 1 -50 -2 -67 -12 -67 -8 0 -21 -17 -30 -38 -32 -77 -32 -79 56 -191 l81 -105 -6 -65 c-3 -36 -8 -91 -11 -121 -5 -55 -5 -56 48 -121 29 -35 61 -83 71 -105 15 -32 30 -46 72 -67 48 -23 55 -31 65 -69 14 -54 102 -248 140 -308 16 -25 45 -61 64 -79 l36 -35 0 38 c0 24 -12 60 -34 99 -49 90 -83 191 -90 277 -8 85 -45 207 -88 294 -19 38 -28 68 -25 85 3 14 10 52 16 83 10 48 9 65 -4 103 -23 69 -20 79 29 103 37 17 47 29 57 62 11 37 15 40 50 40 33 0 41 5 74 51 l36 50 47 -35 c44 -32 47 -38 52 -88 l5 -53 94 -3 c52 -1 101 -8 108 -14 7 -6 13 -32 13 -62 1 -43 6 -57 34 -90 l34 -40 51 43 c28 24 51 46 51 50 0 4 -7 30 -15 57 -8 27 -27 114 -41 194 -14 80 -34 187 -45 239 -23 112 -25 261 -5 381 8 47 17 122 21 167 6 79 5 87 -44 238 -28 86 -51 158 -51 161 0 2 16 4 34 4 34 0 35 1 26 28 -4 15 -11 70 -14 122 -2 53 -16 137 -30 191 -14 53 -28 134 -32 180 -3 50 -20 131 -40 198 -22 72 -34 135 -34 172 0 96 -18 155 -57 185 -44 33 -55 64 -54 140 l2 61 -61 56 -60 56 0 106 c0 69 -5 115 -13 133 -24 46 -40 149 -33 206 3 29 18 74 32 100 25 45 26 48 10 86 -9 22 -16 57 -16 76 0 24 -12 56 -34 93 -38 62 -66 165 -66 242 0 36 -7 60 -26 88 -22 34 -25 47 -23 117 2 55 -2 88 -13 108 l-15 28 -12 -43 c-8 -26 -25 -54 -42 -67 l-29 -24 0 24 c0 28 -64 98 -90 98 -11 0 -46 -31 -81 -70 -56 -63 -67 -70 -100 -70 -34 0 -40 5 -88 75 -29 41 -56 75 -61 75 -6 0 -20 -21 -34 -48 l-24 -47 34 -81 c28 -68 33 -94 35 -170 1 -79 -2 -96 -25 -142 -20 -39 -32 -52 -49 -52 -41 -1 -102 -37 -158 -96 -57 -59 -57 -60 -63 -134 -7 -71 -5 -81 33 -183 23 -60 41 -125 41 -147 0 -36 -3 -40 -25 -40 -22 0 -25 -4 -25 -35 0 -26 -4 -33 -14 -29 -10 4 -23 -10 -40 -44 -26 -52 -26 -52 -120 -68 -26 -4 -50 -18 -67 -37 l-27 -29 -15 29 c-9 16 -27 34 -40 40 -16 7 -30 26 -37 50 -7 21 -21 50 -31 64 -10 15 -23 63 -30 115 -11 74 -18 96 -45 129 -17 22 -43 63 -58 91 l-28 52 -40 -16 c-31 -12 -45 -26 -58 -55 l-17 -38 38 -97 c20 -53 41 -109 44 -124 7 -26 5 -28 -23 -28 -37 0 -70 36 -116 129 -29 58 -34 83 -44 196 -10 101 -9 137 0 162 11 29 10 35 -9 55 -12 13 -32 52 -45 88 -13 36 -42 92 -65 125 -61 91 -103 180 -103 220 0 23 4 34 11 30 6 -4 21 3 34 15 33 31 22 59 -26 66 -36 6 -39 9 -39 40 0 33 1 34 38 34 78 0 112 73 112 243 0 82 4 115 20 151 l19 46 58 0 c32 0 69 3 82 7 23 6 24 8 18 89 l-6 84 26 6 c15 4 46 2 70 -4 91 -25 303 -4 325 31 4 7 8 44 8 83 0 56 4 74 19 88 18 16 19 15 36 -26 23 -60 42 -78 82 -78 32 0 33 2 33 38 0 58 21 79 80 84 l50 3 0 -38 c0 -34 4 -40 35 -53 47 -19 49 -19 70 24 24 49 35 146 22 198 -6 22 -7 49 -4 58 6 15 9 15 35 2 26 -13 31 -13 51 0 20 15 21 18 7 39 -20 31 -11 34 95 27 134 -8 155 14 169 172 7 83 10 92 38 117 38 34 57 71 67 128 4 24 22 89 41 144 38 114 45 213 19 287 -8 23 -15 46 -15 50 0 14 52 30 96 30 41 0 46 -3 61 -35 l17 -35 82 0 c73 0 86 3 110 24 l28 23 -22 51 c-12 28 -22 58 -22 66 0 9 -15 33 -34 54 -19 21 -38 50 -41 65 -6 22 -17 30 -60 42 -37 11 -55 23 -63 40 -9 20 -19 25 -46 25 -19 0 -64 9 -100 20 -56 18 -68 25 -80 53 -22 53 -54 74 -133 87 -56 9 -85 9 -130 -1 -32 -6 -143 -13 -248 -14 -203 -3 -253 -9 -262 -32 -9 -22 -58 -43 -102 -43 -34 0 -40 3 -50 30 -12 36 -36 39 -68 8 -32 -30 -132 -37 -187 -14 -21 9 -56 16 -77 16 -29 0 -57 12 -109 45 -74 48 -104 54 -136 30 -14 -11 -51 -14 -155 -15 -134 0 -136 0 -184 -31 -78 -49 -261 -64 -352 -28 -15 6 -60 10 -99 10 -49 -1 -82 3 -107 15 -33 16 -37 16 -61 1 -18 -12 -47 -17 -101 -17 -46 0 -87 -6 -103 -14 -75 -39 -155 -27 -233 35 -21 17 -54 31 -80 34 -113 16 -307 59 -334 75 -16 10 -48 23 -70 30 -22 7 -64 26 -94 43 -61 34 -112 37 -164 10 -30 -15 -32 -15 -53 10 -34 40 -38 91 -15 204 12 56 21 112 21 125 0 12 9 59 20 103 12 47 20 114 20 162 0 81 -1 84 -35 122 -28 30 -35 47 -35 78 0 21 -7 48 -15 59 -29 38 -9 125 44 192 15 21 36 52 46 71 16 32 16 33 0 27 -48 -18 -65 -18 -65 0 0 9 7 25 16 35 23 25 11 53 -20 45 -20 -5 -29 2 -60 47 -27 40 -36 62 -35 88 2 21 -8 54 -24 87 -23 44 -32 52 -55 52 -35 0 -52 16 -52 50 -1 35 -33 70 -64 70 -24 0 -26 -3 -26 -44 0 -40 -3 -45 -30 -55 -16 -5 -30 -15 -30 -21 0 -23 22 -51 48 -61 l27 -11 -44 -17 c-33 -14 -40 -19 -27 -24 10 -4 26 -7 36 -7 14 0 30 -18 30 -35 0 -1 -13 -8 -29 -15 -31 -13 -49 -45 -53 -99 -4 -44 -36 -58 -70 -31 -13 10 -46 21 -73 25 -86 11 -95 15 -115 47 l-19 31 -21 -36 c-32 -54 -66 -51 -104 8 -15 25 -37 50 -47 56 -11 5 -30 27 -43 47 -20 31 -36 41 -104 66 -76 26 -82 30 -86 60 -23 147 -27 161 -51 186 -16 16 -25 38 -25 57 0 27 4 32 30 38 17 4 30 10 30 13 0 4 -18 18 -40 32 -25 15 -44 37 -50 56 -8 24 -21 35 -56 49 -25 9 -50 26 -57 36 -7 12 -23 19 -42 19 -25 0 -35 -8 -55 -41 -28 -45 -28 -64 3 -96 14 -16 32 -23 58 -23 36 0 38 -2 44 -40 4 -26 13 -41 26 -45 10 -4 19 -15 19 -25 0 -11 11 -27 25 -36 14 -9 23 -20 20 -24 -9 -14 -78 -19 -126 -9 -39 8 -52 17 -68 45 -21 36 -46 43 -82 24 -12 -7 -19 -21 -19 -40 0 -17 -2 -30 -4 -30 -1 0 -17 5 -33 11 -22 7 -32 18 -37 39 -3 16 -17 37 -31 46 -25 16 -29 16 -98 -8 -40 -15 -80 -29 -89 -33 -14 -6 -18 -2 -18 16 1 17 17 36 55 64 30 22 55 44 55 48 0 4 -16 17 -35 28 -43 25 -58 50 -50 82 6 21 1 26 -39 41 -25 10 -56 30 -69 45 -13 16 -41 34 -63 41 -49 16 -119 68 -133 98 -7 15 -19 22 -40 22 -37 0 -51 22 -65 107 l-11 62 -42 -64z";

/* Interior islands / delta detail — drawn together with the outline as the solid glyph. */
const BD_DETAILS =
  "M5472 3490 c-18 -4 -34 -9 -36 -11 -2 -2 -19 -52 -39 -111 l-35 -106 23 -34 c25 -36 80 -78 132 -98 30 -11 33 -18 51 -98 39 -170 44 -210 40 -324 l-4 -113 -43 -61 c-40 -57 -43 -67 -51 -150 -4 -53 -16 -108 -29 -137 -11 -27 -21 -51 -21 -54 0 -11 47 11 74 36 30 27 29 22 -11 -41 l-23 -38 28 -14 c28 -15 30 -14 75 32 27 27 47 57 47 69 0 17 9 25 39 33 21 5 57 27 80 48 40 35 44 43 77 172 35 137 52 241 60 385 l5 80 -65 94 c-43 62 -66 105 -66 123 0 21 -5 28 -19 28 -12 0 -21 9 -25 25 -5 20 -13 25 -36 25 -36 0 -60 39 -60 100 0 30 -9 54 -30 86 -44 64 -64 72 -138 54z M6790 3229 c0 -14 -9 -52 -21 -85 -24 -70 -21 -129 10 -173 12 -17 29 -53 37 -80 20 -68 88 -126 134 -116 57 12 83 88 57 163 -23 66 -106 197 -164 261 -48 52 -52 54 -53 30z M6229 2998 c0 -35 -4 -157 -8 -273 -7 -196 -10 -216 -37 -292 -16 -45 -26 -84 -23 -88 16 -15 57 10 82 50 19 30 40 48 70 60 97 38 123 100 88 207 -11 35 -29 95 -41 135 -13 47 -36 92 -65 132 -33 45 -45 70 -45 96 0 19 -4 35 -10 35 -6 0 -10 -28 -11 -62z M6385 2933 c3 -16 9 -43 12 -60 6 -41 14 -41 36 -4 23 40 7 91 -30 91 -23 0 -25 -3 -18 -27z M5433 2411 c-29 -14 -60 -36 -69 -49 -8 -12 -33 -31 -55 -43 -28 -14 -39 -25 -35 -35 3 -9 6 -20 6 -26 0 -6 13 -8 35 -4 43 8 46 -6 9 -45 -33 -34 -26 -59 15 -59 39 0 59 37 72 127 5 35 15 76 23 91 l14 27 15 -35 14 -35 8 47 c4 26 5 51 4 56 -2 6 -28 -2 -56 -17z M5093 2219 c-16 -6 -24 -22 -33 -66 -6 -32 -22 -81 -35 -108 -20 -45 -22 -57 -13 -108 10 -56 11 -58 29 -41 10 9 19 24 19 33 0 9 16 49 35 90 29 59 35 84 35 136 0 35 -3 66 -7 68 -5 3 -18 1 -30 -4z M5188 2218 l-37 -10 21 -43 21 -43 -27 -33 c-30 -36 -33 -85 -4 -102 12 -8 24 -5 52 17 70 53 84 119 40 186 -15 22 -27 40 -28 39 0 -1 -18 -5 -38 -11z";

const BD_MAP_PATH = `${BD_OUTLINE} ${BD_DETAILS}`;

export default function TalentBridge() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  // Inject the world map SVG once, restyle it to our palette.
  useEffect(() => {
    const host = mapRef.current;
    if (!host) return;
    let cancelled = false;
    fetch("/world.svg")
      .then((r) => r.text())
      .then((txt) => {
        if (cancelled || !host) return;
        // Strip the XML prolog so it parses cleanly as inline SVG.
        host.innerHTML = txt.slice(txt.indexOf("<svg"));
        const svg = host.querySelector("svg");
        if (svg) {
          svg.setAttribute("viewBox", `${FOCUS.x} ${FOCUS.y} ${FOCUS.w} ${FOCUS.h}`);
          svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
          svg.removeAttribute("width");
          svg.removeAttribute("height");
        }
        setReady(true);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // Trigger the draw-in animation when the map enters the viewport.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("rt-map-live");
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ready]);

  return (
    <section className="relative overflow-hidden pt-[clamp(1.75rem,1rem+2.6vw,3.25rem)]">
      {/* Atmospheric wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 55% at 50% 0%, rgba(255,48,64,0.07), transparent 70%)",
        }}
      />

      <div className="container-rt relative">
        <Reveal className="text-center">
          <p className="eyebrow justify-center">
            <LogoMark className="size-[0.85em]" /> How it works
          </p>
          <h2 className="mx-auto mt-5 whitespace-nowrap font-display text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl">
            From Bangladesh to global teams
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink-soft">
            Elite, pre-vetted engineers — matched in days, in your timezone.
          </p>
        </Reveal>

      </div>

      {/* Full-bleed map band — breaks out of the content container, edge to edge */}
      <Reveal className="relative mt-10 w-full">
        <div className="relative w-full overflow-hidden border-y border-white/10 bg-[#0a0908]">
              {/* Ambient glows — hot red over Bangladesh, cool wash over the US */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(50% 60% at 74% 47%, rgba(255,48,64,0.22), transparent 62%)," +
                    "radial-gradient(46% 55% at 22% 37%, rgba(120,150,255,0.07), transparent 60%)," +
                    "radial-gradient(120% 110% at 50% -10%, rgba(255,255,255,0.06), transparent 55%)",
                }}
              />
              {/* Ops grid */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)," +
                    "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                  maskImage:
                    "radial-gradient(ellipse 82% 82% at 50% 50%, #000 32%, transparent 86%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 82% 82% at 50% 50%, #000 32%, transparent 86%)",
                }}
              />
              {/* Inner vignette */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl"
                style={{ boxShadow: "inset 0 0 130px 24px rgba(0,0,0,0.55)" }}
              />

              <div
                ref={wrapRef}
                className="relative w-full"
                style={{ aspectRatio: `${FOCUS.w} / ${FOCUS.h}` }}
              >
                {/* Base world map (injected, restyled) */}
                <div ref={mapRef} className="rt-map absolute inset-0" />

                {/* Overlay: hub-and-spoke routes, traveling pulses, region nodes */}
                <svg
                  viewBox={`${FOCUS.x} ${FOCUS.y} ${FOCUS.w} ${FOCUS.h}`}
                  preserveAspectRatio="xMidYMid meet"
                  className="absolute inset-0 h-full w-full overflow-visible"
                  fill="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="talentGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#ff6a73" />
                      <stop offset="55%" stopColor="#ff3040" />
                      <stop offset="100%" stopColor="#d60505" />
                    </linearGradient>
                    {/* Reversed copy for spokes whose target lies WEST of the hub:
                        their bounding box runs target→BD left-to-right, so the dark
                        end must sit on the left (target) and light on the right (BD). */}
                    <linearGradient id="talentGradRev" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#d60505" />
                      <stop offset="45%" stopColor="#ff3040" />
                      <stop offset="100%" stopColor="#ff6a73" />
                    </linearGradient>
                    <filter id="talentGlow" x="-80%" y="-80%" width="260%" height="260%">
                      <feGaussianBlur stdDeviation="3.2" result="b" />
                      <feMerge>
                        <feMergeNode in="b" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Spokes — one route per region, drawn outward from Bangladesh.
                      A faint persistent link sits under a thin animated draw-in
                      line; a small comet then flows hub → region. No heavy halo —
                      the thin lines + node glow keep the network legible, not smeared.
                      Draw-in and comet are staggered per dest for a cascade. */}
                  {DESTS.map((d) => {
                    const path = arcOf(d);
                    // West-of-hub targets read target→BD across the bbox, so they
                    // need the reversed gradient to keep dark on the target side.
                    const grad = d.x < BD.x ? "talentGradRev" : "talentGrad";
                    return (
                      <g key={d.id}>
                        <path d={path} stroke="#ff3040" strokeOpacity="0.14" strokeWidth="0.7" />
                        <path
                          id={`arc-${d.id}`}
                          className="talent-arc"
                          d={path}
                          pathLength={1}
                          stroke={`url(#${grad})`}
                          strokeWidth="0.9"
                          strokeLinecap="round"
                          filter="url(#talentGlow)"
                          style={{ animationDelay: `${0.15 + d.delay}s` }}
                        />
                        <circle r="2" fill="#fff" filter="url(#talentGlow)">
                          <animateMotion
                            dur="3s"
                            begin={`-${d.delay}s`}
                            repeatCount="indefinite"
                            rotate="auto"
                            keyTimes="0;1"
                            keyPoints="0;1"
                            calcMode="linear"
                          >
                            <mpath href={`#arc-${d.id}`} />
                          </animateMotion>
                        </circle>
                      </g>
                    );
                  })}

                  {/* Region nodes — pulse ring, glowing dot, dark core */}
                  {DESTS.map((d) => (
                    <g key={`${d.id}-node`}>
                      <circle className="talent-ping" cx={d.x} cy={d.y} r="5.5" fill="#fff" opacity="0.4" />
                      <circle cx={d.x} cy={d.y} r="3.5" fill="#fff" filter="url(#talentGlow)" />
                      <circle cx={d.x} cy={d.y} r="1.5" fill="#0a0908" />
                    </g>
                  ))}

                  {/* Bangladesh node — the country silhouette stands in for the dot.
                      Positioning lives on the wrapping <g>; the ping copy keeps its
                      own CSS scale (transform-box: fill-box) so it pulses in place.
                      Glow uses drop-shadow (px-based) since #talentGlow's blur is in
                      user units and would vanish inside this heavily scaled space. */}
                  <g
                    transform={bdNodeTransform(BD)}
                    style={{
                      filter:
                        "drop-shadow(0 0 6px rgba(255,48,64,0.95)) drop-shadow(0 0 13px rgba(255,48,64,0.6))",
                    }}
                  >
                    <path className="talent-ping" d={BD_OUTLINE} fill="var(--rt-red)" />
                    <path d={BD_MAP_PATH} fill="url(#talentGrad)" />
                  </g>
                </svg>

                {/* HTML labels (stay crisp at any size) */}
                {DESTS.map((d) => (
                  <span
                    key={`${d.id}-lbl`}
                    className="absolute whitespace-nowrap rounded-full border border-white/15 bg-white/10 px-1.5 py-0 font-mono text-[0.4rem] uppercase tracking-[0.1em] text-white/80 backdrop-blur sm:text-[0.55rem]"
                    style={{ ...pct(d), transform: LABEL_TF[d.pos] }}
                  >
                    {d.label}
                  </span>
                ))}
                {/* Bangladesh hub label */}
                <span
                  className="absolute whitespace-nowrap rounded-full bg-red px-2 py-0.5 font-mono text-[0.45rem] uppercase tracking-[0.14em] text-white shadow-[0_0_22px_rgba(255,48,64,0.7)] sm:text-[0.6rem]"
                  style={{ ...pct(BD), transform: "translate(-10%,-200%)" }}
                >
                  Bangladesh
                </span>
              </div>
            </div>
      </Reveal>
    </section>
  );
}
