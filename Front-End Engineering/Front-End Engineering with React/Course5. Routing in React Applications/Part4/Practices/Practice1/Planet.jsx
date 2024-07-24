import { useParams } from 'react-router-dom';

export default function Planet() {
  let { name } = useParams();
  return <h2>Welcome to {name}! The red planet awaits you.</h2>;
}