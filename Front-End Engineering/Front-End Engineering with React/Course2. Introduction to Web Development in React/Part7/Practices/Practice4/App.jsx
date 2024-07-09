/*
const planetBooks = [
  { name: 'Mercury Mysteries', isAvailable: true },
  { name: 'Venus Ventures', isAvailable: false },
  { name: 'Mars Maps', isAvailable: true },
];

// TODO: Create a Library functional component
// - Use map to render each book as a paragraph element
// - Assign a unique key for each book
// - Display 'Explore Now' if the book is available, otherwise 'Coming Soon'

export default // TODO: Export the Library component
*/
const planetBooks = [
  { name: 'Mercury Mysteries', isAvailable: true },
  { name: 'Venus Ventures', isAvailable: false },
  { name: 'Mars Maps', isAvailable: true },
];

// TODO: Create a Library functional component
// - Use map to render each book as a paragraph element
// - Assign a unique key for each book
// - Display 'Explore Now' if the book is available, otherwise 'Coming Soon'

function Library() {
  return (
    <div>
      {planetBooks.map((book) => (
        <p key={book.name}>{book.isAvailable ? 'Explore Now' : 'Coming Soon'}</p>
      ))}
    </div>
  );
}

export default Library; // TODO: Export the Library component