/*
// Define a functional component to greet planets
function PlanetGreeting(props) {
  return <p>Welcome to {props.planet}!</p>;
}

// Set default props in case no planet is provided
PlanetGreeting.defaultProps = {
  planet: 'Earth'
};

export default PlanetGreeting;
*/
// Define a functional component to greet planets
function PlanetGreeting(props) {
  return <p>Welcome to {props.planet}!</p>;
}

// Set default props in case no planet is provided
PlanetGreeting.defaultProps = {
  planet: 'Mars'
};

export default PlanetGreeting;