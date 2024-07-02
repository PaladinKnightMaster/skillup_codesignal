/*
import { useState } from 'react';

export default function App() {
  // Define a complex state for a fruit object
  const [fruit, setFruit] = useState({ name: 'Avocado', quantity: 5, price: 1.5 });

  return (
    <div>
      {}// TODO: Don't forget to update this to present correct state variables
      <p>Name: {fruit.name}</p>
      <p>Quantity: {fruit.quantity}</p>
      <p>Price: ${fruit.price}</p>
    </div>
  );
}
*/
import { useState } from 'react';

export default function App() {
  // Define individual states for the fruit's properties
  const [name, setName] = useState('Avocado');
  const [quantity, setQuantity] = useState(5);
  const [price, setPrice] = useState(1.5);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Quantity: {quantity}</p>
      <p>Price: ${price.toFixed(2)}</p>
    </div>
  );
}
