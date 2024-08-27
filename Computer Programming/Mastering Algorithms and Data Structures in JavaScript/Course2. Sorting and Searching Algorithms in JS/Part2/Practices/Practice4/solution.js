function iterativeBinarySearch(books, isbn) {
  let start = 0;
  let end = books.length - 1;

  while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (books[mid].isbn == isbn) return mid;
      else if (books[mid].isbn < isbn) start = mid + 1;
      else end = mid - 1;
  }
  return -1;
}


let books = [
  {'isbn': 1111, 'title': 'The Lord of the Rings'},
  {'isbn': 1121, 'title': 'Harry Potter'},
  {'isbn': 2211, 'title': 'The Hobbit'}
];
let target = 2211;
let result = iterativeBinarySearch(books, target);
console.log(result);