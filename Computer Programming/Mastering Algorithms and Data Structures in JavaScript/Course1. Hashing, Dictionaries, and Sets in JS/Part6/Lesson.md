# Solving Algorithmic Puzzles with JavaScript Maps

## Introduction to the Lesson
Welcome back to our course on algorithmic problem-solving with JavaScript data structures. Today, we sharpen our focus on **Maps**—a powerful data structure you're already familiar with from our prior discussions. This lesson will demonstrate how we can leverage Maps to efficiently solve common algorithmic problems you might face in a coding interview.

## Problem 1: Celebrity Element Identification
Let's put it in a familiar scenario: at a party, it's easy to notice that one person everyone seems to know. This person, akin to the "celebrity" at the party, serves as the analogy for an element in an array that appears more than half the time — our task is to identify this celebrity element amid a crowd of numbers.

## Problem 1: Naive Approach
The naive way to identify this celebrity is to count the occurrences of each number by looping over the array for each element and seeing if it repeats sufficiently to be our star. Computationally, this translates to significant time (quadratic time complexity) for larger arrays — an apparent inefficiency.

## Problem 1: Efficient Approach Explanation
Now, let's be savvy about this. Enter the `Map`: your sophisticated voting tally system. With it, you can keep a running total of each element appearance as you go through the array once rather than reviewing the entire list for each integer.

## Problem 1: Solution Building
Let's dissect the process in our finding celebrity analogy step by step:

```JavaScript
let countMap = new Map();
let majorityThreshold = arr.length / 2;
```
Here, we're preparing our `Map` for counts and establishing the majority threshold — the number of people who know you need to win the celebrity prize.

```JavaScript
for (let num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
```
We're recording every integer's frequency in our `Map`. Each key is a unique element, and the value is the current total of its appearance.

```JavaScript
    if (countMap.get(num) > majorityThreshold) {
        return num;
    }
}
```
Once an element's frequency count exceeds the threshold — signaling a majority — our search concludes, akin to declaring the celebrity value!

```JavaScript
return -1;
```
If the counting ends with no majority victor, we return -1, signifying there is no celebrity at the party.

## Problem 2: Keyword Document Indexer
Now, let's transition to a digital library setting, where you want to find all articles that mention a specific word, say "sustainability." Just like a librarian who quickly locates books on a topic, we need an efficient system to index words to documents in which they appear — a task vital for modern search engines to function effectively.

## Problem 2: Naive Approach
Manually scanning through each document to note every word's occurrence, akin to flipping through each book's pages, is our naive approach. This might be manageable for a small number of short documents, but as the library grows, this approach becomes untenable — not to mention it can lead to errors and duplicates.

## Problem 2: Efficient Approach
Employing `Maps` and `Sets` in JavaScript is akin to using a digital catalog system — swift, error-free, and capable of efficiently handling extensive volumes of data. This approach provides the quick lookup functionality to link words with documents effectively.

We start by declaring our Map, which will act as our digital catalog system:

```JavaScript
function createKeywordIndex(documents) {
  const index = new Map();
```
Then, we iterate over each document, splitting the text into individual words and cataloging them systematically:

```JavaScript
  documents.forEach((doc, docIndex) => {
    let words = doc.split(/\s+/);
    words.forEach(word => {
      // Index the words, assigning each word its document references
      if (index.has(word)) {
        index.get(word).add(docIndex);
      } else {
        // Encountering a new word, we create a new entry in our index
        index.set(word, new Set([docIndex]));
      }
    });
  });

  return index;
}
```
By the end, we've constructed a robust index that can effortlessly tell us where to find any given word, illustrating the usefulness of `Maps` and `Sets` and the importance of effective data structuring.

## Lesson Summary
Through these two algorithmic challenges, we’ve seen firsthand how `Maps` can be strategically used to simplify complex problems and achieve computational efficiency. The `findCelebrityElement` function is an example of optimizing search algorithms, while `createKeywordIndex` demonstrates data structuring for quick access — both are invaluable skills in a programmer's toolkit. As we draw this theoretical session to a close, you should feel more equipped to utilize JavaScript Maps to solve coding problems with confidence and precision.
