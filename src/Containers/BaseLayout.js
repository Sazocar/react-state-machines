import React from 'react'
import { useMachine } from '@xstate/react'
import { Nav } from '../Components/Nav'
import { StepsLayout } from './StepsLayout'
import { Spinner } from '../Components/Spinner'
import bookingMachine from '../Machines/bookingMachine'
import './BaseLayout.css'

export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine)

  const renderContent = () => {
    if (state.matches('loading'))
      return (
        <div className='Layout'>
          <Spinner send={send} />
        </div>
      )
    if (state.matches('initial'))
      return (
        <div className='BaseLayout'>
          <Nav state={state} send={send} />
          <StepsLayout state={state} send={send} />
        </div>
      )
    else
      return (
        <div className='BaseLayout'>
          <Nav state={state} send={send} />
          <StepsLayout state={state} send={send} />
        </div>
      )
  }

  return <>{renderContent()}</>
}
