// function recursiveBinarySearch(books, start, end, bookId) {
//   if (start > end) return "Book not found";
//   // TODO: Compute the midpoint of the current section
//   // TODO: Add the logic to search for the bookId by comparing it with book at midpoint and decide the next half to search in
// }

// // Example library array and book ID to search for
// const library = [123, 234, 345, 456, 567, 678, 789];
// const bookID = 456;
// const bookIndex = recursiveBinarySearch(library, 0, library.length - 1, bookID);
// console.log(`Book index: ${bookIndex}`);

function recursiveBinarySearch(books, start, end, bookId) {
  if (start > end) return "Book not found";
  // TODO: Compute the midpoint of the current section
  const mid = Math.floor((start + end) / 2);
  // TODO: Add the logic to search for the bookId by comparing it with book at midpoint and decide the next half to search in
  if (books[mid] === bookId) return mid;
  if (books[mid] > bookId)
      return recursiveBinarySearch(books, start, mid - 1, bookId);
  return recursiveBinarySearch(books, mid + 1, end, bookId);
}

// Example library array and book ID to search for
const library = [123, 234, 345, 456, 567, 678, 789];
const bookID = 456;
const bookIndex = recursiveBinarySearch(library, 0, library.length - 1, bookID);
console.log(`Book index: ${bookIndex}`);