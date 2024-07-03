```
import { useState, useRef } from 'react';

export default function BirthdayGuestBook() {
  const [greetings, setGreetings] = useState([]);
  const inputRef = useRef();

  const addGreeting = () => {
    const newGreeting = {
      id: greetings.length + 1,
      text: inputRef.current.value,
    };
    // TODO: Add the new greeting to the list 'greetings'
    // TODO: Set the ref to an empty string
  };

  return (
    <div>
      <h1>Virtual Birthday Party</h1>

      <label htmlFor="greetingInput">Write your greeting:</label>
      <input id="greetingInput" ref={inputRef} type="text" placeholder="Write your greeting..." />

      <button onClick={addGreeting}>Add Greeting</button>

      <div>
        {greetings.map((greet, index) => (
          <p key={index}>🎉 {greet.text}</p>
        ))}
      </div>
    </div>
  );
}
```
import { useState, useRef } from 'react';

export default function BirthdayGuestBook() {
  const [greetings, setGreetings] = useState([]);
  const inputRef = useRef();

  const addGreeting = () => {
    const newGreeting = {
      id: greetings.length + 1,
      text: inputRef.current.value,
    };
    // TODO: Add the new greeting to the list 'greetings'
    // TODO: Set the ref to an empty string
    setGreetings([...greetings, newGreeting]);
    inputRef.current.value = '';
  };

  return (
    <div>
      <h1>Virtual Birthday Party</h1>

      <label htmlFor="greetingInput">Write your greeting:</label>
      <input id="greetingInput" ref={inputRef} type="text" placeholder="Write your greeting..." />

      <button onClick={addGreeting}>Add Greeting</button>

      <div>
        {greetings.map((greet, index) => (
          <p key={index}>🎉 {greet.text}</p>
        ))}
      </div>
    </div>
  );
}