/*
import useFetchCountry from './useFetchCountry';

const CountryDetails = () => {
  const { data: country, loading, error } = useFetchCountry('https://api-regional.codesignalcontent.com/countryStats/search?name=France');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>; // Render error message
  if (!country || !country.capital || country.capital.length === 0) {
    return <div>Capital information is not available.</div>; // Handling possible undefined access
  }

  return <div>Capital: {country.capital[0]}</div>;
};

export default CountryDetails;
*/
import useFetchCountry from './useFetchCountry';

const CountryDetails = () => {
  const { data: country, loading, error } = useFetchCountry('https://api-regional.codesignalcontent.com/countryStats/search?name=Germany');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>; // Render error message
  if (!country || !country.capital || country.capital.length === 0) {
    return <div>Capital information is not available.</div>; // Handling possible undefined access
  }

  return <div>Capital: {country.capital[0]}</div>;
};

export default CountryDetails;