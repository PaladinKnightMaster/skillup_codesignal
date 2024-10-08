// function areBracketsBalanced(s) {
//   // Initialized stack, ready to track opening brackets
//   const stack = [];
//   // TODO: Define pairing

//   for (let char of s) {
//       // TODO: Check matching
//   }

//   // TODO: Check if the stack is empty and return corresponding value
// }


// console.log(areBracketsBalanced("[({})]")); // true
// console.log(areBracketsBalanced("[(]")); // false
// console.log(areBracketsBalanced("[]{}()")); // true
// console.log(areBracketsBalanced("[])")); // false


function areBracketsBalanced(s) {
  // Initialized stack, ready to track opening brackets
  const stack = [];
  // TODO: Define pairing

  for (let char of s) {
      // TODO: Check matching

      if (char === '(' || char === '{' || char === '[') {
          stack.push(char);
      } else if (char === ')' || char === '}' || char === ']') {
          if (stack.length === 0) {
              return false;
          }
          let top = stack.pop();
          if ((char === ')' && top !== '(') || (char === '}' && top !== '{') || (char === ']' && top !== '[')) {
              return false;
          }
      }
  }

  // TODO: Check if the stack is empty and return corresponding value
  return stack.length === 0;
}


console.log(areBracketsBalanced("[({})]")); // true
console.log(areBracketsBalanced("[(]")); // false
console.log(areBracketsBalanced("[]{}()")); // true
console.log(areBracketsBalanced("[])")); // false