import React from 'react';
import { Welcome } from '../Components/Welcome';
import { Search } from '../Components/Search';
import { Passengers } from '../Components/Passengers';
import { Tickets } from '../Components/Tickets';
import './StepsLayout.css';

export const StepsLayout = ({ state, send }) => {
  const renderContent = () => {
    switch (state.value) {
      case 'initial':
        return <Welcome send={send} />
      case 'search':
        return <Search send={send} />
      case 'passengers':
        return <Passengers send={send} />
      case 'tickets':
        return <Tickets send={send} />
      default:
        return null
    }
  };

  return (
    <div className='StepsLayout'>
      {renderContent()}
    </div>
  );
}; 