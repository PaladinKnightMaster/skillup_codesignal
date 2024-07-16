/*
import { useState, useEffect } from 'react';

function CountryStats() {
  // TODO: Define state variables for countryName with default 'France' and countryInfo as an object with properties name and capital

  // TODO: Use the useEffect hook to fetch country stats when countryName changes

  // TODO: Inside useEffect, fetch the data from the API and update countryInfo state
  // Handle the loading state, error state, and update the countryInfo with fetched data

  // TODO: Render the countryInfo on the screen, showing country name and capital

}

export default CountryStats;
*/
import { useState, useEffect } from 'react';

function CountryStats() {
  // TODO: Define state variables for countryName with default 'France' and countryInfo as an object with properties name and capital
  const [countryName, setCountryName] = useState('France');
  const [countryInfo, setCountryInfo] = useState({ name: 'France', capital: ['Paris'] });

  // TODO: Use the useEffect hook to fetch country stats when countryName changes
  // TODO: Inside useEffect, fetch the data from the API and update countryInfo state
  // Handle the loading state, error state, and update the countryInfo with fetched data

  useEffect(() => {
    fetch(`https://api-regional.codesignalcontent.com/countryStats/search?name=${countryName}`)
      .then(response => response.json())
      .then(data => setCountryInfo(data.data[0]))
      .catch(error => console.error('Error:', error));
  }, [countryName]);

  // TODO: Render the countryInfo on the screen, showing country name and capital

  return (
    <div>
      <select value={countryName} onChange={event => setCountryName(event.target.value)}>
        <option value="France">France</option>
        <option value="Italy">Italy</option>
        <option value="Germany">Germany</option>
      </select>
      <h1>{countryInfo?.name}</h1>
      {countryInfo?.capital?.map((capital) => <p key={capital}>{capital}</p>)}
    </div>
  );

}

export default CountryStats;