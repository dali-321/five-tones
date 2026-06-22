// Constitution Halo — five element icons orbiting in pentagon
// Center: Taiji when unassigned (balanced) / Constitution icon when type is known
// Pure CSS positioning for cross-browser reliability

import ConstitutionIcon from './ConstitutionIcon';
import TaijiIcon from './TaijiIcon';

const orbitIcons = [
  { id: 'gong', angle: -90 },
  { id: 'shang', angle: -18 },
  { id: 'zhi', angle: 54 },
  { id: 'yu', angle: 126 },
  { id: 'jue', angle: 198 },
];

export default function ConstitutionHalo({
  constitutionId,
  size = 180,
}: {
  constitutionId: string;
  size?: number;
}) {
  const orbitR = size * 0.38;
  const isTaiji = constitutionId === 'balanced';

  return (
    <div
      className="relative mx-auto"
      style={{ width: size, height: size }}
    >
      {/* Solid orbit ring — thick for clear pentagon structure */}
      <div
        className="absolute rounded-full border-[2.5px] border-solid border-gray-300"
        style={{
          width: orbitR * 2,
          height: orbitR * 2,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.75,
        }}
      />

      {/* Radial lines + orbit icons */}
      {orbitIcons.map(({ id, angle }) => {
        const rad = (angle * Math.PI) / 180;
        const ox = size / 2 + orbitR * Math.cos(rad);
        const oy = size / 2 + orbitR * Math.sin(rad);
        const dotSize = size * 0.12;
        const isActive = !isTaiji && id === constitutionId;

        return (
          <div key={`orbit-${id}`}>
            {/* Radial spoke — thicker, clearer */}
            <div
              className="absolute bg-gray-300 origin-left"
              style={{
                width: orbitR,
                height: '1.5px',
                top: size / 2,
                left: size / 2,
                transform: `rotate(${angle}deg)`,
                opacity: 0.5,
              }}
            />
            {/* Orbit icon */}
            <div
              className={`absolute rounded-full flex items-center justify-center transition-all ${
                isActive ? 'ring-2 ring-red-400 ring-offset-2' : ''
              }`}
              style={{
                width: dotSize,
                height: dotSize,
                top: oy - dotSize / 2,
                left: ox - dotSize / 2,
              }}
            >
              <ConstitutionIcon id={id} size={Math.round(dotSize)} />
            </div>
          </div>
        );
      })}

      {/* Center: Taiji (unassigned) or Constitution icon (known type) */}
      <div
        className="absolute rounded-full flex items-center justify-center"
        style={{
          width: size * 0.3,
          height: size * 0.3,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {isTaiji ? (
          <TaijiIcon size={Math.round(size * 0.3)} />
        ) : (
          <ConstitutionIcon id={constitutionId} size={Math.round(size * 0.3)} />
        )}
      </div>
    </div>
  );
}
