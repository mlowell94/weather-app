import React from 'react'
import error from '../assets/error.png'
import Buttons from '../assets/buttons.png'

const Error = (props) => {
  return (
    <div className='error' id={props.errorShown ? 'opened' : ''}>
        <div className='header'>
            <span className='current-city'>
                <span>
                    <img className='icon' src={error} alt='Windows 2000 style error icon'/>
                    Error!
                </span>
          </span>
          <img src={Buttons} alt='Windows 2000 style menu buttons'/>
      </div>
      <span>
        Please use one of the following formats:
        <br/>
        'City Name'
        <br/>
        'City Name, Country Name'
        <br/>
        'City Name, US State Name, United States'
        </span>
    </div>
  )
}

export default Error