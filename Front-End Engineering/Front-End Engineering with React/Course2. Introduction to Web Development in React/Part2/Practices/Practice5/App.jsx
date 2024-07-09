/*
// TODO: Create a functional component named Spacecraft that returns JSX
// It should include a <div> with an <h1> element for a welcome message
// and a <button> element that shows an alert with a message when clicked

// Remember to export your Spacecraft component

*/
// TODO: Create a functional component named Spacecraft that returns JSX
// It should include a <div> with an <h1> element for a welcome message
// and a <button> element that shows an alert with a message when clicked

// Remember to export your Spacecraft component
export default function Spacecraft() {
  return (
    <div>
      <h1>Welcome to Spacecraft!</h1>
      <button onClick={() => alert('Spacecraft is here!')}>
        Click me for an alert!
      </button>
    </div>
  );
}