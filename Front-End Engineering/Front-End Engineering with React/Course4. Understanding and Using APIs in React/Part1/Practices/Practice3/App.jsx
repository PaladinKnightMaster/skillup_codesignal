/*
import { useState, useEffect } from 'react';

function ClimateDataComponent() {
  const [climate, setClimate] = useState({ temperature: null, summary: '' });

  useEffect(() => {
    fetch('https://api-regional.codesignalcontent.com/weatherManager/getWeather?lat=41.902782&lng=12.496366')
      .then(response => response.json())
      .then(data => setClimate(data)); // Can you spot the problem here? Note, that the JSON returned from API looks as follows
      // {"city":"Rome","location":{"lat":"41.902782","lng":"12.496366"},"weather":{"temperature":25,"summary":"Foggy"}}
  }, []);

  return (
    <div>
      <h1>Climate Details</h1>
      <p>Temperature: {climate.temperature}°C</p>
      <p>Summary: {climate.summary}</p>
    </div>
  );
}

export default ClimateDataComponent;
*/
import { useState, useEffect } from 'react';

function ClimateDataComponent() {
  const [climate, setClimate] = useState({ temperature: null, summary: '' });

  useEffect(() => {
    fetch('https://api-regional.codesignalcontent.com/weatherManager/getWeather?lat=41.902782&lng=12.496366')
      .then(response => response.json())
      .then(data => setClimate(data.weather)); // Can you spot the problem here? Note, that the JSON returned from API looks as follows
      // {"city":"Rome","location":{"lat":"41.902782","lng":"12.496366"},"weather":{"temperature":25,"summary":"Foggy"}}
  }, []);

  return (
    <div>
      <h1>Climate Details</h1>
      <p>Temperature: {climate.temperature}°C</p>
      <p>Summary: {climate.summary}</p>
    </div>
  );
}

export default ClimateDataComponent;