// function reverseOnlyLetters(str) {
//   let stack = [];

//   for (let char of str) {
//     if (/^[a-zA-Z]/.test(char)) {
//       // TODO: push symbols to the stack
//     }
//   }

//   let result = '';
//   // TODO: fill in the resulting array

//   return result;
// }

// // Testing
// let str1 = "a-bC-dEf-ghIj";
// console.log(reverseOnlyLetters(str1)); // Expected: "j-Ih-gfE-dCba"

// let str2 = "TesT1-2";
// console.log(reverseOnlyLetters(str2)); // Expected: "TseT1-2"

// let str3 = "abcd";
// console.log(reverseOnlyLetters(str3)); // Expected: "dcba"

function reverseOnlyLetters(str) {
  let stack = [];

  for (let char of str) {
    if (/^[a-zA-Z]/.test(char)) {
      // TODO: push symbols to the stack
      stack.push(char);
    }
  }

  let result = '';
  // TODO: fill in the resulting array

  for (let char of str) {
    if (/^[a-zA-Z]/.test(char)) {
      // TODO: pop symbols from the stack
      result += stack.pop();
    } else {
      result += char;
    }
  }

  return result;
}

// Testing
let str1 = "a-bC-dEf-ghIj";
console.log(reverseOnlyLetters(str1)); // Expected: "j-Ih-gfE-dCba"

let str2 = "TesT1-2";
console.log(reverseOnlyLetters(str2)); // Expected: "TseT1-2"

let str3 = "abcd";
console.log(reverseOnlyLetters(str3)); // Expected: "dcba"