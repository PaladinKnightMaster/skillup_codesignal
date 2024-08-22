function sumDigits(number) {
    if (number < 10) {
      return number;
    } else {
      // TODO: Calculate the sum of the remaining digits using recursion.
      return number % 10 + sumDigits(Math.floor(number / 10));
    }
  }
  console.log(sumDigits(54321)); // Should print 15 (5+4+3+2+1)