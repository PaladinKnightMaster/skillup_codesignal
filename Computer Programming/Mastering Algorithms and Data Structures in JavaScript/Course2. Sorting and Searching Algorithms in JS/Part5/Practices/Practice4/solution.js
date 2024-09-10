// function merge(left, right) {
//     let resultArray = [], leftIndex = 0, rightIndex = 0;

//     // Sorting and merging process
//     while(leftIndex < left.length && rightIndex < right.length) {
//         if(left[leftIndex] < right[rightIndex]) {
//             resultArray.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             resultArray.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }

//     // Concatenating the remaining elements
//     return resultArray
//         .concat(left.slice(leftIndex))
//         .concat(right.slice(rightIndex));
// }

// function simpleMergeSort(cards) {
//     if (cards.length <= 1) return cards;
//     // TODO: find mid element
//     // TODO: call mergeSort recursively for the left part
//     // TODO: call margeSort recursively for the right part

//     return merge(simpleMergeSort(leftHalf), simpleMergeSort(rightHalf));
// }

// // A deck with some cards mixed up
// const mixedDeck = [3, 2, 7, 5, 4, 9, 6, 1, 8];
// console.log(simpleMergeSort(mixedDeck));

function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    // Sorting and merging process
    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenating the remaining elements
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

function simpleMergeSort(cards) {
    if (cards.length <= 1) return cards;
    // TODO: find mid element
    // TODO: call mergeSort recursively for the left part
    // TODO: call margeSort recursively for the right part

    const middle = Math.floor(cards.length / 2);
    const leftHalf = cards.slice(0, middle);
    const rightHalf = cards.slice(middle);

    return merge(simpleMergeSort(leftHalf), simpleMergeSort(rightHalf));
}

// A deck with some cards mixed up
const mixedDeck = [3, 2, 7, 5, 4, 9, 6, 1, 8];
console.log(simpleMergeSort(mixedDeck));