import { useParams } from 'react-router-dom';

// TODO: Use the "useParams" hook to get the planetName from the URL

// TODO: Create a component that welcomes the Space Explorer to the planet they selected in the route
export default function Planet() {
    const { name } = useParams();
    return <h2>Welcome to {name}!</h2>;
}