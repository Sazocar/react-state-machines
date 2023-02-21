import React from 'react';
import './Tickets.css';

export const Tickets = ({ send, context }) => {
  const finish = () => {
    console.log('finish');
  };

  return (
    <div className='Tickets'>
      <p className='Tickets-description description'>Thanks for flying with us💚</p>
      <div className='Tickets-ticket'>
        <div className='Tickets-country'>Venezuela</div>
        <div className='Tickets-passengers'>
          <span>✈</span>
        </div>
      </div>
      <button onClick={finish} className='Tickets-finalizar button'>Finish</button>
    </div>
  );
}; 