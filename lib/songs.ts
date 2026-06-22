// 200 songs organized by five-tone type (40 per tone)
// Generated script — all captions JavaScript-safe

import { getCurrentShichen } from './shichen';

export interface Song {
  id: string;
  name: string;
  artist: string;
  searchKeyword: string;
  cover: string;
  caption: string;
  year: string;
  tone: string;
  reason?: string;
  shichenInfo?: string;
}

function makeSong(id: string, name: string, artist: string, caption: string, year: string, tone: string): Song {
  return {
    id, name, artist,
    searchKeyword: artist + ' ' + name,
    cover: '/covers/' + id + '.jpg',
    caption, year, tone,
  };
}

const GONG_SONGS: Song[] = [
  makeSong('g1','Landslide','Fleetwood Mac','Grounded like the earth beneath your feet','2025','gong'),
  makeSong('g2','Banana Pancakes','Jack Johnson','No plans, just pancakes and peace','2025','gong'),
  makeSong('g3','Bloom','The Paper Kites','Slow mornings, soft light, warm tea','2025','gong'),
  makeSong('g4','Holocene','Bon Iver','Small moments, vast feelings','2025','gong'),
  makeSong('g5','Heartbeats','Jose Gonzalez','One night of magic, one heart of gold','2025','gong'),
  makeSong('g6','Rivers and Roads','Head and the Heart','The journey home starts within','2025','gong'),
  makeSong('g7','Home','Edward Sharpe','Home is wherever I am with you','2026','gong'),
  makeSong('g8','First Day of My Life','Bright Eyes','Every day is a chance to begin again','2025','gong'),
  makeSong('g9','Skinny Love','Bon Iver','Fragile, honest, and somehow beautiful','2026','gong'),
  makeSong('g10','Old Pine','Ben Howard','Rooted deep, reaching high','2025','gong'),
  makeSong('g11','To Build a Home','Cinematic Orchestra','Brick by brick, note by note','2025','gong'),
  makeSong('g12','The Night We Met','Lord Huron','Take me back to the night we met','2026','gong'),
  makeSong('g13','Cherry Wine','Hozier','Sweet and bruised, like life itself','2025','gong'),
  makeSong('g14','Like Real People Do','Hozier','Digging in the earth, finding gold','2025','gong'),
  makeSong('g15','Anchor','Novo Amor','Steady and sure, through every storm','2026','gong'),
  makeSong('g16','State Lines','Novo Amor','Drawing the maps we carry inside','2025','gong'),
  makeSong('g17','Roslyn','Bon Iver and St Vincent','Quiet comfort in shared silence','2025','gong'),
  makeSong('g18','Flume','Bon Iver','Worn-down love, beautiful and raw','2026','gong'),
  makeSong('g19','Georgia','Vance Joy','Warm thoughts for a faraway friend','2025','gong'),
  makeSong('g20','Mess Is Mine','Vance Joy','Owning the beautiful chaos of life','2025','gong'),
  makeSong('g21','Shelter','Ray LaMontagne','Come in, rest here, you are safe','2026','gong'),
  makeSong('g22','Jolene','Ray LaMontagne','A weathered voice, a timeless plea','2025','gong'),
  makeSong('g23','Carry You','Novo Amor','Bearing weight with grace and love','2025','gong'),
  makeSong('g24','The Stable Song','Gregory Alan Isakov','Finding peace in the simple things','2026','gong'),
  makeSong('g25','Big Black Car','Gregory Alan Isakov','A quiet ride through memory lane','2025','gong'),
  makeSong('g26','Amsterdam','Gregory Alan Isakov','Longing for a home you have not seen','2025','gong'),
  makeSong('g27','Naked as We Came','Iron and Wine','Simple truths, bare and beautiful','2026','gong'),
  makeSong('g28','Flightless Bird','Iron and Wine','Grounded but dreaming of flight','2025','gong'),
  makeSong('g29','The Trapeze Swinger','Iron and Wine','Swinging through memories, gentle and slow','2025','gong'),
  makeSong('g30','Heart of Gold','Neil Young','Searching for the gold in all of us','2025','gong'),
  makeSong('g31','Harvest Moon','Neil Young','Dancing under the autumn moonlight','2026','gong'),
  makeSong('g32','Old Man','Neil Young','Time passes, but the earth stays steady','2025','gong'),
  makeSong('g33','Into the Mystic','Van Morrison','Let the fog and rhythm carry you home','2025','gong'),
  makeSong('g34','Wild World','Cat Stevens','A gentle warning wrapped in a warm melody','2025','gong'),
  makeSong('g35','Father and Son','Cat Stevens','The earth turns, generations change','2026','gong'),
  makeSong('g36','The Boxer','Simon and Garfunkel','Battered but standing, still swinging','2025','gong'),
  makeSong('g37','Bridge Over Troubled Water','Simon and Garfunkel','Like a bridge over troubled water','2025','gong'),
  makeSong('g38','Graceland','Paul Simon','The earth holds stories from every shore','2026','gong'),
  makeSong('g39','Diamonds on the Soles','Paul Simon','Rich in spirit, barefoot in soul','2025','gong'),
  makeSong('g40','Both Sides Now','Joni Mitchell','Looking at clouds from both sides now','2025','gong'),
];

const SHANG_SONGS: Song[] = [
  makeSong('s1','Someone Like You','Adele','A voice that could cut glass and heal hearts','2025','shang'),
  makeSong('s2','Rolling in the Deep','Adele','Crystalline fury, polished to perfection','2026','shang'),
  makeSong('s3','Bohemian Rhapsody','Queen','Is this the real life or just fantasy','2025','shang'),
  makeSong('s4','Hallelujah','Jeff Buckley','A broken hallelujah, still ringing true','2025','shang'),
  makeSong('s5','Chandelier','Sia','Swinging from the chandelier of pure emotion','2025','shang'),
  makeSong('s6','Dog Days Are Over','Florence and The Machine','Happiness hit her like a train on a track','2025','shang'),
  makeSong('s7','Shake It Out','Florence and The Machine','Shake the demons out and rise','2026','shang'),
  makeSong('s8','Skyfall','Adele','Let the sky fall, we will stand tall','2025','shang'),
  makeSong('s9','Lovely','Billie Eilish and Khalid','Heartfelt and haunting, all alone','2026','shang'),
  makeSong('s10','Ocean Eyes','Billie Eilish','No fair, you really know how to make me cry','2025','shang'),
  makeSong('s11','Video Games','Lana Del Rey','Heaven is a place on earth with you','2025','shang'),
  makeSong('s12','Summertime Sadness','Lana Del Rey','Kiss me hard before you go','2026','shang'),
  makeSong('s13','Creep','Radiohead','What the hell am I doing here','2025','shang'),
  makeSong('s14','Yellow','Coldplay','Look at the stars, look how they shine for you','2025','shang'),
  makeSong('s15','Fix You','Coldplay','Lights will guide you home','2025','shang'),
  makeSong('s16','The Scientist','Coldplay','Nobody said it was easy','2026','shang'),
  makeSong('s17','Sign of the Times','Harry Styles','Stop your crying, it is a sign of the times','2025','shang'),
  makeSong('s18','Falling','Harry Styles','What if I am someone I do not want around','2025','shang'),
  makeSong('s19','drivers license','Olivia Rodrigo','I got my license, just like we talked about','2026','shang'),
  makeSong('s20','good 4 u','Olivia Rodrigo','Good for you, you look happy and healthy','2025','shang'),
  makeSong('s21','Sober','Demi Lovato','A raw, unflinching confession','2025','shang'),
  makeSong('s22','Rise Up','Andra Day','Rise up like the day began','2026','shang'),
  makeSong('s23','Wrecking Ball','Miley Cyrus','I came in like a wrecking ball','2025','shang'),
  makeSong('s24','Stay','Rihanna','Not really sure how to feel about it','2025','shang'),
  makeSong('s25','Diamonds','Rihanna','Shine bright like a diamond','2026','shang'),
  makeSong('s26','Titanium','David Guetta and Sia','You shoot me down but I wont fall','2025','shang'),
  makeSong('s27','Somebody That I Used to Know','Gotye','Now you are just somebody that I used to know','2025','shang'),
  makeSong('s28','Take Me to Church','Hozier','Amen to the power of a voice that shakes walls','2025','shang'),
  makeSong('s29','Breathe Me','Sia','Help, I have done it again','2026','shang'),
  makeSong('s30','Elastic Heart','Sia','I have got an elastic heart','2025','shang'),
  makeSong('s31','California Dreamin','The Mamas and Papas','All the leaves are brown and the sky is grey','2025','shang'),
  makeSong('s32','Sound of Silence','Simon and Garfunkel','Hello darkness, my old friend','2025','shang'),
  makeSong('s33','Hotel California','Eagles','You can check out any time you like','2026','shang'),
  makeSong('s34','Bohemian Like You','The Dandy Warhols','Clear guitars, crisp hooks, pure vitality','2025','shang'),
  makeSong('s35','Mr. Brightside','The Killers','Coming out of my cage and doing just fine','2025','shang'),
  makeSong('s36','Use Somebody','Kings of Leon','Someone like you and all you know','2026','shang'),
  makeSong('s37','Linger','The Cranberries','Do you have to let it linger','2025','shang'),
  makeSong('s38','Dreams','The Cranberries','Oh my life is changing every day','2025','shang'),
  makeSong('s39','Zombie','The Cranberries','In your head, in your head','2025','shang'),
  makeSong('s40','Nothing Compares 2 U','Sinead O Connor','Nothing compares to you','2026','shang'),
];

const JUE_SONGS: Song[] = [
  makeSong('j1','Blinding Lights','The Weeknd','Smooth as neon rain on wet asphalt','2025','jue'),
  makeSong('j2','Save Your Tears','The Weeknd','I saw you dancing in a crowded room','2026','jue'),
  makeSong('j3','Watermelon Sugar','Harry Styles','Tastes like summer and freedom','2025','jue'),
  makeSong('j4','Levitating','Dua Lipa','You can fly away with me tonight','2025','jue'),
  makeSong('j5','Kiss Me More','Doja Cat and SZA','Soft lips, smooth beats, zero worries','2026','jue'),
  makeSong('j6','Say So','Doja Cat','You aint even gotta say so','2025','jue'),
  makeSong('j7','Good Days','SZA','Still wanna try, still believe in good days','2025','jue'),
  makeSong('j8','Snooze','SZA','How can I snooze and miss the moment','2026','jue'),
  makeSong('j9','Get Lucky','Daft Punk and Pharrell','We are up all night to get lucky','2025','jue'),
  makeSong('j10','Lose Yourself to Dance','Daft Punk','Lose yourself to the rhythm and flow','2025','jue'),
  makeSong('j11','Redbone','Childish Gambino','Stay woke, grooves creeping','2026','jue'),
  makeSong('j12','Feels Like Summer','Childish Gambino','Every day feels like summer lately','2025','jue'),
  makeSong('j13','Thinkin Bout You','Frank Ocean','A tornado flew around my room before you came','2025','jue'),
  makeSong('j14','Pink and White','Frank Ocean','That is the way everyday goes','2026','jue'),
  makeSong('j15','Ordinary People','John Legend','We are just ordinary people','2025','jue'),
  makeSong('j16','All of Me','John Legend','All of me loves all of you','2025','jue'),
  makeSong('j17','Untitled How Does It Feel','DAngelo','How does it feel, smooth as silk','2026','jue'),
  makeSong('j18','Brown Sugar','DAngelo','Sweet as the first sip of morning coffee','2025','jue'),
  makeSong('j19','Come Away with Me','Norah Jones','Whisper-soft invitation to wander','2025','jue'),
  makeSong('j20','Dont Know Why','Norah Jones','I dont know why I didnt come','2026','jue'),
  makeSong('j21','Gravity','John Mayer','Gravity is working against me','2025','jue'),
  makeSong('j22','Slow Dancing in a Burning Room','John Mayer','Going down slow, just the two of us','2025','jue'),
  makeSong('j23','No One','Alicia Keys','No one can get in the way of what I feel','2026','jue'),
  makeSong('j24','If I Aint Got You','Alicia Keys','Some people want it all','2025','jue'),
  makeSong('j25','Adorn','Miguel','These lips cant wait to taste your skin','2025','jue'),
  makeSong('j26','Sure Thing','Miguel','You could be a sure thing','2026','jue'),
  makeSong('j27','Best Part','Daniel Caesar and HER','You are the best part of my day','2025','jue'),
  makeSong('j28','Get You','Daniel Caesar','Through drought and famine, natural disasters','2025','jue'),
  makeSong('j29','Location','Khalid','Send me your location, come through','2026','jue'),
  makeSong('j30','Talk','Khalid','Can we just talk, can we just talk','2025','jue'),
  makeSong('j31','Them Changes','Thundercat','Nobody move, there is blood on the floor','2025','jue'),
  makeSong('j32','Dragonball Durag','Thundercat','I may be covered in cat hair','2026','jue'),
  makeSong('j33','VIRGOS GROOVE','Beyonce','Ride it like a rodeo','2025','jue'),
  makeSong('j34','CUFF IT','Beyonce','I feel like falling in love','2025','jue'),
  makeSong('j35','Slide','Calvin Harris and Frank Ocean','I might empty my bank account','2026','jue'),
  makeSong('j36','Electric Feel','MGMT','Shock me like an electric eel','2025','jue'),
  makeSong('j37','1901','Phoenix','Fold it fold it fold it fold it','2025','jue'),
  makeSong('j38','Feel It Still','Portugal The Man','Ooh woo, a rebel just for kicks','2025','jue'),
  makeSong('j39','Sucker','Jonas Brothers','A sucker for you','2026','jue'),
  makeSong('j40','What Makes You Beautiful','One Direction','Baby you light up my world like nobody else','2025','jue'),
];

const ZHI_SONGS: Song[] = [
  makeSong('z1','Happy','Pharrell Williams','Clap along if you feel like a room without a roof','2025','zhi'),
  makeSong('z2','Uptown Funk','Mark Ronson and Bruno Mars','Dont believe me just watch','2025','zhi'),
  makeSong('z3','Shut Up and Dance','WALK THE MOON','She said shut up and dance with me','2026','zhi'),
  makeSong('z4','Cant Stop the Feeling','Justin Timberlake','Got that sunshine in my pocket','2025','zhi'),
  makeSong('z5','Shake It Off','Taylor Swift','Haters gonna hate hate hate','2025','zhi'),
  makeSong('z6','ME','Taylor Swift','You cant spell awesome without me','2025','zhi'),
  makeSong('z7','I Gotta Feeling','Black Eyed Peas','Tonight is gonna be a good night','2026','zhi'),
  makeSong('z8','Firework','Katy Perry','Baby you are a firework','2025','zhi'),
  makeSong('z9','Roar','Katy Perry','I got the eye of the tiger','2025','zhi'),
  makeSong('z10','Dont Stop Me Now','Queen','Having such a good time','2025','zhi'),
  makeSong('z11','Wake Me Up Before You Go','Wham','Wake me up before you go go','2026','zhi'),
  makeSong('z12','Walking on Sunshine','Katrina and The Waves','Walking on sunshine, whoa oh','2025','zhi'),
  makeSong('z13','Dancing Queen','ABBA','You can dance, you can jive','2025','zhi'),
  makeSong('z14','Mamma Mia','ABBA','Here I go again, my my','2026','zhi'),
  makeSong('z15','I Wanna Dance with Somebody','Whitney Houston','I wanna dance with somebody','2025','zhi'),
  makeSong('z16','September','Earth Wind and Fire','Do you remember the 21st night of September','2025','zhi'),
  makeSong('z17','Treasure','Bruno Mars','Give me your attention baby','2025','zhi'),
  makeSong('z18','24K Magic','Bruno Mars','Players, put your pinky rings up','2026','zhi'),
  makeSong('z19','Dance Monkey','Tones and I','Dance for me dance for me','2025','zhi'),
  makeSong('z20','Shape of You','Ed Sheeran','The club is not the best place to find a lover','2025','zhi'),
  makeSong('z21','Moves Like Jagger','Maroon 5','Take me by the tongue','2026','zhi'),
  makeSong('z22','Sugar','Maroon 5','Your sugar, yes please','2025','zhi'),
  makeSong('z23','Hey Ya','OutKast','Shake it like a Polaroid picture','2025','zhi'),
  makeSong('z24','Tik Tok','Kesha','Wake up in the morning feeling like P Diddy','2025','zhi'),
  makeSong('z25','California Gurls','Katy Perry','Daisy dukes bikinis on top','2026','zhi'),
  makeSong('z26','Party in the USA','Miley Cyrus','Hopped off the plane at LAX','2025','zhi'),
  makeSong('z27','Call Me Maybe','Carly Rae Jepsen','Hey I just met you and this is crazy','2025','zhi'),
  makeSong('z28','Good Time','Owl City and Carly Rae Jepsen','It is always a good time','2025','zhi'),
  makeSong('z29','Price Tag','Jessie J','It is not about the money','2026','zhi'),
  makeSong('z30','Domino','Jessie J','Rock my world into the sunlight','2025','zhi'),
  makeSong('z31','We Found Love','Rihanna','We found love in a hopeless place','2025','zhi'),
  makeSong('z32','Only Girl','Rihanna','Make me feel like the only girl','2026','zhi'),
  makeSong('z33','Cheap Thrills','Sia','I dont need dollar bills to have fun tonight','2025','zhi'),
  makeSong('z34','Raise Your Glass','Pink','Party crasher, penny snatcher','2025','zhi'),
  makeSong('z35','Get the Party Started','Pink','Get this party started','2025','zhi'),
  makeSong('z36','Starships','Nicki Minaj','Starships were meant to fly','2026','zhi'),
  makeSong('z37','Super Bass','Nicki Minaj','Boom badoom boom boom badoom boom bass','2025','zhi'),
  makeSong('z38','About Damn Time','Lizzo','It is about damn time','2025','zhi'),
  makeSong('z39','Truth Hurts','Lizzo','I just took a DNA test, turns out','2026','zhi'),
  makeSong('z40','Juice','Lizzo','Blame it on my juice, blame it on my pride','2025','zhi'),
];

const YU_SONGS: Song[] = [
  makeSong('y1','Weightless','Marconi Union','Scientifically proven to reduce anxiety','2025','yu'),
  makeSong('y2','Stairway to Heaven','Led Zeppelin','And she is buying a stairway to heaven','2025','yu'),
  makeSong('y3','Wish You Were Here','Pink Floyd','Two lost souls swimming in a fishbowl','2025','yu'),
  makeSong('y4','Comfortably Numb','Pink Floyd','Hello, is there anybody in there','2026','yu'),
  makeSong('y5','Street Spirit','Radiohead','Rows of houses all bearing down on me','2025','yu'),
  makeSong('y6','Karma Police','Radiohead','For a minute there I lost myself','2025','yu'),
  makeSong('y7','Mad World','Gary Jules','All around me are familiar faces','2025','yu'),
  makeSong('y8','Breathe','Telepopmusik','Another day, just believe','2026','yu'),
  makeSong('y9','Porcelain','Moby','Hey hey hey, woman, it is alright','2025','yu'),
  makeSong('y10','Teardrop','Massive Attack','Love is a doing word','2025','yu'),
  makeSong('y11','Angel','Massive Attack','You are my angel, come from way above','2026','yu'),
  makeSong('y12','Glory Box','Portishead','Give me a reason to love you','2025','yu'),
  makeSong('y13','Roads','Portishead','From this moment, how can it feel this wrong','2025','yu'),
  makeSong('y14','Transatlanticism','Death Cab for Cutie','I need you so much closer','2025','yu'),
  makeSong('y15','I Will Follow You into the Dark','Death Cab for Cutie','Love of mine, someday you will die','2026','yu'),
  makeSong('y16','Hide and Seek','Imogen Heap','Where are we, what the hell is going on','2025','yu'),
  makeSong('y17','Running Up That Hill','Kate Bush','If I only could make a deal with God','2025','yu'),
  makeSong('y18','The Rip','Portishead','As she walks in the room, scent of wildflowers','2026','yu'),
  makeSong('y19','Oblivion','Grimes','Another walk about after dark','2025','yu'),
  makeSong('y20','Genghis Khan','Miike Snow','I get a little bit Genghis Khan','2025','yu'),
  makeSong('y21','White Winter Hymnal','Fleet Foxes','I was following the pack','2025','yu'),
  makeSong('y22','Helplessness Blues','Fleet Foxes','I was raised up believing','2026','yu'),
  makeSong('y23','Holocene','Bon Iver','And at once I knew I was not magnificent','2025','yu'),
  makeSong('y24','Blood Bank','Bon Iver','That secret that we know','2025','yu'),
  makeSong('y25','Midnight City','M83','Waiting in a car, waiting for a ride in the dark','2026','yu'),
  makeSong('y26','Wait','M83','Set your dreams where nobody hides','2025','yu'),
  makeSong('y27','Young and Beautiful','Lana Del Rey','Will you still love me when no longer young','2025','yu'),
  makeSong('y28','Born to Die','Lana Del Rey','Feet dont fail me now','2026','yu'),
  makeSong('y29','Fade Into You','Mazzy Star','I want to hold the hand inside you','2025','yu'),
  makeSong('y30','Into Dust','Mazzy Star','Still falling, breathless and worn','2025','yu'),
  makeSong('y31','Retrograde','James Blake','You are on your own in a world you have grown','2025','yu'),
  makeSong('y32','Limit to Your Love','James Blake','There is a limit to your love','2026','yu'),
  makeSong('y33','River','Leon Bridges','Take me to your river, I wanna go','2025','yu'),
  makeSong('y34','Garden','SZA','Lie in my garden and rest','2025','yu'),
  makeSong('y35','Cherry','Chromatics','Cherry cherry sweet sweet cherry','2026','yu'),
  makeSong('y36','Shadow','Chromatics','Just a shadow in the dark','2025','yu'),
  makeSong('y37','A Real Hero','College and Electric Youth','A real human being and a real hero','2025','yu'),
  makeSong('y38','Nightcall','Kavinsky','A night call to tell you how I feel','2025','yu'),
  makeSong('y39','Resonance','Home','Pure nostalgia distilled into sound waves','2026','yu'),
  makeSong('y40','Champagne Coast','Blood Orange','Come to my bedroom, champagne coast','2025','yu'),
];

export const songsByTone: Record<string, Song[]> = {
  gong: GONG_SONGS,
  shang: SHANG_SONGS,
  jue: JUE_SONGS,
  zhi: ZHI_SONGS,
  yu: YU_SONGS,
};

function pickRandom<T>(arr: T[], count: number): T[] {
  if (arr.length <= count) return arr.slice();
  const shuffled = arr.slice().sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function pickFreshFirst<T extends { id: string }>(pool: T[], count: number, excludeIds: string[]): T[] {
  if (!excludeIds.length) return pickRandom(pool, count);
  const fresh = pool.filter((s) => !excludeIds.includes(s.id));
  const stale = pool.filter((s) => excludeIds.includes(s.id));
  let picked = pickRandom(fresh, count);
  if (picked.length < count) picked = picked.concat(pickRandom(stale, count - picked.length));
  return picked;
}

export function getRecommendedSongs(
  constitutionId: string,
  count: number = 6,
  currentHour?: number,
  excludeIds?: string[]
): Song[] {
  const pool = songsByTone[constitutionId] || songsByTone.gong;
  if (currentHour === undefined || currentHour === null) {
    const result = pickFreshFirst(pool, count, excludeIds || []);
    result.forEach((s) => (s.reason = 'body'));
    return result;
  }

  const shichen = getCurrentShichen(currentHour);
  const bodyCount = Math.max(Math.round(count * 0.7), 1);
  const timeCount = count - bodyCount;

  const bodyPicks = pickFreshFirst(pool, bodyCount, excludeIds || []);
  bodyPicks.forEach((s) => (s.reason = 'body'));

  let timePicks: Song[] = [];
  const shichenTone = shichen.tone;
  if (shichenTone && shichenTone !== constitutionId) {
    // Different tone from constitution — use shichen tone directly
    const timePool = songsByTone[shichenTone] || pool;
    timePicks = pickFreshFirst(timePool, timeCount, [
      ...(excludeIds || []),
      ...bodyPicks.map((s) => s.id),
    ]);
  } else {
    // Same tone as constitution — pick from ALL other tones for real variety
    const otherTones = Object.keys(songsByTone).filter((t) => t !== constitutionId);
    const allOtherSongs = otherTones.flatMap((t) => songsByTone[t] || []);
    timePicks = pickFreshFirst(
      allOtherSongs,
      timeCount,
      [...(excludeIds || []), ...bodyPicks.map((s) => s.id)]
    );
  }
  timePicks.forEach((s) => {
    s.reason = 'time';
    s.shichenInfo = shichen.meridian + ' · ' + (shichenTone || '');
  });

  return bodyPicks.concat(timePicks);
}
