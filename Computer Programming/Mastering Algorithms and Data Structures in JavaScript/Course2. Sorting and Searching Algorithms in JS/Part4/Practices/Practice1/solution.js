function partition(arr, low, high) {
  let pivot = arr[high];  // The pivot is the last element
  let i = low - 1;
  for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {   // If the current element is smaller than the pivot
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap the current element with the element at index i
      }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Position the pivot in the correct position in the array
  return i + 1;
}


toys = [1, 2, 1, 5, 4, 6, 3, 4]
console.log("Pivot Index: ", partition(toys, 0, toys.length - 1))
console.log("Partitioned array: ", toys);