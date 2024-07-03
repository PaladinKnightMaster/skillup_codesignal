import { useState } from 'react';

export default function BirthdayRSVP() {
  const [guestName, setGuestName] = useState('');

  const updateGuestName = (event) => setGuestName(event.target.value);

  return (
    <div>
      <h1>Virtual Birthday Party RSVP</h1>
      <input
        type="text"
        placeholder="Enter your name here"
        value={guestName}
        onChange={updateGuestName}
      />
      <p>Hi {guestName}, thank you for RSVPing!</p>
    </div>
  );
}