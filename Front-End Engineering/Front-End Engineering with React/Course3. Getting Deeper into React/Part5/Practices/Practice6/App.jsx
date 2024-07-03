```
import { useState } from 'react';

export default function BirthdayInvite() {
  // TODO: Create a state variable to store the guest's name and a function to update it

  return (
    <div>
      {/* TODO: Display a personalized welcome message for the guest */}
      {/* TODO: Add an input field that updates the guest's name as they type */}
      </div>
    );
  }
```
import { useState } from 'react';

export default function BirthdayInvite() {
  // TODO: Create a state variable to store the guest's name and a function to update it

  const [guestName, setGuestName] = useState('');

  const updateGuestName = (event) => setGuestName(event.target.value);

  /* TODO: Display a personalized welcome message for the guest */
  /* TODO: Add an input field that updates the guest's name as they type */

  return (
    <div>
      <p>Hi {guestName}!</p>
      <input
        type="text"
        value={guestName}
        onChange={updateGuestName}
        placeholder="Enter your name"
      />
      </div>
    );
}