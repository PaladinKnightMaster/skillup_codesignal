class BookStack {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  sellBook() {
    return this.books.length == 0 ? "No more books!" : this.books.pop();
  }
  checkTopBook() {
    return this.books[this.books.length - 1] || "Stack is empty";
  }
}

let bookstoreStack = new BookStack();
bookstoreStack.addBook("The Great Gatsby");
bookstoreStack.addBook("1984");
console.log(bookstoreStack.sellBook()); // "1984"
console.log(bookstoreStack.checkTopBook()); // "The Great Gatsby"