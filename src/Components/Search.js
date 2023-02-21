import React, { useState } from 'react';
import './Search.css';

export const Search = ({ send, context }) => {
  const [flight, setFlight] = useState('');

  const handleSelectChange = (event) => {
    setFlight(event.target.value);
  };

  const options = ['Mexico', 'Venezuela', 'Colombia'];

  return (
    <div className='Search'>
      <p className='Search-title title'>Search your destiny</p>
      <select id="country" className='Search-select' value={flight} onChange={handleSelectChange}>
        <option value="" disabled defaultValue>Pick a country</option>
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
      </select>
      <button disabled={flight === ''} className='Search-continue button'>Continue</button>
    </div>
  );
}; 