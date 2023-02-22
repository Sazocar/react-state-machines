import React, { useState } from 'react'
import './Passengers.css'

export const Passengers = ({ state, send }) => {
  const [value, setValue] = useState('')

  const onChangeInput = (e) => {
    setValue(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()
    send('ADD', { newPassenger: value })
    setValue('')
  }

  const handleOnContinue = () => {
    send('DONE')
  }

  return (
    <form onSubmit={submit} className='Passengers'>
      <p className='Passengers-title title'>
        Add the people who are going to fly ✈️🌏
      </p>

      {state.context.passengers.map((passenger, index) => (
        <p key={`${passenger}-${index}`} className='text'>
          {passenger}
        </p>
      ))}

      <input
        id='name'
        name='name'
        type='text'
        placeholder='Enter your full name'
        required
        value={value}
        onChange={onChangeInput}
        autoFocus
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
}


