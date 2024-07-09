/*
import { useState, useEffect } from 'react';

function WeatherApp() {
  const [weather, setWeather] = useState({ temperature: '', summary: '' });

  useEffect(() => {
    // TODO: Use fetch to get weather data from the given URL and then update the state with the new data.
    // Use the following API URL: https://api-regional.codesignalcontent.com/weatherManager/getWeather with query parameters lat=41.902782 and lng=12.496366
  }, []);

  return (
    <div>
      <h1>Weather Status</h1>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Condition: {weather.summary}</p>
    </div>
  );
}

export default WeatherApp;
*/
import { useState, useEffect } from 'react';

function WeatherApp() {
  const [weather, setWeather] = useState({ temperature: '', summary: '' });

  useEffect(() => {
    // TODO: Use fetch to get weather data from the given URL and then update the state with the new data.
    // Use the following API URL: https://api-regional.codesignalcontent.com/weatherManager/getWeather with query parameters lat=41.902782 and lng=12.496366
    fetch('https://api-regional.codesignalcontent.com/weatherManager/getWeather?lat=41.902782&lng=12.496366')
      .then(response => response.json())
      .then(data => setWeather(data.weather));
  }, []);

  return (
    <div>
      <h1>Weather Status</h1>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Condition: {weather.summary}</p>
    </div>
  );
}

export default WeatherApp;