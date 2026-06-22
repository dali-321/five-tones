// Five Tones Logo — five colored dots arranged in a pentagon
// Represents the pentatonic scale + five elements + five organ systems

const dots = [
  { id: 'gong', color: '#E8A838', label: 'Earth', cx: 50, cy: 14 },
  { id: 'shang', color: '#B0B0B0', label: 'Metal', cx: 84, cy: 40 },
  { id: 'zhi', color: '#EF5350', label: 'Fire', cx: 71, cy: 80 },
  { id: 'yu', color: '#3D5AFE', label: 'Water', cx: 29, cy: 80 },
  { id: 'jue', color: '#4CAF50', label: 'Wood', cx: 16, cy: 40 },
];

export default function FiveTonesLogo({
  size = 56,
  showRing = true,
}: {
  size?: number;
  showRing?: boolean;
}) {
  // Original viewBox is 100×100, scale to requested size
  const scale = size / 100;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Subtle pentagon ring connecting the dots */}
      {showRing && (
        <polygon
          points="50,14 84,40 71,80 29,80 16,40"
          fill="none"
          stroke="#E0E0E0"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
      )}

      {/* Connecting lines from center hint */}
      {dots.map((d) => (
        <line
          key={`line-${d.id}`}
          x1="50" y1="50" x2={d.cx} y2={d.cy}
          stroke={d.color}
          strokeWidth="0.6"
          opacity="0.25"
        />
      ))}

      {/* Dots with outer glow ring */}
      {dots.map((d) => (
        <g key={d.id}>
          {/* Outer glow */}
          <circle cx={d.cx} cy={d.cy} r="10" fill={d.color} opacity="0.12" />
          {/* Main dot */}
          <circle cx={d.cx} cy={d.cy} r="6" fill={d.color} opacity="0.85" />
          {/* Inner highlight */}
          <circle cx={d.cx} cy={d.cy} r="3" fill="white" opacity="0.5" />
        </g>
      ))}

      {/* Center subtle dot — the "you" at the center of five tones */}
      <circle cx="50" cy="50" r="3.5" fill="#FF6B6B" opacity="0.7" />
    </svg>
  );
}
