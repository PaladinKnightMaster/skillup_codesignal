import { useState, useEffect } from 'react';

function WeatherForecast() {
  const [forecast, setForecast] = useState({ temp: '', summary: '' });

  useEffect(() => {
    fetch('https://api-regional.codesignalcontent.com/weatherManager/getWeather?lat=41.902782&lng=12.496366')
      .then(response => response.json())
      .then(data => setForecast({ temp: data.weather.temperature, summary: data.weather.summary }));
  }, []);

  return (
    <p>The weather in Rome is {forecast.summary} with a temperature of {forecast.temp}°C.</p>
  );
}

export default WeatherForecast;