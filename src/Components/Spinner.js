import { useEffect } from "react"
import './Spinner.css'

const Spinner = ({ send }) => {

  useEffect(() => {
    setTimeout(() => {
      send('DONE')
    }, 1500);
  }, [])

  return (
    <>
      <div className='dot-spinner'>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
      </div>
      <p>Loading</p>
    </>
  )
}




export { Spinner }