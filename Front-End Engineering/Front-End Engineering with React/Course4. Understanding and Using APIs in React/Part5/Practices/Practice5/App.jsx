/*
import useFetchWeather from './useFetchWeather';

const WeatherInRome = () => {
  // TODO: Call your custom hook to fetch weather data for Rome using its latitude and longitude: '41.902782' and '12.496366', respectively. Check the useFetchWeather.js for hook implementation details.
// API URL: https://api-regional.codesignalcontent.com/weatherManager/getWeather

  // TODO: Based on the weather data and loading state, render appropriate JSX elements. Include handling for error scenarios. Show the 'temperature' and 'summary' of the fetched data.
};

export default WeatherInRome;
*/
import useFetchWeather from './useFetchWeather';

const WeatherInRome = () => {
  // TODO: Call your custom hook to fetch weather data for Rome using its latitude and longitude: '41.902782' and '12.496366', respectively. Check the useFetchWeather.js for hook implementation details.
  // API URL: https://api-regional.codesignalcontent.com/weatherManager/getWeather
  const { weather, isLoading, error } = useFetchWeather('https://api-regional.codesignalcontent.com/weatherManager/getWeather', '41.902782', '12.496366');

  // TODO: Based on the weather data and loading state, render appropriate JSX elements. Include handling for error scenarios. Show the 'temperature' and 'summary' of the fetched data.

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>; // Render error message

  return (
    <div>
      Temperature: {weather.temperature}
      <br />
      Summary: {weather.summary}
    </div>
  );
};

export default WeatherInRome;