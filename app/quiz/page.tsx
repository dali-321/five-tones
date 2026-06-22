'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions, calculateScores, Question } from '@/lib/questions';
import { determineConstitution } from '@/lib/constitutions';

const dimColors: Record<string, string> = {
  gong: '#F5A623', shang: '#4FC3F7', jue: '#66BB6A', zhi: '#EF5350', yu: '#5C6BC0',
};

const organMap: Record<string, string> = {
  gong: 'Spleen/Stomach', shang: 'Lungs', jue: 'Liver', zhi: 'Heart', yu: 'Kidneys',
};

export default function Quiz() {
  const router = useRouter();
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [selected, setSelected] = useState<number | null>(null);
  const [animOut, setAnimOut] = useState(false);

  const q: Question = questions[idx];
  const dimOrder = ['gong', 'shang', 'jue', 'zhi', 'yu', 'jue', 'yu'];
  const currentDim = dimOrder[idx] || 'gong';

  const pick = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    const next = answers.slice();
    next[idx] = i;
    setAnswers(next);
  };

  const next = () => {
    if (selected === null) return;
    if (idx >= questions.length - 1) {
      // Calculate result
      const scores = calculateScores(answers);
      const { constitution } = determineConstitution(scores);

      // Save full result to localStorage
      const result = { constitution, scores };
      localStorage.setItem('fullQuizResult', JSON.stringify(result));
      localStorage.setItem('lastResult', JSON.stringify({
        id: constitution.id,
        name: constitution.name,
        tone: constitution.tone,
        emoji: constitution.emoji,
        color: constitution.color,
        time: new Date().toLocaleDateString(),
      }));

      router.push('/result');
      return;
    }
    setAnimOut(true);
    setTimeout(() => {
      setIdx(idx + 1);
      setSelected(null);
      setAnimOut(false);
    }, 200);
  };

  const prev = () => {
    if (idx <= 0) return;
    setAnimOut(true);
    setTimeout(() => {
      setIdx(idx - 1);
      setSelected(answers[idx - 1]);
      setAnimOut(false);
    }, 200);
  };

  const pct = Math.round(((idx + 1) / questions.length) * 100);

  return (
    <main className="max-w-md mx-auto px-6 py-8">
      {/* Progress */}
      <div className="h-2 bg-gray-100 rounded-full mb-6 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-red-400 to-orange-400 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }} />
      </div>

      {/* TCM context banner */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-4 mb-5 border border-amber-100">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{q.elementEmoji}</span>
          <span className="font-bold text-amber-700">{q.element} Energy</span>
          <span className="text-amber-400 text-sm">· {q.organ}</span>
        </div>
        <p className="text-amber-600 text-sm leading-relaxed">{q.tcmNote}</p>
      </div>

      {/* Question card */}
      <div className={`transition-all duration-200 ${animOut ? 'opacity-0 translate-x-4' : 'opacity-100'}`}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold text-gray-400">{idx + 1}/{questions.length}</span>
          <span className="text-xs px-2 py-0.5 rounded-full text-white font-medium"
            style={{ backgroundColor: dimColors[currentDim] }}>
            {currentDim.toUpperCase()} · {organMap[currentDim]}
          </span>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-8">{q.text}</h2>

        <div className="flex flex-col gap-3">
          {q.options.map((opt, i) => {
            const isSelected = selected === i;
            return (
              <button key={i}
                onClick={() => pick(i)}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all ${
                  isSelected
                    ? 'border-red-400 bg-red-50 shadow-md'
                    : 'border-gray-100 bg-white hover:border-gray-200 active:bg-gray-50'
                }`}>
                <div className="flex items-center gap-3">
                  <span className="text-xl">{opt.elementEmoji}</span>
                  <span className="text-lg text-gray-700">{opt.text}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Nav */}
      <div className="flex justify-between mt-10">
        <button onClick={prev} disabled={idx <= 0}
          className="px-6 py-3 rounded-full text-gray-400 disabled:opacity-30 active:bg-gray-100 transition-all">
          ← Back
        </button>
        <button onClick={next} disabled={selected === null}
          className="px-10 py-3 rounded-full font-bold text-white disabled:opacity-40 active:scale-95 transition-all
            bg-gradient-to-r from-red-400 to-orange-400">
          {idx >= questions.length - 1 ? 'See Result' : 'Next →'}
        </button>
      </div>
    </main>
  );
}
