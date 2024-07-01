/*
import { useState } from 'react';

function GroceryItemAdder() {
  // TODO: Create a state for the item name with the initial value 'Milk'
  // TODO: Create a state for the item quantity with an initial value of 2

  // TODO: Write a function to handle doubling the item quantity when an event happens

  // TODO: Return a div with the following elements
  // - Section about item name and its quantity
  // - Button element with an event handler that calls the above function
}

export default GroceryItemAdder;
*/
import { useState } from 'react';

function GroceryItemAdder() {
  // TODO: Create a state for the item name with the initial value 'Milk'
  const [name, setName] = useState('Milk');
  // TODO: Create a state for the item quantity with an initial value of 2
  const [quentity, setQuentity] = useState(2);
  // TODO: Write a function to handle doubling the item quantity when an event happens
  const handleClick = () => {
    setQuentity(prev => prev*2);
  }
  // TODO: Return a div with the following elements
  // - Section about item name and its quantity
  // - Button element with an event handler that calls the above function
  return (
    <div>
      <section>Name: {name}, Quentity: {quentity}</section>
      <button onClick={handleClick}>Double!</button>
    </div>
    );
}

export default GroceryItemAdder;