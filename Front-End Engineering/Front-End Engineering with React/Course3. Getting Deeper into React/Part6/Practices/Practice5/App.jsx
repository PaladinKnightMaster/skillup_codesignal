/*
// TODO: Define a 'Book' component that accepts 'onBorrow' prop and calls it when the borrow button is clicked

// TODO: Define a 'Library' component that alerts the name of the borrowed book using the 'handleBorrow' function and renders the 'Book' component

// TODO: Export the 'Library' component as the default export
*/

import React from 'react';
// TODO: Define a 'Book' component that accepts 'onBorrow' prop and calls it when the borrow button is clicked
const Book = ({ title, onBorrow }) => {
  const handleBorrowClick = () => {
    onBorrow(title);
  };

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={handleBorrowClick}>Borrow</button>
    </div>
  );
};
// TODO: Define a 'Library' component that alerts the name of the borrowed book using the 'handleBorrow' function and renders the 'Book' component
const Library = () => {
  const handleBorrow = (bookTitle) => {
    alert(`The book "${bookTitle}" has been borrowed.`);
  };

  return (
    <div>
      <h1>Library</h1>
      <Book title="The Great Gatsby" onBorrow={handleBorrow} />
      <Book title="To Kill a Mockingbird" onBorrow={handleBorrow} />
      <Book title="1984" onBorrow={handleBorrow} />
    </div>
  );
};
// TODO: Export the 'Library' component as the default export
export default Library;
