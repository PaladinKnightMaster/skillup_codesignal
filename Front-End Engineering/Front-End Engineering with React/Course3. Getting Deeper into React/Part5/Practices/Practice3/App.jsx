/*
import { useState } from 'react';

export default function BirthdayGuestList() {
  const [guest, setGuest] = useState('');

  return (
    <div>
      <h1>Welcome to the Virtual Birthday Party in Space, {guest}!</h1>
      <input
        type="text"
        value={guest}
        onChange={(event) => setGuest(event)}
      />
    </div>
  );
}
*/
import { useState } from 'react';

export default function BirthdayGuestList() {
  const [guest, setGuest] = useState('');

  return (
    <div>
      <h1>Welcome to the Virtual Birthday Party in Space, {guest}!</h1>
      <input
        type="text"
        value={guest}
        onChange={(event) => setGuest(event.currentTarget.value)}
      />
    </div>
  );
}