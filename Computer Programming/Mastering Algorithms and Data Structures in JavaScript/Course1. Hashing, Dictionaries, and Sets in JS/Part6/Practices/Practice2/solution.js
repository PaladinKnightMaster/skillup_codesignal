// function createWordIndex(sentence) {
//     let index = new Map();

//     let words = sentence.split(' ');
//     // implement this
//     return index;
// }

// let sentence1 = "Hello Hello world world world";
// let index1 = createWordIndex(sentence1);
// console.log(index1); //Should print: { hello: 2, world: 3 }

// let sentence2 = "";
// let index2 = createWordIndex(sentence2);
// console.log(index2); //Should print {} as the sentence is empty.

// let sentence3 = "Quick Quick brown fox jumps over the lazy dog";
// let index3 = createWordIndex(sentence3);
// console.log(index3); //Should print: { quick: 2, brown: 1, fox: 1, jumps: 1, over: 1, the: 1, lazy: 1, dog: 1 }

function createWordIndex(sentence) {
    let index = new Map();

    // Split the sentence into words and convert them to lowercase
    let words = sentence.toLowerCase().split(' ');

    // Iterate over each word to build the map
    for (let word of words) {
        if (word) { // Ignore empty strings which might appear due to consecutive spaces
            index.set(word, (index.get(word) || 0) + 1);
        }
    }

    return index;
}

let sentence1 = "Hello Hello world world world";
let index1 = createWordIndex(sentence1);
console.log(index1); // Should print: Map { 'hello' => 2, 'world' => 3 }

let sentence2 = "";
let index2 = createWordIndex(sentence2);
console.log(index2); // Should print: Map {}

let sentence3 = "Quick Quick brown fox jumps over the lazy dog";
let index3 = createWordIndex(sentence3);
console.log(index3); // Should print: Map { 'quick' => 2, 'brown' => 1, 'fox' => 1, 'jumps' => 1, 'over' => 1, 'the' => 1, 'lazy' => 1, 'dog' => 1 }


// Optimized Version
```
const createWordIndex = (sentence) =>
    sentence.toLowerCase().split(' ').filter(Boolean).reduce(
        (index, word) => index.set(word, (index.get(word) || 0) + 1),
        new Map()
    );

let sentence1 = "Hello Hello world world world";
let index1 = createWordIndex(sentence1);
console.log(index1); // Should print: Map { 'hello' => 2, 'world' => 3 }

let sentence2 = "";
let index2 = createWordIndex(sentence2);
console.log(index2); // Should print: Map {}

let sentence3 = "Quick Quick brown fox jumps over the lazy dog";
let index3 = createWordIndex(sentence3);
console.log(index3); // Should print: Map { 'quick' => 2, 'brown' => 1, 'fox' => 1, 'jumps' => 1, 'over' => 1, 'the' => 1, 'lazy' => 1, 'dog' => 1 }

```