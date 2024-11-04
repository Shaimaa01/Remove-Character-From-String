// function removeCharFrom(word, c) {
//   return word
//     .split("")
//     .filter(function (char) {
//       return char !== c.toLowerCase() && char !== c.toUpperCase();
//     })
//     .join("");
// }

function removeCharFrom(word, c) {
  return word
    .split("")
    .filter((char) => char !== c.toLowerCase() && char !== c.toUpperCase())
    .join("");
}

console.log(removeCharFrom("ElddzeroD WebDD ddSchool", "d"));
console.log(removeCharFrom("ElxzeroX Web Sxchool", "x"));
console.log(removeCharFrom("Elzero@ Web@@ @@School", "@"));
