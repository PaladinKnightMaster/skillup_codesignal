```
import { useState } from 'react';

function LibraryForm() {
  const [bookName, setBookName] = useState('');

  const validateBookName = () => {
    // TODO: Change the code block check if the book name is AstroPhysics
    // If so, alert 'AstroPhysics book is available. Thank you for your submission!''
    // Otherwise alert 'Only AstroPhysics book is available for now.'
    if (bookName) {
      alert('Thank you for your submission!');
    } else {
      alert('Please enter the name of the book.');
    }
  };

  return (
    <div>
      <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} />
      <button onClick={validateBookName}>Submit</button>
    </div>
  );
}

export default LibraryForm;
```
import { useState } from 'react';

function LibraryForm() {
  const [bookName, setBookName] = useState('');

  const validateBookName = () => {
    // TODO: Change the code block check if the book name is AstroPhysics
    // If so, alert 'AstroPhysics book is available. Thank you for your submission!''
    // Otherwise alert 'Only AstroPhysics book is available for now.'
    if (bookName === 'AstroPhysics') {
      alert('AstroPhysics book is available. Thank you for your submission!');
    } else {
      alert('Only AstroPhysics book is available for now.');
    }
  };

  return (
    <div>
      <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} />
      <button onClick={validateBookName}>Submit</button>
    </div>
  );
}

export default LibraryForm;