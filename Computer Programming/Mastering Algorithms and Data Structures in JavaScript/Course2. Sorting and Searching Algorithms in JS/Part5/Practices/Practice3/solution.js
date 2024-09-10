// function merge(left, right) {
//     let resultArray = [], leftIndex = 0, rightIndex = 0;

//     // Sorting and merging process
//     while(leftIndex < left.length && rightIndex < right.length) {
//         if(left[leftIndex] < right[rightIndex]) {
//             // TODO: push element to the resultArray
//             leftIndex++;
//         } else {
//             resultArray.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }

//     // TODO: append leftover elements from leftPart and rightPart to the resulting array and return it
// }

// function simpleMergeSort(cards) {
//     if (cards.length <= 1) return cards;
//     const middle = Math.floor(cards.length / 2);
//     const leftHalf = cards.slice(0, middle);
//     const rightHalf = cards.slice(middle);

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
            // TODO: push element to the resultArray
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // TODO: append leftover elements from leftPart and rightPart to the resulting array and return it
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

function simpleMergeSort(cards) {
    if (cards.length <= 1) return cards;
    const middle = Math.floor(cards.length / 2);
    const leftHalf = cards.slice(0, middle);
    const rightHalf = cards.slice(middle);

    return merge(simpleMergeSort(leftHalf), simpleMergeSort(rightHalf));
}

// A deck with some cards mixed up
const mixedDeck = [3, 2, 7, 5, 4, 9, 6, 1, 8];
console.log(simpleMergeSort(mixedDeck));