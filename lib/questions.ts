// 7 TCM diagnostic questions covering: digestion, temperature, tension, sleep, energy rhythm, emotions (七情), body signals (气血)
// Each question maps to one element, options differentiated by scoring
// Options are intentionally NOT ordered by element to prevent pattern bias

export interface Question {
  text: string;
  element: string;
  elementEmoji: string;
  organ: string;
  tcmNote: string;
  options: { text: string; elementEmoji: string; scores: Record<string, number> }[];
}

export const questions: Question[] = [
  {
    text: "How would you describe your digestion — not just after one meal, but overall?",
    element: 'Earth',
    elementEmoji: '🟤',
    organ: 'Spleen & Stomach',
    tcmNote: 'In Chinese medicine, digestion is the foundation of all energy. The Spleen transforms food into Qi — how yours works reveals your core constitution.',
    options: [
      { text: "Steady and reliable — I digest life methodically, food and emotions alike", elementEmoji: '🟤', scores: { gong: 2, jue: 1 } },
      { text: "Tied to my mood — when stressed, my stomach knows immediately", elementEmoji: '🟢', scores: { jue: 2, gong: 1 } },
      { text: "Sensitive — certain foods, environments, or emotions trigger a reaction quickly", elementEmoji: '⚪', scores: { shang: 2, yu: 1 } },
      { text: "Fast and fiery — I burn through food and energy quickly, always ready for more", elementEmoji: '🔴', scores: { zhi: 2, gong: 1 } },
      { text: "Slow and heavy — I retain water, feel bloated, take time to process", elementEmoji: '🔵', scores: { yu: 2, shang: 1 } },
    ],
  },
  {
    text: "Compared to people around you, how does your body regulate temperature?",
    element: 'Metal',
    elementEmoji: '⚪',
    organ: 'Lungs & Large Intestine',
    tcmNote: 'Your internal thermostat reveals your body\'s balance of warming and cooling energy. TCM doctors have asked this question for over 2,000 years.',
    options: [
      { text: "I run hot — I'm always the warmest person in the room", elementEmoji: '🔴', scores: { zhi: 2, shang: 1 } },
      { text: "I feel a deep cold — especially in my low back and knees", elementEmoji: '🔵', scores: { yu: 2, jue: 1 } },
      { text: "I feel chilly easily — cold hands, cold feet, I layer up", elementEmoji: '⚪', scores: { shang: 2, yu: 1 } },
      { text: "Temperature doesn't affect me much — I adapt quickly", elementEmoji: '🟢', scores: { jue: 2, zhi: 1 } },
      { text: "I'm usually comfortable — rarely too hot or too cold", elementEmoji: '🟤', scores: { gong: 2, jue: 1 } },
    ],
  },
  {
    text: "Where in your body do tension or discomfort most often show up?",
    element: 'Wood',
    elementEmoji: '🟢',
    organ: 'Liver & Gallbladder',
    tcmNote: 'In Chinese medicine, different areas of the body are governed by different organs. Where you hold tension is a diagnostic map, not random.',
    options: [
      { text: "Lower back or knees — aching, weak, deep fatigue", elementEmoji: '🔵', scores: { yu: 2, gong: 1 } },
      { text: "Sides of ribs, temples, or jaw — tightness, headaches", elementEmoji: '🟢', scores: { jue: 2, zhi: 1 } },
      { text: "Heart area — palpitations, flushed face, restless heat", elementEmoji: '🔴', scores: { zhi: 2, yu: 1 } },
      { text: "Upper belly — bloating, fullness, digestive unease", elementEmoji: '🟤', scores: { gong: 2, jue: 1 } },
      { text: "Chest, throat, or skin — constricted breathing, dry skin", elementEmoji: '⚪', scores: { shang: 2, zhi: 1 } },
    ],
  },
  {
    text: "How would you describe your natural sleep pattern?",
    element: 'Fire',
    elementEmoji: '🔴',
    organ: 'Heart & Small Intestine',
    tcmNote: 'Each organ has a peak and rest time in the 24-hour Chinese organ clock. Your sleep pattern reveals which organ dominates your internal rhythm.',
    options: [
      { text: "My sleep is light — racing thoughts, easily disturbed", elementEmoji: '🟢', scores: { jue: 2, zhi: 1 } },
      { text: "I fall asleep fast but may wake up feeling hot or sweaty", elementEmoji: '🔴', scores: { zhi: 2, yu: 1 } },
      { text: "I sleep deeply but often wake up feeling heavy or groggy", elementEmoji: '🟤', scores: { gong: 2, shang: 1 } },
      { text: "I struggle to fall asleep and have vivid, deep dreams", elementEmoji: '🔵', scores: { yu: 2, jue: 1 } },
      { text: "I wake up easily — often right before dawn, alert", elementEmoji: '⚪', scores: { shang: 2, gong: 1 } },
    ],
  },
  {
    text: "At what time of day does your energy naturally dip lowest?",
    element: 'Water',
    elementEmoji: '🔵',
    organ: 'Kidneys & Bladder',
    tcmNote: 'The Chinese organ clock maps every two-hour period to an organ system. When your energy dips, that organ is asking for attention.',
    options: [
      { text: "11am–1pm · Energy crashes midday, need a reset", elementEmoji: '🔴', scores: { zhi: 2, yu: 1 } },
      { text: "7–9am · Morning fog, slow to start", elementEmoji: '🟤', scores: { gong: 2, jue: 1 } },
      { text: "1–3am · Wake up restless, mind racing", elementEmoji: '🟢', scores: { jue: 2, zhi: 1 } },
      { text: "5–7pm · Evening exhaustion, drained by dinner", elementEmoji: '🔵', scores: { yu: 2, gong: 1 } },
      { text: "3–5am · Wake up and can't fall back asleep", elementEmoji: '⚪', scores: { shang: 2, yu: 1 } },
    ],
  },
  {
    text: "Under pressure, your emotions tend to —",
    element: 'Wood',
    elementEmoji: '🟢',
    organ: 'Liver & Gallbladder',
    tcmNote: 'In TCM, the Liver governs the smooth flow of emotions. Each of the five emotions (anger, joy, worry, grief, fear) resonates with a different organ — how you react under pressure reveals your dominant emotional channel.',
    options: [
      { text: "Ignite quickly — I flare up, but it passes fast", elementEmoji: '🔴', scores: { zhi: 2, jue: 1 } },
      { text: "Build up slowly — I hold it in until I can't anymore", elementEmoji: '🟢', scores: { jue: 2, yu: 1 } },
      { text: "Loop in circles — I overthink every angle, can't let go", elementEmoji: '🟤', scores: { gong: 2, shang: 1 } },
      { text: "Sink deep — I feel heavy, withdraw, and go quiet", elementEmoji: '⚪', scores: { shang: 2, gong: 1 } },
      { text: "Freeze up — I get paralyzed and avoid everything", elementEmoji: '🔵', scores: { yu: 2, zhi: 1 } },
    ],
  },
  {
    text: "Your body sends you signals. Which one feels most familiar?",
    element: 'Water',
    elementEmoji: '🔵',
    organ: 'Kidneys & Bladder',
    tcmNote: 'In Chinese medicine, physical signs are not random — they reveal which organ system needs attention. Dryness points to Lungs, coldness to Kidneys, heaviness to Spleen, heat to Heart, tension to Liver.',
    options: [
      { text: "Dry mouth, dry skin, thirsty often — I feel dehydrated no matter how much I drink", elementEmoji: '⚪', scores: { shang: 2, zhi: 1 } },
      { text: "Cold hands and feet, low back aches — warmth is my best friend", elementEmoji: '🔵', scores: { yu: 2, jue: 1 } },
      { text: "Heavy limbs, bloating, sluggish digestion — my body feels waterlogged", elementEmoji: '🟤', scores: { gong: 2, yu: 1 } },
      { text: "Restless heat, flushed face, easy sweating — I run like an engine that won't cool down", elementEmoji: '🔴', scores: { zhi: 2, shang: 1 } },
      { text: "Muscle tension, headaches, tight shoulders — I carry stress in my body like armor", elementEmoji: '🟢', scores: { jue: 2, gong: 1 } },
    ],
  },
];

export function calculateScores(answers: number[]): Record<string, number> {
  const scores: Record<string, number> = { gong: 0, shang: 0, jue: 0, zhi: 0, yu: 0 };
  answers.forEach((answerIdx, qIdx) => {
    if (answerIdx == null || answerIdx < 0) return;
    const option = questions[qIdx].options[answerIdx];
    if (!option) return;
    Object.entries(option.scores).forEach(([key, val]) => {
      scores[key] = (scores[key] || 0) + val;
    });
  });
  return scores;
}
