/*
import { useState } from 'react';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSelectCity = (event) => {
    const city = event.target.value;
    // TODO: Retrieve the city's latitude and longitude data from the weatherManager API and update the weatherData state
    fetch(`https://api-regional.codesignalcontent.com/weatherManager/getLocation?city=${city}`)
      .then() //TODO: complete the 'then' block to update weatherData with the fetched data
      .catch(error => console.error('Error:', error));
  }

  return (
    <div>
      <select onChange={handleSelectCity}>
        <option value="">Select a city</option>
        <option value="Rome">Rome</option>
        <option value="Kharkiv">Kharkiv</option>
      </select>
      {weatherData && <div>{weatherData.city} is located at latitude {weatherData.location.lat} and longitude {weatherData.location.lng}.</div>}
    </div>
  )
}

export default WeatherApp;
*/
import { useState } from 'react';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSelectCity = (event) => {
    const city = event.target.value;
    // TODO: Retrieve the city's latitude and longitude data from the weatherManager API and update the weatherData state
    fetch(`https://api-regional.codesignalcontent.com/weatherManager/getLocation?city=${city}`)
      .then( response => response.json() ) //TODO: complete the 'then' block to update weatherData with the fetched data
      .then( data => setWeatherData(data) )
      .catch(error => console.error('Error:', error));
  }

  return (
    <div>
      <select onChange={handleSelectCity}>
        <option value="">Select a city</option>
        <option value="Rome">Rome</option>
        <option value="Kharkiv">Kharkiv</option>
      </select>
      {weatherData && <div>{weatherData.city} is located at latitude {weatherData.location.lat} and longitude {weatherData.location.lng}.</div>}
    </div>
  )
}

export default WeatherApp;