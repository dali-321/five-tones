// 子午流注 — 12 Shi Chen (two-hour periods) mapped to organ meridians
// Each shichen governs a specific organ's peak energy flow

export interface Shichen {
  name: string;          // Chinese name (Zishi, Choushi...)
  nameCN: string;        // Chinese characters (子时, 丑时...)
  hourStart: number;
  hourEnd: number;
  meridian: string;      // Meridian name
  organ: string;         // Organ governed
  organCN: string;       // Chinese organ name
  tone: string | null;
  toneName: string | null;
  emoji: string;
  tip: string;
  yangRising: boolean;   // Yang energy rising or falling?
}

const SHICHEN_LIST: Shichen[] = [
  { name: 'Zishi', nameCN: '子时', hourStart: 23, hourEnd: 1, meridian: 'Gallbladder', organ: 'Gallbladder', organCN: '胆', tone: 'jue', toneName: 'Jue (Wood)', emoji: '🌑', tip: 'Yang begins its return. The Gallbladder meridian peaks — this is when courage and decision-making energy rebuild.', yangRising: true },
  { name: 'Choushi', nameCN: '丑时', hourStart: 1, hourEnd: 3, meridian: 'Liver', organ: 'Liver', organCN: '肝', tone: 'jue', toneName: 'Jue (Wood)', emoji: '🌑', tip: 'The Liver cleanses your blood and emotions. If you wake now, your Liver is asking you to release stored tension.', yangRising: true },
  { name: 'Yinshi', nameCN: '寅时', hourStart: 3, hourEnd: 5, meridian: 'Lung', organ: 'Lungs', organCN: '肺', tone: 'shang', toneName: 'Shang (Metal)', emoji: '🌅', tip: 'The Lungs distribute Qi through your entire body. Deep breathing now prepares you for the day\'s first breath of air.', yangRising: true },
  { name: 'Maoshi', nameCN: '卯时', hourStart: 5, hourEnd: 7, meridian: 'Large Intestine', organ: 'Large Intestine', organCN: '大肠', tone: 'shang', toneName: 'Shang (Metal)', emoji: '🌅', tip: 'The Large Intestine releases what the body no longer needs. Dawn is the natural time for letting go — physically and emotionally.', yangRising: true },
  { name: 'Chenshi', nameCN: '辰时', hourStart: 7, hourEnd: 9, meridian: 'Stomach', organ: 'Stomach', organCN: '胃', tone: 'gong', toneName: 'Gong (Earth)', emoji: '☀️', tip: 'The Stomach meridian peaks — this is the best time to eat your largest meal. Your digestive fire is strongest now.', yangRising: true },
  { name: 'Sishi', nameCN: '巳时', hourStart: 9, hourEnd: 11, meridian: 'Spleen', organ: 'Spleen', organCN: '脾', tone: 'gong', toneName: 'Gong (Earth)', emoji: '☀️', tip: 'The Spleen transforms food into Qi and blood. Your mental clarity peaks — this is the time to create, build, and think deeply.', yangRising: true },
  { name: 'Wushi', nameCN: '午时', hourStart: 11, hourEnd: 13, meridian: 'Heart', organ: 'Heart', organCN: '心', tone: 'zhi', toneName: 'Zhi (Fire)', emoji: '🔥', tip: 'The Heart meridian is at its zenith. A short rest now — even 10 minutes — nourishes your spirit for the entire afternoon.', yangRising: false },
  { name: 'Weishi', nameCN: '未时', hourStart: 13, hourEnd: 15, meridian: 'Small Intestine', organ: 'Small Intestine', organCN: '小肠', tone: 'zhi', toneName: 'Zhi (Fire)', emoji: '☀️', tip: 'The Small Intestine sorts pure from impure — physically and mentally. Afternoon clarity emerges as your body completes this sorting.', yangRising: false },
  { name: 'Shenshi', nameCN: '申时', hourStart: 15, hourEnd: 17, meridian: 'Bladder', organ: 'Bladder', organCN: '膀胱', tone: 'yu', toneName: 'Yu (Water)', emoji: '🌤️', tip: 'The Bladder meridian runs along your entire back. This is the best time for physical activity — your body is fully awake and coordinated.', yangRising: false },
  { name: 'Youshi', nameCN: '酉时', hourStart: 17, hourEnd: 19, meridian: 'Kidney', organ: 'Kidneys', organCN: '肾', tone: 'yu', toneName: 'Yu (Water)', emoji: '🌇', tip: 'The Kidneys store your deepest energy reserves. Wind down now — the transition from day to night is when Kidney Qi restores itself.', yangRising: false },
  { name: 'Xushi', nameCN: '戌时', hourStart: 19, hourEnd: 21, meridian: 'Pericardium', organ: 'Heart Protector', organCN: '心包', tone: 'zhi', toneName: 'Zhi (Fire)', emoji: '🌆', tip: 'The Pericardium protects your Heart — literally and emotionally. This is the time for connection, intimacy, or quiet reflection.', yangRising: false },
  { name: 'Haishi', nameCN: '亥时', hourStart: 21, hourEnd: 23, meridian: 'Triple Burner', organ: 'Energy Regulator', organCN: '三焦', tone: null, toneName: null, emoji: '🌙', tip: 'The Triple Burner regulates the three energy centers of your body. Prepare for deep sleep — let go of the day completely.', yangRising: false },
];

export function getCurrentShichen(hour?: number): Shichen {
  if (hour === undefined || hour === null) {
    hour = new Date().getHours();
  }
  for (const sc of SHICHEN_LIST) {
    if (sc.hourStart <= sc.hourEnd) {
      if (hour >= sc.hourStart && hour < sc.hourEnd) return sc;
    } else {
      if (hour >= sc.hourStart || hour < sc.hourEnd) return sc;
    }
  }
  return SHICHEN_LIST[0];
}

export { SHICHEN_LIST };
