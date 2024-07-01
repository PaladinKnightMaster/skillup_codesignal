import { useState } from 'react';

function GroceryForm() {
  const [itemCount, setItemCount] = useState(1);

  function addToCart() {
    setItemCount(prevItemCount => prevItemCount + 1);
  }

  function removeFromCart() {
    setItemCount(prevItemCount => prevItemCount > 1 ? prevItemCount - 1 : 1);
  }

  return (
    <div>
      <p>Items in Cart: {itemCount}</p>
      <button onClick={addToCart}>Add More Of The Same Item</button>
      <button onClick={removeFromCart}>Remove Item</button>
    </div>
  );
}

export default GroceryForm;