import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Simulate a login attempt and error
    try {
      throw new Error('Access Denied: Incorrect credentials.'); // Failed login attempt
    } catch (error) {
      navigate('/error'); // Navigate to Error Page without state
    }
  };

  return <button onClick={handleLogin}>Attempt Login</button>;
}