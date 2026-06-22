export interface Constitution {
  id: string;
  name: string;
  tone: string;
  toneName: string;
  organ: string;
  description: string;
  tcmTheory: string;
  fiveElement: string;
  musicStyle: string;
  color: string;
  colorLight: string;
  emoji: string;
  recommendations: string[];
  wellnessTip: string;
}

const constitutions: Constitution[] = [
  {
    id: 'gong',
    name: 'The Grounded',
    tone: 'Earth',
    toneName: 'Gong (Earth Tone)',
    organ: 'Spleen & Stomach',
    description:
      'You move to the rhythm of the earth. You thrive on stability, comfort, and warmth — like a cozy home filled with good food and soft melodies. In Chinese medicine, your Earth energy governs your Spleen and Stomach — the center that transforms nourishment into vitality.',
    tcmTheory:
      'In Traditional Chinese Medicine, the Spleen is your "digestive fire" — it transforms food into Qi (life energy) and ideas into action. When your Earth energy is balanced, you feel grounded, nurtured, and able to digest life\'s challenges with ease.',
    fiveElement: '🟤 Earth — stability, nourishment, grounding',
    musicStyle: 'Warm, steady, grounding — Folk, Acoustic, Lo-fi',
    color: '#F5A623',
    colorLight: '#FFF3E0',
    emoji: '🌍',
    recommendations: [
      'Listen to folk and acoustic music in the morning to set a calm tone for the day',
      'Choose songs with warm, full-bodied instrumentation',
      'Avoid chaotic or overly fast music when feeling ungrounded',
      'Pair music with a warm drink for the full grounding effect',
    ],
    wellnessTip: 'Nourish your spleen: warm meals, root vegetables, and gentle morning routines.',
  },
  {
    id: 'shang',
    name: 'The Clear',
    tone: 'Metal',
    toneName: 'Shang (Metal Tone)',
    organ: 'Lungs & Large Intestine',
    description:
      'Your voice cuts through the noise. You have a clarity and precision that others admire — like a bell ringing across a misty valley. In Chinese medicine, your Metal energy governs your Lungs — the organ of breath, boundary, and inspiration.',
    tcmTheory:
      'TCM sees the Lungs as the "minister of respiration" — they govern breath, voice, and the skin that forms your boundary with the world. Strong Metal energy means you take in what inspires you and release what no longer serves.',
    fiveElement: '⚪ Metal — clarity, precision, release',
    musicStyle: 'Clear, penetrating, crystalline — Pop, Indie, Vocal-forward',
    color: '#4FC3F7',
    colorLight: '#E1F5FE',
    emoji: '💎',
    recommendations: [
      'Listen to music with strong vocal performances and clear production',
      'Choose songs with uplifting, high-register melodies',
      'Practice deep breathing while listening to calming instrumental pieces',
      'Let music accompany your moments of reflection and journaling',
    ],
    wellnessTip: 'Protect your lungs: deep breathing exercises, stay hydrated, and embrace fresh air.',
  },
  {
    id: 'jue',
    name: 'The Flowing',
    tone: 'Wood',
    toneName: 'Jue (Wood Tone)',
    organ: 'Liver & Gallbladder',
    description:
      'You bend like a tree, never break. There is a natural grace to how you move through life — adaptive, creative, always growing. In Chinese medicine, your Wood energy governs your Liver — the organ of smooth flow, vision, and creative strategy.',
    tcmTheory:
      'In TCM, the Liver is the "general" of the body — it plans, strategizes, and ensures the smooth flow of Qi and emotions. When Wood energy flows freely, creativity blooms and frustration melts away.',
    fiveElement: '🟢 Wood — growth, flexibility, creativity',
    musicStyle: 'Smooth, flowing, adaptive — R&B, Jazz, Neo-soul',
    color: '#66BB6A',
    colorLight: '#E8F5E9',
    emoji: '🌿',
    recommendations: [
      'Listen to music with smooth rhythms and organic flow',
      'Let jazz improvisation inspire your creative thinking',
      'Choose songs that help you unwind and release tension',
      'Play music while moving — stretching, walking, or dancing freely',
    ],
    wellnessTip: 'Release stagnation: regular movement, stretching, and spending time in green spaces.',
  },
  {
    id: 'zhi',
    name: 'The Bright',
    tone: 'Fire',
    toneName: 'Zhi (Fire Tone)',
    organ: 'Heart & Small Intestine',
    description:
      'You light up every room you enter. Your energy is contagious, your joy is infectious — like a bonfire on a summer night. In Chinese medicine, your Fire energy governs your Heart — the emperor organ that houses your spirit.',
    tcmTheory:
      'TCM calls the Heart the "emperor" of all organs — it houses the Shen (spirit/mind) and governs joy, connection, and warmth. A balanced Fire means you radiate authentic warmth without burning out.',
    fiveElement: '🔴 Fire — joy, warmth, connection',
    musicStyle: 'Energetic, bright, uplifting — Pop, Dance, Upbeat',
    color: '#EF5350',
    colorLight: '#FFEBEE',
    emoji: '🔥',
    recommendations: [
      'Start your day with an energizing playlist to harness your natural fire',
      'Dance it out when emotions run high — movement is your release valve',
      'Balance high-energy music with cool-down tracks before bed',
      'Share your favorite upbeat songs with friends — your joy is meant to spread',
    ],
    wellnessTip: 'Cool your heart: stay hydrated, practice gratitude, and balance excitement with rest.',
  },
  {
    id: 'yu',
    name: 'The Deep',
    tone: 'Water',
    toneName: 'Yu (Water Tone)',
    organ: 'Kidneys & Bladder',
    description:
      'Still waters run deep in you. There is a quiet power in your presence — like the ocean, vast and mysterious. In Chinese medicine, your Water energy governs your Kidneys — the root of willpower, longevity, and deep listening.',
    tcmTheory:
      'TCM considers the Kidneys the "root of life" — they store Jing (essence), govern willpower, and connect to your deepest self. Strong Water energy means you possess quiet resilience and the wisdom of stillness.',
    fiveElement: '🔵 Water — depth, wisdom, restoration',
    musicStyle: 'Deep, ambient, introspective — Ambient, Chill, Indie',
    color: '#5C6BC0',
    colorLight: '#E8EAF6',
    emoji: '🌊',
    recommendations: [
      'Create a calming evening ritual with ambient music and dim lighting',
      'Choose deep, layered tracks that reward repeated listening',
      'Let instrumental music accompany your moments of solitude and reflection',
      'Explore genres like post-rock, ambient electronic, and cinematic scores',
    ],
    wellnessTip: 'Replenish your reserves: prioritize sleep, stay warm, and honor your need for quiet.',
  },
  {
    id: 'balanced',
    name: 'The Harmonized',
    tone: 'All Five Tones',
    toneName: 'Harmonized',
    organ: 'Whole Body',
    description:
      'You are a rare blend of all five energies. Your body and spirit are in remarkable balance — like an orchestra playing in perfect harmony. In Chinese medicine, this is the ideal state: all five organ systems working together in mutual support.',
    tcmTheory:
      'In TCM philosophy, true health comes when all five elements — Earth, Metal, Wood, Fire, Water — support each other in a dynamic cycle. You have achieved what practitioners call "harmony of the five Zang organs."',
    fiveElement: '✨ Harmony — all five elements in balance',
    musicStyle: 'Diverse — enjoy all genres freely',
    color: '#9C27B0',
    colorLight: '#F3E5F5',
    emoji: '✨',
    recommendations: [
      'Explore all genres — your balanced nature thrives on musical variety',
      'Let your mood guide your playlist rather than a fixed routine',
      'Share your gift of balance with others who need grounding or uplifting',
      'Trust your instincts — your body knows what music it needs today',
    ],
    wellnessTip: 'Maintain your harmony: variety in diet, movement, music, and connections.',
  },
];

export function determineConstitution(
  scores: Record<string, number>
): { constitution: Constitution; scores: Record<string, number> } {
  const entries = Object.entries(scores);
  const max = Math.max(...entries.map(([, v]) => v));

  // If all scores are close (within 1 point of max), balanced
  const allClose = entries.every(([, v]) => max - v <= 1);
  if (allClose || max <= 5) {
    const balanced = constitutions.find((c) => c.id === 'balanced')!;
    return { constitution: balanced, scores };
  }

  const top = entries.reduce((a, b) => (a[1] >= b[1] ? a : b))[0];
  const constitution = constitutions.find((c) => c.id === top) || constitutions[0];
  return { constitution, scores };
}

export { constitutions };
