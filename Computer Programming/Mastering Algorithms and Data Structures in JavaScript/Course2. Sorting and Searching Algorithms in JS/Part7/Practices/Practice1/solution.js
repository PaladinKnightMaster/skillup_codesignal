// function partition(arr, low, high) {
//     let pivot = arr[high];
//     let i = low - 1;

//     for (let j = low; j <= high - 1; j++) {
//         if (arr[j] <= pivot) { // condition changed
//             i++;
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//     }

//     [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
//     return i + 1;
// }

// function findKthLargest(numbers, k) {
//     // TODO: implement this
// }

// function kthLargest(arr, start, end, k) {
//     // TODO: implement this
//     return Number.MIN_SAFE_INTEGER;
// }

// console.log(findKthLargest([1, 7, 2, 4, 2, 1, 6], 3));  // Should Print 2

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] >= pivot) { // For finding kth largest, flip comparison
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

function kthLargest(arr, start, end, k) {
    if (start <= end) {
        let pivotIndex = partition(arr, start, end);

        if (pivotIndex === k - 1) {
            return arr[pivotIndex]; // We've found the k-th largest element
        } else if (pivotIndex > k - 1) {
            return kthLargest(arr, start, pivotIndex - 1, k); // Search left side
        } else {
            return kthLargest(arr, pivotIndex + 1, end, k); // Search right side
        }
    }

    return Number.MIN_SAFE_INTEGER; // Error case (shouldn’t really happen)
}

function findKthLargest(numbers, k) {
    return kthLargest(numbers, 0, numbers.length - 1, k);
}

console.log(findKthLargest([1, 7, 2, 4, 2, 1, 6], 3));  // Should Print 4
