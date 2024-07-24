import { useParams } from 'react-router-dom';

export default function Planet() {
  // TODO: Retrieve the planet name from the URL parameters and return h2 element with a welcome message
  let { name } = useParams();
  return <h2>Welcome to {name}!</h2>;
}