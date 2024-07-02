/*
import { useState } from 'react';

export default function App() {
  const [itemName, setItemName] = useState('');

  function handleItemChange(event) {
    // TODO: Update the state with the new item name
  }

  return (
    <form>
      <label>
        Item Name:
        <input type="text" value={itemName} onChange={handleItemChange} />
      </label>
    </form>
  );
}
*/

import { useState } from 'react';

export default function App() {
  const [itemName, setItemName] = useState('');

  function handleItemChange(event) {
    // TODO: Update the state with the new item name
    setItemName(event.currentTarget.value);
  }

  return (
    <form>
      <label>
        Item Name:
        <input type="text" value={itemName} onChange={handleItemChange} />
      </label>
    </form>
  );
}