import { useState } from "react";

const allBooks = [
  { title: 'The Great Gatsby', id: 1 },
  { title: 'To Kill a Mockingbird', id: 2 },
  { title: '1984', id: 3 },
  { title: 'Harry Potter and the Philosopher\'s Stone', id: 4 },
  { title: 'The Lord of the Rings', id: 5 },
];

function BookSearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(allBooks);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.trim() === '') {
      event.preventDefault();
      return;
    }
    const filtered = allBooks.filter(book =>
      book.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearchChange} />
      <ul>
        {filteredBooks.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookSearchForm;