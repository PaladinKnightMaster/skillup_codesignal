// function countDigits(n) {
//     if (n < 10) { // Base case
//       return 1;
//     } else {
//       return n + countDigits(Math.floor(n / 10));
//     }
//   }
// console.log(countDigits(1234));

function countDigits(n) {
    if (n < 10) { // Base case
      return 1;
    } else {
      return 1 + countDigits(Math.floor(n / 10));
    }
  }
  console.log(countDigits(1234));