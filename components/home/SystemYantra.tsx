"use client";

import { motion, useReducedMotion } from "motion/react";

/* ------------------------------------------------------------------
   The System Yantra — a compass-and-straightedge construction that
   fuses a yantra with a system diagram. Draws itself once on load.
   Pure geometry, monochrome chalk line-work, a single vermillion point.
------------------------------------------------------------------- */

const C = 300; // center

// round to 3 decimals so server and client serialize identically (no hydration drift)
const r3 = (n: number) => Math.round(n * 1000) / 1000;

// angle in degrees, 0° at top, clockwise → point on circle of radius r
function pt(deg: number, r: number) {
  const a = ((deg - 90) * Math.PI) / 180;
  return { x: r3(C + r * Math.cos(a)), y: r3(C + r * Math.sin(a)) };
}

const rings = [270, 216, 162, 108, 54];
const axes = [0, 45, 90, 135, 180, 225, 270, 315];

// bezel ticks
const ticks = Array.from({ length: 72 }, (_, i) => i * 5);

// flower-of-life first ring (construction rosette)
const rosette = [0, 60, 120, 180, 240, 300].map((d) => pt(d, 108));

// shatkona (two interlocking triangles)
const triUp = [pt(-90, 170), pt(30, 170), pt(150, 170)];
const triDn = [pt(90, 170), pt(210, 170), pt(330, 170)];
const triPath = (p: { x: number; y: number }[]) =>
  `M ${p[0].x} ${p[0].y} L ${p[1].x} ${p[1].y} L ${p[2].x} ${p[2].y} Z`;

// service nodes on r=216, numbered
const nodes = axes.map((deg, i) => ({ ...pt(deg, 216), n: i + 1 }));

// labelled domain leaders on the diagonals
const domains = [
  { deg: 45, label: "TELECOM" },
  { deg: 135, label: "LOGISTICS" },
  { deg: 225, label: "COMPLIANCE" },
  { deg: 315, label: "FINANCE" },
];

export function SystemYantra({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  // helper to build draw-on transition
  const draw = (delay: number, duration = 1) =>
    reduce ? { duration: 0 } : { duration, delay, ease: [0.33, 1, 0.68, 1] as const };

  const drawProps = (delay: number, duration?: number) => ({
    initial: reduce ? false : { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: draw(delay, duration),
  });

  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      role="img"
      aria-label="System yantra — a geometric construction of Srinishtha's engineering domains"
      fill="none"
    >
      {/* bhupura — the grounding square with gates */}
      <motion.rect
        x={30}
        y={30}
        width={540}
        height={540}
        stroke="var(--color-line-2)"
        strokeWidth={1}
        {...drawProps(0.1, 1.2)}
      />
      {/* gate notches */}
      {[
        [300, 30, 0],
        [570, 300, 90],
        [300, 570, 180],
        [30, 300, 270],
      ].map(([x, y, rot], i) => (
        <motion.path
          key={i}
          d="M -16 0 L -16 -14 L 16 -14 L 16 0"
          transform={`translate(${x} ${y}) rotate(${rot})`}
          stroke="var(--color-line-2)"
          strokeWidth={1}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={draw(0.4 + i * 0.05)}
        />
      ))}

      {/* bezel ticks */}
      <g>
        {ticks.map((deg, i) => {
          const outer = pt(deg, 270);
          const long = deg % 15 === 0;
          const inner = pt(deg, long ? 256 : 263);
          return (
            <motion.line
              key={deg}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
              stroke="var(--color-line-3)"
              strokeWidth={1}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: long ? 0.9 : 0.5 }}
              transition={draw(0.6 + i * 0.004)}
            />
          );
        })}
      </g>

      {/* construction rosette — flower of life first ring, very faint */}
      <g stroke="var(--color-line)" strokeWidth={1}>
        <motion.circle cx={C} cy={C} r={108} {...drawProps(0.5, 1.4)} />
        {rosette.map((p, i) => (
          <motion.circle key={i} cx={p.x} cy={p.y} r={108} {...drawProps(0.6 + i * 0.08, 1.4)} />
        ))}
      </g>

      {/* concentric rings */}
      <g stroke="var(--color-line-2)" strokeWidth={1}>
        {rings.map((r, i) => (
          <motion.circle key={r} cx={C} cy={C} r={r} {...drawProps(0.2 + i * 0.12, 1.1)} />
        ))}
      </g>

      {/* radial axes */}
      <g stroke="var(--color-line-2)" strokeWidth={1}>
        {axes.map((deg, i) => {
          const a = pt(deg, 54);
          const b = pt(deg, 270);
          return (
            <motion.line key={deg} x1={a.x} y1={a.y} x2={b.x} y2={b.y} {...drawProps(0.9 + i * 0.05, 0.8)} />
          );
        })}
      </g>

      {/* shatkona — interlocking triangles (the devotional core) */}
      <g stroke="var(--color-chalk-2)" strokeWidth={1.25}>
        <motion.path d={triPath(triUp)} {...drawProps(1.5, 1.2)} />
        <motion.path d={triPath(triDn)} {...drawProps(1.7, 1.2)} />
      </g>

      {/* service nodes */}
      <g>
        {nodes.map((node, i) => (
          <motion.g
            key={node.n}
            initial={reduce ? false : { opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={draw(2 + i * 0.06)}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          >
            <circle cx={node.x} cy={node.y} r={4.5} fill="var(--color-chalk)" />
            <circle cx={node.x} cy={node.y} r={9} stroke="var(--color-line-3)" strokeWidth={1} fill="none" />
          </motion.g>
        ))}
      </g>

      {/* domain leaders + labels */}
      <g>
        {domains.map((d, i) => {
          const a = pt(d.deg, 270);
          const b = pt(d.deg, 300);
          const right = d.deg < 180;
          return (
            <motion.g
              key={d.label}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={draw(2.4 + i * 0.1)}
            >
              <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="var(--color-vermillion)" strokeWidth={1} />
              <circle cx={a.x} cy={a.y} r={2.5} fill="var(--color-vermillion)" />
              <text
                x={b.x + (right ? 6 : -6)}
                y={b.y}
                fill="var(--color-muted)"
                fontSize={11}
                letterSpacing={1.5}
                textAnchor={right ? "start" : "end"}
                dominantBaseline="middle"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {d.label}
              </text>
            </motion.g>
          );
        })}
      </g>

      {/* center — निष्ठा + the single vermillion point of devotion */}
      <motion.text
        x={C}
        y={C - 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="var(--color-chalk)"
        fontSize={30}
        style={{ fontFamily: "var(--font-deva)" }}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={draw(2.7, 0.8)}
      >
        निष्ठा
      </motion.text>
      <motion.circle
        cx={C}
        cy={C}
        r={4}
        fill="var(--color-vermillion)"
        initial={reduce ? false : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={draw(3)}
        style={{ transformOrigin: `${C}px ${C}px` }}
      />
    </svg>
  );
}
