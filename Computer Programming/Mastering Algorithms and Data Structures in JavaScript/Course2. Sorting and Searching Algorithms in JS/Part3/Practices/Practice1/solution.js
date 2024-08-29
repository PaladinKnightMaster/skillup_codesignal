// function findPosition(arr, x) {
//         // TODO: find peak using the implemented findPeak function
//         // TODO: search to the left of the peak
//         // TODO: search to the right of the peak
// }

// function findPeak(arr) {
//     var low = 0, high = arr.length - 1;
//     // TODO: implement this
//     return low;
// }

// function binarySearch(arr, x, low, high, ascending) {
//     while (low <= high) {
//         var mid = Math.floor(low + (high - low) / 2);
//         if (arr[mid] == x) {
//             return mid;
//         } else if (ascending) {
//             if (arr[mid] < x) {
//                 low = mid + 1;
//             } else {
//                 high = mid - 1;
//             }
//         } else {
//             // TODO: implement descending binary search logic
//         }
//     }
//     return -1;
// }

// var arr = [-3, -2, 4, 6, 10, 8, 7, 1];
// var x = 7;
// var position = findPosition(arr, x);
// if (position == -1) {
//     console.log("Element not present");
// } else {
//     console.log("Element present at index " + position);
// }

function findPosition(arr, x) {
  // Find peak using the implemented findPeak function
  let peak = findPeak(arr);
  // Search to the left of the peak (ascending part)
  let leftSearch = binarySearch(arr, x, 0, peak, true);
  if (leftSearch != -1) {
    return leftSearch;
  }
  // Search to the right of the peak (descending part)
  return binarySearch(arr, x, peak + 1, arr.length - 1, false);
}

function findPeak(arr) {
  var low = 0, high = arr.length - 1;
  // TODO: implement this
  while (low < high) {
    var mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] < arr[mid + 1]) {
        low = mid + 1;
    } else {
        high = mid;
    }
  }
  return low;
}

function binarySearch(arr, x, low, high, ascending) {
  while (low <= high) {
    var mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] == x) {
      return mid;
    } else if (ascending) {
      if (arr[mid] < x) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      // Implement descending binary search logic
      if (arr[mid] > x) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

var arr = [-3, -2, 4, 6, 10, 8, 7, 1];
var x = 7;
var position = findPosition(arr, x);
if (position == -1) {
  console.log("Element not present");
} else {
  console.log("Element present at index " + position);
}
