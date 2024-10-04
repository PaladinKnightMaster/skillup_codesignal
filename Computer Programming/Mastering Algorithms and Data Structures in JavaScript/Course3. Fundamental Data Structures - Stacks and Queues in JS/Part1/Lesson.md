# Stacks in JavaScript: Understanding and Implementing Fundamental Data Structures

## Topic Overview and Actualization
Hello, eager learners! In today's lesson, we're exploring **Stacks**, a crucial data structure in programming. We aim to **understand Stacks**, **implement and manipulate Stacks in JavaScript**, and **analyze their complexities**. Let's dive right in!

## Introduction to Stacks
First and foremost, let's understand what a Stack is. Imagine a stack of plates that you can only remove from the top. This concept exemplifies Stacks, which follow a Last-In, First-Out (LIFO) structure. Let's see an implementation in JavaScript, where we'll `Push` (add), `Pop` (remove), and `Peek` (view the top) elements.

```JavaScript
class Stack {
  constructor() {this.items = [];} // Empty Stack
  isEmpty() {return this.items.length == 0;} // Check if Stack is empty
}
```

We start with introducing the stack class that stores an array of items.

In JavaScript, arrays can work as Stacks. They have the necessary built-in methods. However, let's implement each operation ourselves to understand this data structure better.

## Stack Operations — Push
The `Push` operation adds a new element to the top of the Stack. It is simply written as:

```JavaScript
push(element) {
  this.items.push(element);
}
```

## Stack Operations — Pop
The `Pop` operation removes the topmost element from the Stack. It first checks if the Stack is empty, then returns "Underflow". Otherwise, it removes and returns the top element of the Stack.

```JavaScript
pop() {
  return this.items.length == 0 ? "Underflow" : this.items.pop();
}
```

## Stack Operations — Peek
The `Peek` operation lets us view the topmost element without removing it.

```JavaScript
peek() {
  return this.items[this.items.length - 1];
}
```

## Stack Complexity Analysis
The `Push`, `Pop`, and `Peek` operations take constant time — O(1). This is because these operations are performed at the end of the array. The space complexity is proportional to the number of elements — O(n), where `n` is the quantity of Stack elements.

## Using Stack
Here is a complete stack implementation with usage example:

```JavaScript
class Stack {
  constructor() {this.items = [];} // Empty Stack

  push(element) {
    this.items.push(element);
  } // Add element

  pop() {
    return this.items.length == 0 ? "Underflow" : this.items.pop();
  } // Remove element

  peek() {
    return this.items[this.items.length - 1];
  } // Check top element

  isEmpty() {
    return this.items.length == 0;
  } // Check if Stack is empty
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
```

## Stacks in JavaScript
However, in JavaScript we usually don't implement stacks ourselves or use any special object for it. Instead, we simply use arrays as stacks:

```Javascript
let stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
console.log(stack[stack.length - 1]); // 2
```

## Lesson Summary and Practice Announcement
Well done! You've completed your journey through **Stacks in JavaScript**, mastering their concept, implementation, operations, and complexity analysis. Exercise sessions await you to strengthen your skills further. So, let's set sail for some exciting hands-on practice!
