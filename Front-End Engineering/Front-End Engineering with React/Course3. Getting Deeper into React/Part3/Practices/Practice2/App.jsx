```
import { useState } from 'react';

function GroceryList() {
  const [item, setItem] = useState({ name: 'Apple', quantity: 3, price: 0.5 });

  function updateQuantity(q) {
    setItem({ ...item, quantity: q });
  }

  return (
    <div>
      <p>{item.name} - Quantity: {item.quantity}</p>
      <button onClick={() => updateQuantity(6)}>Update Quantity</button>
    </div>
  );
}

export default GroceryList;
```
import { useState } from 'react';

function GroceryList() {
  const [item, setItem] = useState({ name: 'Apple', quantity: 3, price: 0.5 });

  function updateQuantity(q) {
    setItem({ ...item, quantity: q, price: 5 });
  }

  return (
    <div>
      <p>{item.name} - Quantity: {item.quantity}</p>
      <button onClick={() => updateQuantity(6)}>Update Quantity</button>
    </div>
  );
}

export default GroceryList;