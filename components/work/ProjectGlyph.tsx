/** Precise technical figure per commission — line-work in currentColor,
 *  so it reads as an engineering diagram on any ground. Four motifs. */
export function ProjectGlyph({ index, className = "" }: { index: number; className?: string }) {
  const motif = index % 4;
  return (
    <svg viewBox="0 0 320 180" className={className} fill="none" stroke="currentColor" aria-hidden preserveAspectRatio="xMidYMid meet">
      {/* frame + axes */}
      <g opacity="0.28" strokeWidth="1">
        <line x1="24" y1="20" x2="24" y2="156" />
        <line x1="24" y1="156" x2="300" y2="156" />
      </g>

      {motif === 0 && (
        // scaling curve with plotted load points
        <g>
          <polyline points="24,150 70,140 110,118 150,96 200,60 260,30 300,24" strokeWidth="1.5" />
          {[
            [70, 140], [110, 118], [150, 96], [200, 60], [260, 30],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.6" fill="currentColor" stroke="none" />
          ))}
          <line x1="200" y1="60" x2="200" y2="156" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
        </g>
      )}

      {motif === 1 && (
        // layered architecture stack
        <g strokeWidth="1.25">
          {[0, 1, 2, 3].map((r) => (
            <rect key={r} x={60} y={36 + r * 28} width={200} height={20} />
          ))}
          <line x1="160" y1="36" x2="160" y2="144" opacity="0.4" strokeDasharray="2 3" />
        </g>
      )}

      {motif === 2 && (
        // network graph
        <g>
          {(() => {
            const nodes = [
              [80, 60], [150, 40], [230, 70], [110, 120], [200, 130], [260, 115],
            ];
            const edges = [[0, 1], [1, 2], [0, 3], [3, 4], [2, 5], [4, 5], [1, 4]];
            return (
              <>
                {edges.map(([a, b], i) => (
                  <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} strokeWidth="1" opacity="0.55" />
                ))}
                {nodes.map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r={i === 1 ? 4 : 3} fill="currentColor" stroke="none" />
                ))}
              </>
            );
          })()}
        </g>
      )}

      {motif === 3 && (
        // concentric orbits with a traced point
        <g strokeWidth="1">
          {[26, 46, 66].map((r) => (
            <circle key={r} cx={170} cy={88} r={r} opacity="0.5" />
          ))}
          <circle cx={170} cy={88} r="2.6" fill="currentColor" stroke="none" />
          <circle cx={170} cy={22} r="3.2" fill="currentColor" stroke="none" />
          <line x1="170" y1="88" x2="170" y2="22" strokeDasharray="2 3" opacity="0.5" />
        </g>
      )}
    </svg>
  );
}
