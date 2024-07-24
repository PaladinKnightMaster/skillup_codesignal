/*
import { useParams } from 'react-router-dom';

// PlanetDetails Component with a bug in parameter usage
function PlanetDetails() {
  // Incorrect destructuring of params object that does not match the route path
  const { planet } = useParams();
  return <h2>Welcome to the planet {planet}!</h2>;
}

export default PlanetDetails;
*/

import { useParams } from 'react-router-dom';

// PlanetDetails Component with a bug in parameter usage
function PlanetDetails() {
  // Incorrect destructuring of params object that does not match the route path
  const { planetName } = useParams();
  return <h2>Welcome to the planet {planetName}!</h2>;
}

export default PlanetDetails;