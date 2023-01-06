import React from 'react'

const Weather = (props) => {
  return (
    <div className='weather'>
        <span className='weather-text'>{props.text ? props.text[0].toUpperCase() + props.text.slice(1) : '???'}</span>
    </div>
  )
}

export default Weather