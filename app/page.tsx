'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentShichen, Shichen } from '@/lib/shichen';
import ConstitutionIcon from '@/app/components/ConstitutionIcon';
import ConstitutionHalo from '@/app/components/ConstitutionHalo';

const elements = [
  { tone: 'Gong', name: 'Earth', organ: 'Spleen/Stomach', color: '#F5A623', emoji: '🟤' },
  { tone: 'Shang', name: 'Metal', organ: 'Lungs', color: '#4FC3F7', emoji: '⚪' },
  { tone: 'Jue', name: 'Wood', organ: 'Liver', color: '#66BB6A', emoji: '🟢' },
  { tone: 'Zhi', name: 'Fire', organ: 'Heart', color: '#EF5350', emoji: '🔴' },
  { tone: 'Yu', name: 'Water', organ: 'Kidneys', color: '#5C6BC0', emoji: '🔵' },
];

const toneEmoji: Record<string, string> = {
  gong: '🟤', shang: '⚪', jue: '🟢', zhi: '🔴', yu: '🔵',
};

export default function Home() {
  const router = useRouter();
  const [shichen, setShichen] = useState<Shichen | null>(null);
  const [lastResult, setLastResult] = useState<any>(null);

  useEffect(() => {
    setShichen(getCurrentShichen());
    try {
      // Only show last result if full quiz data still exists
      const fullResult = localStorage.getItem('fullQuizResult');
      if (fullResult) {
        const r = localStorage.getItem('lastResult');
        if (r) setLastResult(JSON.parse(r));
      } else {
        // Clean up stale lastResult
        localStorage.removeItem('lastResult');
      }
      const agreed = localStorage.getItem('privacyAgreed');
      if (!agreed) {
        setTimeout(() => {
          if (confirm('Five Tones uses a 2000-year-old Chinese healing framework for entertainment & wellness only. Not medical advice. Continue?')) {
            localStorage.setItem('privacyAgreed', 'true');
          }
        }, 800);
      }
    } catch (e) {}
  }, []);

  return (
    <main className="max-w-md mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="mb-2">
          <ConstitutionHalo
            constitutionId={lastResult?.id || 'balanced'}
            size={160}
          />
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          Five Tones
        </h1>
        <p className="text-gray-400 mt-2 text-lg">Your Body Has a Soundtrack</p>
      </div>

      {/* Concept — Five Tones + Five Organs */}
      <div className="bg-white/90 backdrop-blur rounded-3xl p-7 shadow-sm mb-5">
        <h2 className="text-xl font-bold text-center text-gray-700 mb-1">
          The Five Healing Tones
        </h2>
        <p className="text-xs text-center text-gray-400 mb-5">
          2000-Year-Old Chinese Medicine · Modern Music
        </p>
        <div className="flex justify-around mb-3">
          {elements.map((el, i) => {
            const cid = el.tone === 'Gong' ? 'gong' : el.tone === 'Shang' ? 'shang' : el.tone === 'Jue' ? 'jue' : el.tone === 'Zhi' ? 'zhi' : 'yu';
            return (
            <div key={el.tone} className="flex flex-col items-center">
              <div className="mb-1 animate-pulse shadow-md rounded-full"
                style={{ animationDelay: `${i * 0.5}s` }}>
                <ConstitutionIcon id={cid} size={48} />
              </div>
              <span className="text-xs font-semibold text-gray-600">{el.name}</span>
              <span className="text-[10px] text-gray-400">{el.organ}</span>
            </div>
            );
          })}
        </div>
        <p className="text-sm text-gray-500 text-center leading-relaxed">
          Ancient Chinese medicine discovered five musical tones (Gong-Shang-Jue-Zhi-Yu)
          that resonate with five organ systems. Each tone heals a different part of you.
        </p>
      </div>

      {/* Shichen — 子午流注 meridian clock */}
      {shichen && (
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-4 mb-4 border border-yellow-100">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-4xl">{shichen.emoji}</span>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-amber-600 text-lg">{shichen.nameCN}</span>
                <span className="text-amber-400 text-sm">{shichen.name}</span>
                <span className="text-amber-300 text-xs">{String(shichen.hourStart).padStart(2,'0')}:00-{String(shichen.hourEnd).padStart(2,'0')}:00</span>
              </div>
              <div className="font-medium text-amber-500 text-sm">{shichen.meridian} Meridian</div>
              <div className="mt-2 inline-flex items-center gap-1.5 bg-amber-200/60 rounded-full px-3 py-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold text-amber-700">
                  {shichen.organCN} ({shichen.organ}) on duty now
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-green-500 text-xs animate-pulse font-medium">● Now</span>
              <span className="text-[10px] text-amber-400 mt-0.5">{shichen.yangRising ? '☯ Yang ↑' : '☯ Yin ↑'}</span>
            </div>
          </div>
          <p className="text-amber-600 text-sm leading-relaxed">{shichen.tip}</p>
          {shichen.toneName && (
            <div className="flex items-center gap-2 bg-amber-100/50 rounded-xl p-3 mt-3">
              <span className="text-2xl">{toneEmoji[shichen.tone || ''] || '🎵'}</span>
              <div>
                <span className="font-semibold text-amber-700 text-sm">Healing Tone: {shichen.toneName}</span>
                <span className="text-amber-500 text-xs block">The music that harmonizes this meridian right now</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Last result */}
      {lastResult && (
        <div onClick={() => router.push('/result')} className="bg-white rounded-2xl p-4 mb-4 shadow-sm flex items-center gap-3 cursor-pointer hover:bg-gray-50 active:scale-[0.98] transition-all">
          <span className="text-4xl">{lastResult.emoji}</span>
          <div className="flex-1">
            <div className="text-xs text-gray-400">Your last result</div>
            <div className="font-semibold text-lg" style={{ color: lastResult.color }}>{lastResult.name} · {lastResult.tone}</div>
            <div className="text-xs text-gray-300">{lastResult.time}</div>
          </div>
          <span className="text-gray-300 text-2xl">›</span>
        </div>
      )}

      {/* CTA */}
      <div className="text-center mt-32">
        <button onClick={() => router.push('/quiz')}
          className="w-80 h-24 rounded-full text-white text-2xl font-bold shadow-xl
            bg-gradient-to-r from-red-400 to-orange-400 hover:from-red-500 hover:to-orange-500
            active:scale-95 transition-all flex items-center justify-center gap-3 mx-auto">
          <span>🎯</span> Take the 2-Min Quiz
        </button>
        <p className="text-xs text-gray-300 mt-6">For entertainment & wellness only. Not medical advice.</p>
      </div>
    </main>
  );
}
