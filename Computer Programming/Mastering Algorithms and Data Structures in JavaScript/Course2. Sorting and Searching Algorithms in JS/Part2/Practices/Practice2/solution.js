// function recursiveBookSearch(library, start, end, bookID) {
//   if (start > end) return false; // Book not found
//   let mid = Math.floor((start + end) / 2);
//   if (library[mid] === bookID) return true; // Book found
//   if (library[mid] > bookID)
//       return recursiveBookSearch(library, start, mid - 1, bookID);
//   return recursiveBookSearch(library, mid + 1, end, bookID);
// }

// // Example library array and book ID to search for
// const library = [123, 234, 345, 456, 567, 678, 789];
// const bookID = 456;
// const bookFound = recursiveBookSearch(library, 0, library.length - 1, bookID);
// console.log(`Book found: ${bookFound}`);

function recursiveBookSearch(library, start, end, bookID) {
  if (start > end) return -1; // Book not found
  let mid = Math.floor((start + end) / 2);
  if (library[mid] === bookID) return mid; // Book found, return index
  if (library[mid] > bookID)
      return recursiveBookSearch(library, start, mid - 1, bookID);
  return recursiveBookSearch(library, mid + 1, end, bookID);
}

// Example library array and book ID to search for
const library = [123, 234, 345, 456, 567, 678, 789];
const bookID = 456;
const bookIndex = recursiveBookSearch(library, 0, library.length - 1, bookID);
console.log(`Book found at index: ${bookIndex}`);
