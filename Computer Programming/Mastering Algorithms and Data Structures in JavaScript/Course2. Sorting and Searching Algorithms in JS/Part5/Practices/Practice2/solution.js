// function merge(left, right) {
//     let merged = [], i = 0, j = 0;
//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             merged.push(left[i++]);
//         } else {
//             merged.push(right[j++]);
//         }
//     }
//     return merged.concat(left.slice(i));
// }

// function mergeSort(cards) {
//     if (cards.length <= 1) return cards;
//     const middle = Math.floor(cards.length / 2);
//     const leftHalf = cards.slice(0, middle);
//     const rightHalf = cards.slice(middle);
//     return merge(mergeSort(leftHalf), mergeSort(rightHalf));
// }

// const miniDeck = [5, 2, 10, 3];
// let sortedDeck = mergeSort(miniDeck);
// console.log(sortedDeck);

function merge(left, right) {
    let merged = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            merged.push(left[i++]);
        } else {
            merged.push(right[j++]);
        }
    }
    // Concatenate remaining elements from both left and right
    return merged.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(cards) {
    if (cards.length <= 1) return cards;
    const middle = Math.floor(cards.length / 2);
    const leftHalf = cards.slice(0, middle);
    const rightHalf = cards.slice(middle);
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

const miniDeck = [5, 2, 10, 3];
let sortedDeck = mergeSort(miniDeck);
console.log(sortedDeck);
