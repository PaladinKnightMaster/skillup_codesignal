/*
import { useState, useEffect } from 'react';

export default function App() {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    fetch('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
      .then(response => {
        // TODO: Can you spot the problem with this line
        if (response.ok) { setStatus(`Error: ${response.statusText}`); }
        else { setStatus('Data fetched successfully!'); }
      })
      .catch(() => setStatus('Error: Failed to fetch data.'));
  }, []);

  return <div className="App">{status}</div>;
}
*/
import { useState, useEffect } from 'react';

export default function App() {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    fetch('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
      .then(response => {
        // TODO: Can you spot the problem with this line
        if (!response.ok) { setStatus(`Error: ${response.statusText}`); }
        else { setStatus('Data fetched successfully!'); }
      })
      .catch(() => setStatus('Error: Failed to fetch data.'));
  }, []);

  return <div className="App">{status}</div>;
}