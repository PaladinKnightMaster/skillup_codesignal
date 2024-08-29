// function findMax(nums) {
//   let start = 0, end = nums.length - 1;

//   while (start < end) {
//       let mid = Math.floor((start + end) / 2);

//       // implement this
//   }

//   // When the while loop ends, start and end will be pointing at the largest number
//   return nums[start];
// }

// // Test samples
// console.log(findMax([2,1,5,4,3])); // Expected output: 5
// console.log(findMax([15,27,33,2,8,10])); // Expected output: 33

function findMax(nums) {
  let start = 0, end = nums.length - 1;

  while (start < end) {
      let mid = Math.floor((start + end) / 2);
      // implement this
      if (nums[mid] > nums[mid + 1]) {
          // This means mid is the peak
          return nums[mid];
      } else if (nums[mid] < nums[end]) {
          // Maximum is in the left part
          end = mid;
      } else {
          // Maximum is in the right part
          start = mid + 1;
      }
  }

  // When the while loop ends, start and end will be pointing at the largest number
  return nums[start];
}

// Test samples
console.log(findMax([2, 1, 5, 4, 3])); // Expected output: 5
console.log(findMax([15, 27, 33, 2, 8, 10])); // Expected output: 33
