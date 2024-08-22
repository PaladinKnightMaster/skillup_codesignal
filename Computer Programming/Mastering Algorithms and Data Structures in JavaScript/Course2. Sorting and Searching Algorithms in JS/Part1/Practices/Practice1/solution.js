function countDigits(number) {
    if(number < 10) {
      return 1; // Base case: a single digit
    } else {
      return 1 + countDigits(Math.floor(number / 10)); // Recursive case
    }
  }

console.log(countDigits(1302)); // Should output 4