import React, { useState } from 'react';
import './Passengers.css';

export const Passengers = ({ state, send }) => {
  const [value, changeValue] = useState('');

  const onChangeInput = (e) => {
    changeValue(e.target.value);
  }

  const submit = (e) => {
    e.preventDefault();
    changeValue('');
  }

  const handleOnContinue = () => {
    send('DONE')
  }

  return (
    <form onSubmit={submit} className='Passengers'>
      <p className='Passengers-title title'>
        Add the people who are going to fly ✈️
      </p>
      <input
        id='name'
        name='name'
        type='text'
        placeholder='Enter your full name'
        required
        value={value}
        onChange={onChangeInput}
      />
      <div className='Passengers-buttons'>
        <button className='Passengers-add button-secondary' type='submit'>
          Add Passenger
        </button>
        <button
          onClick={handleOnContinue}
          className='Passenger-pay button'
          type='button'
        >
          Check your ticket
        </button>
      </div>
    </form>
  )


};