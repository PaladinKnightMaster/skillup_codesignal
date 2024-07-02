/*
import { useState } from 'react';

export default function GroceryList() {
  const [itemName, setItemName] = useState('Milk');
  const [itemQuantity, setItemQuantity] = useState(2);

  function updateQuantity(newQuantity) {
    setItemName(newQuantity);
  }

  return (
    <div>
      <p>{itemName}: {itemQuantity} liter(s)</p>
      <button onClick={() => updateQuantity(5)}>Set 5 liters</button>
    </div>
  );
}
*/

import { useState } from 'react';

export default function GroceryList() {
  const [itemName, setItemName] = useState('Milk');
  const [itemQuantity, setItemQuantity] = useState(2);

  function updateQuantity(newQuantity) {
    setItemQuantity(newQuantity);
  }

  return (
    <div>
      <p>{itemName}: {itemQuantity} liter(s)</p>
      <button onClick={() => updateQuantity(5)}>Set 5 liters</button>
    </div>
  );
}