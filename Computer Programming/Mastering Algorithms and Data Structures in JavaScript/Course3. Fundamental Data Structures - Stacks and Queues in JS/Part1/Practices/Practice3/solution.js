// class BookStack {
//   constructor() {
//     this.books = [];
//   }

//   // TODO: Implement the method to add a book to the top of the stack.

//   checkLastBook() {
//     return this.books[this.books.length - 1];
//   }
// }

// let libraryStack = new BookStack();
// libraryStack.addBook('The Great Gatsby');
// console.log(libraryStack.checkLastBook()); // Should display the last book added to the stack

class BookStack {
  constructor() {
    this.books = [];
  }

  // TODO: Implement the method to add a book to the top of the stack.
  addBook(book) {
    this.books.push(book);
  }

  checkLastBook() {
    return this.books[this.books.length - 1];
  }
}

let libraryStack = new BookStack();
libraryStack.addBook('The Great Gatsby');
console.log(libraryStack.checkLastBook()); // Should display the last book added to the stack