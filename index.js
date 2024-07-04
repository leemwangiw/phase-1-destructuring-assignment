// Animal sounds
const animalSounds = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
};

// Destructuring animal sounds
const { moo, neigh, baa, oink, cluck } = animalSounds;

// Traditional animal names
const traditionalNames = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken"
};

// Destructuring traditional names
const { bessie, dolly, babe, little } = traditionalNames;

// Traditional animal colors
const traditionalColors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
};

// Destructuring traditional colors
const { blackAndWhite, black, pink } = traditionalColors;

// Rainbow colors array
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// Destructuring rainbow colors by name
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// Destructuring rainbow colors by initials
const [r, o, y, g, b, , v] = rainbowColors;

// Destructuring indigo
const [, , , , , indg] = rainbowColors;

// Muppet object
const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
  songs: ["Rainbow Connection", "Moving Right Along", "Bein' Green", "I Hope That Something Better Comes Along"],
  nested: {
    job: "Host of The Muppet Show",
    partner: "Miss Piggy"
  }
};

// Destructuring muppet object
const { muppetName, color, song, job, partner, songs, nested } = muppet;
const [song1, song2, song3, song4] = songs;
const { job: nestedJob, partner: nestedPartner } = nested;
