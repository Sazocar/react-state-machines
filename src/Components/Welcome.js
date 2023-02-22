import React from 'react';
import './Welcome.css';

export const Welcome = ({ send }) => {
  const startBooking = () => {
    send('START')
  };

  return (
    <div className='Welcome'>
      <p className='Welcome-title title'>Today is the day!</p>
      <p className='Welcome-description description'>
        Buy your flight and get to know a new corner of the world, you will be
        surprised by the wonders that there are to explore
      </p>
      <button onClick={startBooking} className='Welcome-cancel button'>
        Start
      </button>
    </div>
  )

}; 