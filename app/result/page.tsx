'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { getRecommendedSongs, Song } from '@/lib/songs';
import { getCurrentShichen, Shichen } from '@/lib/shichen';
import { Constitution } from '@/lib/constitutions';
import ConstitutionIcon, { iconColors } from '@/app/components/ConstitutionIcon';
import ConstitutionHalo from '@/app/components/ConstitutionHalo';

export default function Result() {
  const router = useRouter();
  const [constitution, setConstitution] = useState<Constitution | null>(null);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [songs, setSongs] = useState<Song[]>([]);
  const [shichen, setShichen] = useState<Shichen | null>(null);
  const [tab, setTab] = useState<'hot' | 'more'>('hot');
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [poolExhausted, setPoolExhausted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  type BarData = { key: string; label: string; score: number; color: string; percent: number };
  const [bars, setBars] = useState<BarData[]>([]);

  const loadExcludeIds = useCallback((): string[] => {
    try { return JSON.parse(localStorage.getItem('shownSongIds') || '[]'); }
    catch { return []; }
  }, []);

  const updateShownIds = useCallback((newSongs: Song[]) => {
    try {
      let shown = loadExcludeIds();
      newSongs.forEach((s) => {
        const i = shown.indexOf(s.id);
        if (i >= 0) shown.splice(i, 1);
        shown.push(s.id);
      });
      if (shown.length > 30) shown = shown.slice(shown.length - 30);
      localStorage.setItem('shownSongIds', JSON.stringify(shown));
    } catch {}
  }, [loadExcludeIds]);

  const loadHistory = (): Song[][] => {
    try { return JSON.parse(localStorage.getItem('batchHistory') || '[]'); }
    catch { return []; }
  };

  const pushHistory = (s: Song[]) => {
    try {
      const h = loadHistory();
      h.push(s.slice());
      if (h.length > 5) h.shift();
      localStorage.setItem('batchHistory', JSON.stringify(h));
    } catch {}
  };

  const loadSongs = useCallback((key: string, hour: number, tabMode: string) => {
    try {
      const exclude = loadExcludeIds();
      let result = getRecommendedSongs(key, 6, hour, exclude);
      updateShownIds(result);
      if (tabMode === 'hot') {
        const s26 = result.filter((s) => s.year === '2026');
        const s25 = result.filter((s) => s.year === '2025');
        const other = result.filter((s) => s.year !== '2026' && s.year !== '2025');
        result = s26.concat(s25).concat(other).slice(0, 6);
      }
      return result;
    } catch (e: any) {
      setErrorMsg('loadSongs: ' + (e?.message || String(e)));
      return [];
    }
  }, [loadExcludeIds, updateShownIds]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('fullQuizResult');
      if (!raw) { setErrorMsg('No quiz result found. Please take the quiz first.'); setLoading(false); return; }

      const data = JSON.parse(raw);
      if (!data || !data.constitution) { setErrorMsg('Quiz result data is incomplete.'); setLoading(false); return; }

      const c: Constitution = data.constitution;
      const sc: Record<string, number> = data.scores || {};
      setConstitution(c);
      setScores(sc);

      const sh = getCurrentShichen();
      setShichen(sh);

      const keyMap: Record<string, string> = { gong: 'gong', shang: 'shang', jue: 'jue', zhi: 'zhi', yu: 'yu', balanced: 'gong' };
      const key = keyMap[c.id] || 'gong';

      const barColors: Record<string, string> = { gong: '#F5A623', shang: '#4FC3F7', jue: '#66BB6A', zhi: '#EF5350', yu: '#5C6BC0' };
      const barLabels: Record<string, string> = { gong: 'Earth', shang: 'Metal', jue: 'Wood', zhi: 'Fire', yu: 'Water' };
      const dims = ['gong', 'shang', 'jue', 'zhi', 'yu'];

      setBars(dims.map((d) => ({ key: d, label: barLabels[d], score: sc[d] || 0, color: barColors[d], percent: 0 })));

      const hour = new Date().getHours();
      const s = loadSongs(key, hour, 'hot');
      setSongs(s);
      setLoading(false);

      // Animate bars
      dims.forEach((d, i) => {
        setTimeout(() => {
          setBars((prev) => {
            const next = [...prev];
            if (next[i]) next[i] = { ...next[i], percent: Math.min(((sc[d] || 0) / 10) * 100, 100) };
            return next;
          });
        }, (i + 1) * 120);
      });

      // Check pool exhaustion
      try {
        const allPool = getRecommendedSongs(key, 40, undefined, []);
        const shown = loadExcludeIds();
        if (shown.length >= allPool.length * 0.8) setPoolExhausted(true);
      } catch {}

    } catch (e: any) {
      setErrorMsg('Unexpected error: ' + (e?.message || String(e)));
      setLoading(false);
    }
  }, [router, loadSongs, loadExcludeIds]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center text-gray-400">Loading...</div>
  );

  if (errorMsg || !constitution) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6">
      <span className="text-4xl">😕</span>
      <p className="text-gray-500 text-center">{errorMsg || 'Something went wrong.'}</p>
      <button onClick={() => { try { localStorage.removeItem('fullQuizResult'); } catch {}; router.push('/quiz'); }}
        className="px-8 py-3 rounded-full text-white font-bold bg-gradient-to-r from-red-400 to-orange-400">
        Retake Quiz
      </button>
    </div>
  );

  const refreshSongs = () => {
    pushHistory(songs);
    const keyMap: Record<string, string> = { gong: 'gong', shang: 'shang', jue: 'jue', zhi: 'zhi', yu: 'yu', balanced: 'gong' };
    const key = keyMap[constitution.id] || 'gong';
    const hour = new Date().getHours();
    const fresh = loadSongs(key, hour, tab);
    if (fresh.length) {
      setSongs(fresh);
      setCanGoPrev(true);
    }
    try {
      const allPool = getRecommendedSongs(key, 40, undefined, []);
      const shown = loadExcludeIds();
      setPoolExhausted(shown.length >= allPool.length * 0.8);
    } catch {}
  };

  const prevBatch = () => {
    const h = loadHistory();
    if (!h.length) return;
    const prev = h.pop()!;
    localStorage.setItem('batchHistory', JSON.stringify(h));
    setSongs(prev);
    setCanGoPrev(h.length > 0);
  };

  const switchTab = (t: 'hot' | 'more') => {
    if (t === tab) return;
    setTab(t);
    const keyMap: Record<string, string> = { gong: 'gong', shang: 'shang', jue: 'jue', zhi: 'zhi', yu: 'yu', balanced: 'gong' };
    const key = keyMap[constitution.id] || 'gong';
    const hour = new Date().getHours();
    const fresh = loadSongs(key, hour, t);
    if (fresh.length) setSongs(fresh);
  };

  const restart = () => {
    try { localStorage.removeItem('fullQuizResult'); localStorage.removeItem('lastResult'); } catch {}
    router.push('/');
  };

  const shareFriend = () => {
    const shareText = `I am "${constitution.name}" — take the 2-min quiz to find your healing soundtrack!\n${window.location.origin}`;
    window.alert(shareText);
  };

  return (
    <main className="max-w-md mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col items-center px-6 py-12 rounded-b-[48px]"
        style={{ background: `linear-gradient(135deg, ${constitution.colorLight} 0%, #FFFFFF 100%)` }}>
        <div className="mb-4">
          <ConstitutionHalo constitutionId={constitution.id} size={180} />
        </div>
        <p className="text-gray-400 text-sm mb-2">Your Body Type</p>
        <h1 className="text-4xl font-bold" style={{ color: constitution.color }}>{constitution.name}</h1>
        <div className="mt-3 px-6 py-2 rounded-full text-white text-sm font-medium"
          style={{ backgroundColor: constitution.color }}>
          {constitution.toneName} · {constitution.organ}
        </div>
        <p className="text-xs text-gray-300 mt-3">For entertainment & wellness only</p>
      </div>

      {/* Description */}
      <div className="bg-white mx-4 rounded-3xl p-6 shadow-sm mt-4">
        <h3 className="text-lg font-bold text-gray-700 mb-3">About You</h3>
        <p className="text-gray-600 leading-relaxed">{constitution.description}</p>
      </div>

      {/* Shichen — 子午流注 meridian clock */}
      {shichen && (
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 mx-4 rounded-2xl p-4 mt-3 border border-yellow-100">
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
          <p className="text-amber-600 text-sm leading-relaxed mb-3">{shichen.tip}</p>
          {shichen.toneName && (
            <div className="flex items-center gap-2 bg-amber-100/50 rounded-xl p-3">
              <span className="text-2xl">{shichen.tone === 'gong' ? '🟤' : shichen.tone === 'shang' ? '⚪' : shichen.tone === 'jue' ? '🟢' : shichen.tone === 'zhi' ? '🔴' : '🔵'}</span>
              <div>
                <span className="font-semibold text-amber-700 text-sm">Healing Tone: {shichen.toneName}</span>
                <span className="text-amber-500 text-xs block">{shichen.meridian} Meridian → {shichen.organCN} ({shichen.organ})</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Score bars */}
      <div className="bg-white mx-4 rounded-3xl p-6 shadow-sm mt-3">
        <h3 className="text-lg font-bold text-gray-700 mb-4">Your Five Tones</h3>
        {bars.map((b) => (
          <div key={b.key} className="flex items-center gap-3 mb-3">
            <span className="w-14 text-sm font-medium text-gray-600 flex-shrink-0">{b.label}</span>
            <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${b.percent}%`, backgroundColor: b.color }} />
            </div>
            <span className="w-8 text-sm text-gray-400 text-right">{scores[b.key] || 0}</span>
          </div>
        ))}
      </div>

      {/* Songs */}
      <div className="bg-white mx-4 rounded-3xl p-6 shadow-sm mt-3">
        <h3 className="text-lg font-bold text-gray-700 mb-1">Your Healing Playlist</h3>
        <p className="text-sm text-gray-400 mb-4">{constitution.musicStyle}</p>

        <div className="flex gap-3 mb-5">
          <button onClick={() => switchTab('hot')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              tab === 'hot' ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-500'}`}>
            🔥 Trending
          </button>
          <button onClick={() => switchTab('more')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              tab === 'more' ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-500'}`}>
            🎵 Discover
          </button>
        </div>

        {songs.map((song) => (
          <div key={song.id}
            onClick={() => window.open(`https://open.spotify.com/search/${encodeURIComponent(song.searchKeyword)}`, '_blank')}
            className="flex gap-4 p-3 bg-gray-50 rounded-2xl mb-4 active:bg-gray-100 active:scale-[0.98] transition-all cursor-pointer">
            <div className="relative w-20 h-20 flex-shrink-0">
              <img src={song.cover} alt={song.name} className="w-20 h-20 rounded-xl object-cover bg-gray-200" />
              <div className="absolute bottom-0 left-0 right-0 rounded-b-xl px-1.5 py-0.5"
                style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.75))' }}>
                <span className="text-white text-[10px] text-center block leading-tight">{song.caption}</span>
              </div>
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-base font-semibold text-gray-800 truncate">{song.name}</span>
                <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded flex-shrink-0 ${
                  song.reason === 'time' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
                  {song.reason === 'time' ? `🌙 ${song.shichenInfo || 'Time'}` : '🧬 Body'}
                </span>
              </div>
              <span className="text-sm text-gray-500">{song.artist}</span>
            </div>
          </div>
        ))}

        <div className="flex flex-col items-center gap-2 mt-4">
          <div className="flex gap-3">
            {canGoPrev && (
              <button onClick={prevBatch}
                className="px-5 py-2.5 rounded-full border-2 border-gray-200 text-gray-400 text-sm font-medium active:bg-gray-100 transition-all">
                ◀ Previous
              </button>
            )}
            <button onClick={refreshSongs}
              className="px-8 py-2.5 rounded-full border-2 border-red-200 text-red-400 bg-red-50 text-sm font-medium active:bg-red-100 transition-all">
              🔄 Refresh
            </button>
          </div>
          {poolExhausted && (
            <span className="text-xs text-amber-500">You've seen most songs! Try again at a different time of day.</span>
          )}
        </div>
      </div>

      {/* Wellness tip */}
      <div className="bg-white mx-4 rounded-3xl p-6 shadow-sm mt-3">
        <h3 className="text-lg font-bold text-gray-700 mb-2">💡 Wellness Tip</h3>
        <p className="text-gray-600">{constitution.wellnessTip}</p>
      </div>

      {/* TCM Theory */}
      <div className="bg-white mx-4 rounded-3xl p-6 shadow-sm mt-3">
        <h3 className="text-lg font-bold text-gray-700 mb-2">🏛️ The Ancient Wisdom Behind Your Result</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{constitution.tcmTheory}</p>
        <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-3">
          <ConstitutionIcon id={constitution.id} size={28} />
          <span className="text-sm text-gray-500">{constitution.fiveElement}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-wrap justify-center gap-3 px-4 mt-8">
        <button onClick={restart}
          className="w-36 h-12 rounded-full border-2 border-gray-200 text-gray-500 font-medium active:bg-gray-50 transition-all">
          Retake Quiz
        </button>
        <button onClick={shareFriend}
          className="w-36 h-12 rounded-full text-white font-medium active:scale-95 transition-all bg-gradient-to-r from-red-400 to-orange-400">
          💬 Share
        </button>
        <button onClick={() => {
          const t = `My body type is ${constitution?.name} — ${constitution?.tone} tone\nTake the quiz: ${window.location.origin}`;
          if (navigator.clipboard) { navigator.clipboard.writeText(t).then(() => alert('Copied!\n\n' + t)).catch(() => alert(t)); }
          else { alert(t); }
        }}
          className="w-36 h-12 rounded-full text-white font-medium active:scale-95 transition-all bg-gradient-to-r from-green-400 to-green-500">
          📱 Copy Link
        </button>
      </div>

      {/* Buy Me a Coffee — zero-friction support */}
      <div className="text-center mt-6 pb-8">
        <a href="https://buymeacoffee.com/fivetones" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm text-amber-700 bg-amber-50 border border-amber-200 hover:bg-amber-100 transition-all active:scale-95">
          ☕ Buy Me a Coffee
        </a>
      </div>
    </main>
  );
}
