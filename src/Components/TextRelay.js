import React, { useEffect, useState } from 'react'
import text from '../assets/text.png'
import Buttons from '../assets/buttons.png'

const TextRelay = (props) => {
  const [content, setContent] = useState('');

  const printString = (someString, name) => {
    setContent('');
    for (let i = 0; i < someString.length ; i += 1) {
      setTimeout(() => 
      {setContent(prev => prev += someString[i])}, i*100)
    }
  }

  useEffect(() => {
    let id = window.setTimeout(function() {}, 0)
    while(id--) {
      if(id !== props.clockID && id !== props.timeID) {
          window.clearTimeout(id);
        }
    }
    if(props.data) {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      const cityName = props.data.name;
      const cityDate = new Date(props.clock);
      const firstString = 'In ' + cityName + ' it is ' + days[cityDate.getDay()] + ', ' + months[cityDate.getMonth()] + ' ' + (cityDate.getDay() + 1) + ' at ' + cityDate.toLocaleTimeString();
      const secondString = cityName + ' is currently experiencing ' + props.data.weather[0].description + '.'
      const secondStringTwo =  'It is currently ' + props.data.main.temp + ' degrees, but feels like ' + props.data.main.feels_like + '.';
      const thirdString = 'The high for today is ' + props.data.main.temp_max + ' degrees.';
      const fourthString = 'The low for today is ' + props.data.main.temp_min + ' degrees.';
      const fifthString = 'Have a nice day :)'
      printString(firstString);
      setTimeout(() => printString(secondString), (firstString.length * 100) + 3000);
      setTimeout(() => printString(secondStringTwo), ((firstString.length + secondString.length) * 100) + 6000)
      setTimeout(() => printString(thirdString), ((firstString.length + secondString.length + secondStringTwo.length) * 100) + 9000)
      setTimeout(() => printString(fourthString), ((firstString.length + secondString.length  + secondStringTwo.length + thirdString.length) * 100) + 12000)
      setTimeout(() => printString(fifthString), ((firstString.length + secondString.length  + secondStringTwo.length + thirdString.length + fourthString.length) * 100) + 15000)
    }
  }, [props.clock, props.data])

  return (
    <div className='text-relay' id={props.textOpen ? 'opened' : ''}>
      <div className='header'>
            <span className='current-city'>
                <span>
                    <img className='icon' src={text} alt='Windows XP style text bubble icon'/>
                    Forecast
                </span>
          </span>
          <img src={Buttons} alt='Windows 2000 style menu buttons'/>
      </div>
      <div className='forecast-text'>{content}</div>
    </div>
  )
}

export default TextRelay