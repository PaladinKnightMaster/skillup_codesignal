// function sortCharacters(input) {
//   return input.split('').sort().join('');
// }

// function findAnagrams(array1, array2) {
//   // implement this
// }

// let array1 = ["cat", "dog", "tac", "god", "act"];
// let array2 = ["tca", "ogd", "atc", "taco"];
// let result = findAnagrams(array1, array2);
// console.log(result);   // output: 9

function sortCharacters(input) {
  return input.split('').sort().join('');
}

function findAnagrams(array1, array2) {
  // implement this
  return array2
  .filter(word => new Set(array1.map(sortCharacters)).has(sortCharacters(word)))
  .reduce((acc, word) => acc + word.length, 0);
}

let array1 = ["cat", "dog", "tac", "god", "act"];
let array2 = ["tca", "ogd", "atc", "taco"];
let result = findAnagrams(array1, array2);
console.log(result);   // output: 9