// Geometric SVG icons for the five constitutions
// Each shape draws from Chinese five-element symbolism, rendered in a modern minimalist style

const iconDefs: Record<string, { viewBox: string; shape: (color: string) => React.ReactNode }> = {
  gong: {
    viewBox: '0 0 64 64',
    shape: (c) => (
      // Earth — Rounded square: stability, grounded, the four directions
      <rect x="6" y="6" width="52" height="52" rx="10" ry="10"
        fill="none" stroke={c} strokeWidth="3.5"
        strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  shang: {
    viewBox: '0 0 64 64',
    shape: (c) => (
      // Metal — Concentric circles: clarity, precision, like a bell or mirror
      <>
        <circle cx="32" cy="32" r="25" fill="none" stroke={c} strokeWidth="3.2" />
        <circle cx="32" cy="32" r="12" fill="none" stroke={c} strokeWidth="2.4" strokeDasharray="6 4" />
        <circle cx="32" cy="32" r="3" fill={c} />
      </>
    ),
  },
  jue: {
    viewBox: '0 0 64 64',
    shape: (c) => (
      // Wood — Vertical wave lines: growth, flexibility, like bamboo bending
      <>
        <path d="M16 52 Q22 20 32 12 Q42 20 48 52"
          fill="none" stroke={c} strokeWidth="3.2"
          strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 52 Q15 32 22 22" fill="none" stroke={c} strokeWidth="2" opacity="0.5"
          strokeLinecap="round" />
        <path d="M56 52 Q49 32 42 22" fill="none" stroke={c} strokeWidth="2" opacity="0.5"
          strokeLinecap="round" />
        <circle cx="32" cy="10" r="3" fill={c} />
      </>
    ),
  },
  zhi: {
    viewBox: '0 0 64 64',
    shape: (c) => (
      // Fire — Upward triangle with inner flame: rising, warmth, joy
      <>
        <path d="M32 6 L8 56 L56 56 Z"
          fill="none" stroke={c} strokeWidth="3.2"
          strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 18 L18 48 L32 36 L46 48 Z"
          fill={c} opacity="0.25" stroke="none" />
      </>
    ),
  },
  yu: {
    viewBox: '0 0 64 64',
    shape: (c) => (
      // Water — Deep arc waves: fluid, deep, still waters
      <>
        <path d="M4 28 Q16 14 32 28 Q48 42 60 28"
          fill="none" stroke={c} strokeWidth="3.2"
          strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 40 Q16 26 32 40 Q48 54 60 40"
          fill="none" stroke={c} strokeWidth="2.4" opacity="0.5"
          strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 52 Q16 38 32 52 Q48 66 60 52"
          fill="none" stroke={c} strokeWidth="1.6" opacity="0.3"
          strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  balanced: {
    viewBox: '0 0 72 72',
    shape: (c) => (
      // Harmony — Interlocking pentagon star: all five elements in balance
      <polygon points="36,4 45,28 70,28 50,43 58,68 36,54 14,68 22,43 2,28 27,28"
        fill="none" stroke={c} strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
};

const iconColors: Record<string, string> = {
  gong: '#E8A838',     // Earth — warm gold
  shang: '#B8B8B8',    // Metal — silver grey
  jue: '#4CAF50',      // Wood — green
  zhi: '#EF5350',      // Fire — red
  yu: '#3D5AFE',       // Water — indigo blue
  balanced: '#9C27B0', // Harmony — purple
};

export default function ConstitutionIcon({
  id,
  size = 64,
  className = '',
}: {
  id: string;
  size?: number;
  className?: string;
}) {
  const def = iconDefs[id] || iconDefs.gong;
  const color = iconColors[id] || iconColors.gong;

  return (
    <svg
      width={size}
      height={size}
      viewBox={def.viewBox}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {def.shape(color)}
    </svg>
  );
}

export { iconColors };
