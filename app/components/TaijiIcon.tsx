// Standard Taiji (Yin-Yang) — S-curve with fish eyes
// Classic CSS technique: half-gradient + two overlapping half-circles + two dots

export default function TaijiIcon({ size = 48 }: { size?: number }) {
  const half = size / 2;
  const quarter = size / 4;
  const dotR = size * 0.09;  // fish-eye dot radius

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        border: '2px solid #B0B0B0',
        // Left black, right white
        background: 'linear-gradient(to right, #444 50%, #F5F3EE 50%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top bulge — white half-circle pushes into black left side (forms S-curve top) */}
      <div
        style={{
          position: 'absolute',
          width: half,
          height: half,
          borderRadius: '50%',
          background: '#F5F3EE',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {/* Black dot (fish eye) centered inside this white bulge */}
        <div
          style={{
            position: 'absolute',
            width: dotR * 2,
            height: dotR * 2,
            borderRadius: '50%',
            background: '#444',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* Bottom bulge — black half-circle pushes into white right side (forms S-curve bottom) */}
      <div
        style={{
          position: 'absolute',
          width: half,
          height: half,
          borderRadius: '50%',
          background: '#444',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {/* White dot (fish eye) — 85% size to offset irradiation illusion */}
        <div
          style={{
            position: 'absolute',
            width: dotR * 1.7,
            height: dotR * 1.7,
            borderRadius: '50%',
            background: '#F5F3EE',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </div>
  );
}
