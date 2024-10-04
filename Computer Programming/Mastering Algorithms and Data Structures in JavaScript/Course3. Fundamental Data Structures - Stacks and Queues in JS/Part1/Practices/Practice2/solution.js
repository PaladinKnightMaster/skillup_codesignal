// class BookStack {
//   constructor() { this.books = []; }

//   push(book) {
//     this.books.push(book);
//   }

//   pop() {
//     if (this.books.length === 0) {
//       return "Underflow";
//     } else {
//       return this.books.pop();
//     }
//   }

//   peek() {
//     if (this.books.length === 0) {
//       return "Underflow";
//     } else {
//       return this.books[this.books.length];
//     }
//   }
// }

// // Example usage:
// let bookstoreStack = new BookStack();
// bookstoreStack.push("The Great Gatsby");
// bookstoreStack.push("1984");
// console.log(bookstoreStack.pop()); // "1984"
// console.log(bookstoreStack.peek()); // Should return "The Great Gatsby", but there's a bug!

class BookStack {
  constructor() { this.books = []; }

  push(book) {
    this.books.push(book);
  }

  pop() {
    if (this.books.length === 0) {
      return "Underflow";
    } else {
      return this.books.pop();
    }
  }

  peek() {
    if (this.books.length === 0) {
      return "Underflow";
    } else {
      return this.books[this.books.length - 1];
    }
  }
}

// Example usage:
let bookstoreStack = new BookStack();
bookstoreStack.push("The Great Gatsby");
bookstoreStack.push("1984");
console.log(bookstoreStack.pop()); // "1984"
console.log(bookstoreStack.peek()); // Should return "The Great Gatsby", but there's a bug!