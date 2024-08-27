function findBook(bookIDs, bookToFind) {
  let low = 0;
  let high = bookIDs.length - 1;

  while (low <= high) {
      // TODO: Calculate the midpoint of the current search range
      let mid = Math.floor((low + high) / 2);
      // TODO: Use binary search logic to check if mid is the bookToFind or to adjust low and high
      if (bookIDs[mid] === bookToFind) return mid;
      if (bookIDs[mid] < bookToFind) low = mid + 1;
      else high = mid - 1;
  }
  return -1;  // Book not found
}

let books = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let bookFound = findBook(books, 7);
console.log(bookFound);