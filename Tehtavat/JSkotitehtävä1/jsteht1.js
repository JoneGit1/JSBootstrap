const kysymys = require("readline-sync");

// Kysytään käyttäjän antamaa sanaa
const syote = kysymys.question("Anna sana: ");

// käännetään sana muoto toisin päin muuttujaan kaannetty
let kaannetty = "";
for (let i = syote.length - 1; i >= 0; i--) {
  kaannetty += syote[i];
}

// Verrataan sanoja ja tulostetaan ratkaisu
if (syote === kaannetty) {
  console.log(syote + " on palindromi");
} else {
  console.log(syote + " ei ole palindromi");
}
