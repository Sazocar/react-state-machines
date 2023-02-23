import React from 'react';
import './Tickets.css';

export const Tickets = ({ state, send }) => {
  const handleOnFinish = () => {
    send('FINISH')
  };

  return (
    <div className='Tickets'>
      <p className='Tickets-description description'>Thanks for flying with us </p>
      <div className='Tickets-ticket'>
        <div className='Tickets-country'>{state.context.selectedCountry}</div>
        <div className='Tickets-passengers'>
          {state.context.passengers.map((passenger) => (
            <p key={passenger}>{passenger}</p>
          ))}
          <span>✈</span>
        </div>
      </div>
      <button disabled={!state.context.passengers} onClick={handleOnFinish} className='Tickets-finalizar button'>
        Finish
      </button>
    </div>
  )



}; 