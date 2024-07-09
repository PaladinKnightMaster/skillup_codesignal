/*
// TODO: Define a functional component called ControlPanel that accepts 'props' and returns a button element.
// The button should have an onClick event that calls a method passed through 'props'.

// TODO: Define a functional component called Cockpit.
// Inside it, define a method that alerts 'Hyperdrive is activated! Off to the stars!'.
// Render the ControlPanel component and pass the method you've defined as a prop.

// Export the parent component with a default export.
*/
// TODO: Define a functional component called ControlPanel that accepts 'props' and returns a button element.
// The button should have an onClick event that calls a method passed through 'props'.
const ControlPanel = (props) => {
  return (
    <button onClick={props.onClick}>
      Activate Hyperdrive
    </button>
  );
};

// TODO: Define a functional component called Cockpit.
// Inside it, define a method that alerts 'Hyperdrive is activated! Off to the stars!'.
// Render the ControlPanel component and pass the method you've defined as a prop.
const Cockpit = () => {
  const activateHyperdrive = () => {
    alert('Hyperdrive is activated! Off to the stars!');
  };
  return <ControlPanel onClick={activateHyperdrive} />;
};

// Export the parent component with a default export.
export default Cockpit;