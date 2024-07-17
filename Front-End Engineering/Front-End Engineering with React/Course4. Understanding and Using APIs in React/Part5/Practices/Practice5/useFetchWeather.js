/*
import { useState, useEffect } from 'react';

const useFetchWeather = (url, lat, lng) => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${url}?lat=${lat}&lng=${lng}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setWeather(data.weather);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });

    // No cleanup function needed as nothing to cancel/cleanup here
  }, [url, lat, lng]);

  return { weather, isLoading, error };
};

export default useFetchWeather;
*/
import { useState, useEffect } from 'react';

const useFetchWeather = (url, lat, lng) => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${url}?lat=${lat}&lng=${lng}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setWeather(data.weather);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });

    // No cleanup function needed as nothing to cancel/cleanup here
  }, [url, lat, lng]);

  return { weather, isLoading, error };
};

export default useFetchWeather;