/*
import { useState } from 'react';

function CityWeather() {
  const [city, setCity] = useState('Rome'); // Default selection
  const [location, setLocation] = useState({});

  const fetchLocation = () => {
    fetch(`https://api-regional.codesignalcontent.com/weatherManager/getLocation?city=${city}`)
      .then(response => response.json())
      .then(data => setLocation(data.location))
      .catch(error => console.error('Oops! There was an error:', error));
  }

  let displayLocation = '';
  // TODO: Change the code below to display the latitude and longitude if location data is available.
  // Otherwise, show 'Location data not available'

  return (
    <div>
      <select value={city} onChange={e => setCity(e.target.value)}>
        <option value="Rome">Rome</option>
        <option value="Kharkiv">Kharkiv</option>
      </select>
      <button onClick={fetchLocation}>Check Location</button>
      <div>{displayLocation}</div>
    </div>
  );
}

export default CityWeather;
*/
import { useState } from 'react';

function CityWeather() {
  const [city, setCity] = useState('Rome'); // Default selection
  const [location, setLocation] = useState({});

  const fetchLocation = () => {
    fetch(`https://api-regional.codesignalcontent.com/weatherManager/getLocation?city=${city}`)
      .then(response => response.json())
      .then(data => setLocation(data.location))
      .catch(error => console.error('Oops! There was an error:', error));
  }

  return (
    <div>
      <select value={city} onChange={e => setCity(e.target.value)}>
        <option value="Rome">Rome</option>
        <option value="Kharkiv">Kharkiv</option>
      </select>
      <button onClick={fetchLocation}>Check Location</button>
      <div>
        {Object.keys(location).length === 0
          ? 'Location data not available'
          : `Latitude: ${location.lat}, Longitude: ${location.lng}`}
      </div>
    </div>
  );
}

export default CityWeather;
