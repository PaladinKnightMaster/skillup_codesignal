# Advanced Techniques with Sorting Algorithms: K-th Largest Element and Inversion Count

## Introduction
Ready for an adventure in **sorting algorithms**? We will solve two fun problems: **"Find the K-th Ordinal Number in a List"** and **"Count the Number of Flips in a List"**. These tasks portray situations where we need clever system design. Let's employ Quick Sort and Merge Sort to find efficient solutions. Buckle up!

## Problem 1: Finding K-th Number in an Array
Picture an array of numbers and a number `k`. Your mission is to discover the `k`-th smallest number in that array. `k` starts from `1`, so when `k = 1`, we seek the smallest number; when `k = 2`, we want the second smallest, and onwards.

Here is the mathematical markdown version of the content in your screenshot:

## Problem 1: Simple Solutions

The first solution might involve scanning and shrinking the array by removing the smallest number until you reach the *k*-th smallest. But this method, while straightforward, has a time complexity of \( O(n^2) \) due to continuous array rewriting.

An efficient plan might be to sort the array and then directly select the *k*-th number:

```javascript
inputArray.sort((a, b) => a - b);
return inputArray[k - 1];
```

This method has a better time complexity - \( O(n \log n) \). But can we do even better? Quick Sort thinks so.

## Problem 1: Quick Sort to the Rescue
Quick Sort can provide an optimal solution. We’ll divide the array into two parts using a pivot: the left side contains numbers less than the pivot, while the right side has all greater numbers.

If the pivot's position equals `k`, that's our answer! If not, we repeat the process on the necessary partition.

## Problem 1: Building the Solution – Partition
It's coding time! Let’s make a function for partitioning in JavaScript.

```JavaScript
function partition(arr, low, high) {
  let pivot = arr[low];
  let i = low;

  for (let j = low + 1; j <= high; j++) {
    if(arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i], arr[low]] = [arr[low], arr[i]];
  return i;
}
```

## Problem 1: Building the Solution – Main Logic
Now we use our partition function in the main logic. If the pivot's position equals k, return the pivot. Otherwise, check the appropriate partition!

```JavaScript
function findKthSmallest(numbers, k) {
  if (!numbers || numbers.length < k) return Number.MIN_SAFE_INTEGER;
  return kthSmallest(numbers, 0, numbers.length - 1, k);
}

function kthSmallest(arr, start, end, k) {
  if (k > 0 && k <= end - start + 1) {
    let pos = partition(arr, start, end);
    if (pos - start === k - 1) {
      return arr[pos];
    }
    if (pos - start > k - 1) {
      return kthSmallest(arr, start, pos - 1, k);
    }
    return kthSmallest(arr, pos + 1, end, k - pos + start - 1);
  }
  return Number.MAX_SAFE_INTEGER;
}

console.log(findKthSmallest([1, 7, 2, 4, 2, 1, 6], 5));  // Prints 4
```

`Number.MIN_SAFE_INTEGER` is returned by `findKthSmallest` if the input array `numbers` is empty or has fewer elements than `k`. This could represent a case where the `k` smallest value doesn't exist.

`Number.MAX_SAFE_INTEGER` is used in the `kthSmallest` function if `k` is either less than 1 or greater than the length of the portion of the array being considered. This could mean that there's an error in the `k` parameter passed, or the array doesn't have enough elements.

These extreme values are used because they are unlikely to be a valid result in any normal situation, making it easy to spot when something has gone wrong. It's a convention to return values which clearly indicate error situations, aiding in debugging and error handling.

## Problem 2: Counting Flips in an Array
Problem two presents an array; your challenge is counting the flips or inversions. An inversion is a pair of numbers with the higher one coming first.

For instance, in `numbers = [4, 2, 1, 3]`, there are four inversions: (4, 2), (4, 1), (4, 3), and (2, 1).

## Problem 2: Using Merge Sort

Merge Sort can efficiently solve this. It sorts an array in \( O(n \log n) \) by splitting it, sorting the halves, and merging them. During this process, we can count the inversions.

When merging, a smaller number on the right than a number on the left reveals an inversion. And it's not just one: there are as many inversions as the remaining numbers on the left.

## Problem 2: Building the Solution – Helper Function
We begin with a mergeAndCount helper function in JavaScript:

```JavaScript
function mergeAndCount(arr1, arr2) {
  let i = 0;
  let j = 0;
  let merged = [];
  let inversions = 0;

  while (i < arr1.length || j < arr2.length) {
    if (i === arr1.length) {
      merged.push(arr2[j]);
      j++;
    } else if (j === arr2.length) {
      merged.push(arr1[i]);
      i++;
    } else if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
      inversions += (arr1.length - i);
    }
  }
  return [merged, inversions];
}
```

## Problem 2: Building the Solution – Main Function
Finally, we develop `countInversions`, aided by `mergeAndCount`:

```JavaScript
function countInversions(arr) {
  if (arr.length === 1) return [arr, 0];

  const middle = Math.floor(arr.length / 2);
  const [left, leftInversions] = countInversions(arr.slice(0, middle));
  const [right, rightInversions] = countInversions(arr.slice(middle));
  const [merged, mergeInversions] = mergeAndCount(left, right);

  return [merged, leftInversions + rightInversions + mergeInversions];
}

console.log(countInversions([4, 2, 1, 3])); // Prints [ [ 1, 2, 3, 4 ], 4 ]
```

Counting inversions at each merge and summing creates an efficient way to count total inversions.

## Conclusion
We've dived into Quick Sort and Merge Sort, applying them to two exciting tasks, starting from simple solutions to more efficient ones and building them in JavaScript. Now it's your turn!
