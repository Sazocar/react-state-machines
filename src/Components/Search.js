import React, { useState } from 'react';
import './Search.css';

export const Search = ({ state, send  }) => {
  const [flight, setFlight] = useState('');

  const handleSelectChange = (event) => {
    setFlight(event.target.value);
  };

  const handleOnContinue = () => {
    send('CONTINUE', { selectedCountry: flight })
  }

  let options = state.context.countries;
  options = options.sort((a,b) => {
    if (a.name.common < b.name.common)
      return -1
    return 1
  })

  return (
    <div className='Search'>
      <p className='Search-title title'>Search your destiny</p>
      <select
        id='country'
        className='Search-select'
        value={flight}
        onChange={handleSelectChange}
      >
        <option value='' disabled defaultValue>
          Pick a country
        </option>
        {options.map((option) => (
          <option value={option.name.common} key={option.name.common}>
            {option.name.common}
          </option>
        ))}
      </select>
      <button
        disabled={!flight}
        onClick={handleOnContinue}
        className='Search-continue button'
      >
        Continue
      </button>
    </div>
  )









}; 