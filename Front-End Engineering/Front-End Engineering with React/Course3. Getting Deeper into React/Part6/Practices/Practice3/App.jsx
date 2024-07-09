/*
import { useState } from 'react';

function BookSubmission({ onSubmitTitle }) {
  const [title, setTitle] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleSubmit = () => onSubmitTitle(title); // Bug: logic issue in how to call onSubmitTitle

  return (
    <div>
      <label htmlFor="bookTitle">Book Title:</label>
      <input id="bookTitle" type="text" value={title} onChange={handleTitleChange} placeholder="Enter book title" />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

function LibrarySystem() {
  const handleBookTitle = (data) => {
    alert(`Book submitted: ${data}`);
  };

  return <BookSubmission onTitleSubmit={handleBookTitle} />;
}

export default LibrarySystem;
*/
import { useState } from 'react';

function BookSubmission({ onSubmitTitle }) {
  const [title, setTitle] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleSubmit = () => onSubmitTitle(title); // Bug: logic issue in how to call onSubmitTitle

  return (
    <div>
      <label htmlFor="bookTitle">Book Title:</label>
      <input id="bookTitle" type="text" value={title} onChange={handleTitleChange} placeholder="Enter book title" />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

function LibrarySystem() {
  const handleBookTitle = (data) => {
    alert(`Book submitted: ${data}`);
  };

  return <BookSubmission onSubmitTitle={handleBookTitle} />;
}

export default LibrarySystem;