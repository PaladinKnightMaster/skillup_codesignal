// class MaxStack {
//   constructor(){
//       this.stack = [];
//       this.maxStack = [];
//   }

//   push(val) {
//       // implement this
//   }

//   pop() {
//       // implement this
//   }

//   top() {
//       return this.stack[this.stack.length - 1];
//   }

//   getMax() {
//       // implement this
//   }
// }

// let ms = new MaxStack();
// ms.push(3);
// console.log(ms.getMax());  // Expected: 3
// ms.push(2);
// console.log(ms.getMax());  // Expected: 3
// ms.push(4);
// console.log(ms.getMax());  // Expected: 4

class MaxStack {
  constructor() {
      this.stack = [];
      this.maxStack = [];
  }

  push(val) {
      this.stack.push(val);
      // Push the new max into maxStack (either the current value or the last max)
      if (this.maxStack.length === 0) {
          this.maxStack.push(val);
      } else {
          this.maxStack.push(Math.max(val, this.maxStack[this.maxStack.length - 1]));
      }
  }

  pop() {
      this.stack.pop();
      this.maxStack.pop();
  }

  top() {
      return this.stack[this.stack.length - 1];
  }

  getMax() {
      return this.maxStack[this.maxStack.length - 1];
  }
}

// Testing
let ms = new MaxStack();
ms.push(3);
console.log(ms.getMax());  // Expected: 3
ms.push(2);
console.log(ms.getMax());  // Expected: 3
ms.push(4);
console.log(ms.getMax());  // Expected: 4
ms.pop();
console.log(ms.getMax());  // Expected: 3
