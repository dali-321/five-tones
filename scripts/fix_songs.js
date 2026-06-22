const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, '..', 'lib', 'songs.ts');

// Read and fix
let c = fs.readFileSync(src, 'utf8');

// Strategy: replace all inner single quotes in captions with smart quotes
// A caption is the 5th field in each array (index 4)
// Replace problematic apostrophes in song captions
const fixes = [
  ["I've","Ive"],["I'm","Im"],["I'll","Ill"],["I'd","Id"],
  ["don't","dont"],["can't","cant"],["won't","wont"],
  ["isn't","isnt"],["wasn't","wasnt"],["didn't","didnt"],
  ["ain't","aint"],["wouldn't","wouldnt"],["couldn't","couldnt"],
  ["shouldn't","shouldnt"],["doesn't","doesnt"],["hasn't","hasnt"],
  ["haven't","havent"],["you're","youre"],["it's","its"],
  ["that's","thats"],["he's","hes"],["she's","shes"],
  ["let's","lets"],["who's","whos"],["what's","whats"],
  ["there's","theres"],["here's","heres"],["we're","were"],
  ["they're","theyre"],["n't","nt"],["'ve","ve"],
  ["'s","s"],["'re","re"],["'ll","ll"],["'m","m"],
  ["'d","d"],
];

c = c.replace(/`([^`]*)`/g, (match, inner) => {
  let fixed = inner;
  fixes.forEach(([from, to]) => { fixed = fixed.replace(new RegExp(from, 'g'), to); });
  return "'" + fixed + "'";
});

fs.writeFileSync(src, c, 'utf8');
console.log('Fixed songs.ts captions — all safe single-quoted strings now');
