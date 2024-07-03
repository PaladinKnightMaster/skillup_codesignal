/*
import { useState, useRef } from 'react';

export default function BirthdayForm() {
  const [name, setName] = useState('Mars Explorer');
  const ageRef = useRef();

  return (
    <div>
      <h1>Virtual Birthday Party in Space</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Space Age <span role="img" aria-label="rocket">🚀</span>:
          <input
            ref={ageRef}
            type="number"
            placeholder="How old are you on Earth?"
          />
        </label>
      </form>
    </div>
  );
}
*/

import { useState, useRef } from 'react';

export default function BirthdayForm() {
  const [name, setName] = useState('Mars Explorer');
  const [age, setAge] = useState(0);
  const ageRef = useRef();

  const updateAge = (event) => setAge(event.target.value);

  return (
    <div>
      <h1>Virtual Birthday Party in Space</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Space Age <span role="img" aria-label="rocket">🚀</span>:
          <input
            ref={ageRef}
            type="number"
            placeholder="How old are you on Earth?"
            value={age}
            onChange={updateAge}
          />
        </label>
      </form>
    </div>
  );
}