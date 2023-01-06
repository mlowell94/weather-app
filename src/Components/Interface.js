import React from 'react'
import Text from './Text'
import Buttons from '../assets/buttons.png'
import Folder from '../assets/folder.png'

const Interface = (props) => {
  return (
    <div className='interface' id={props.interfaceOpen ? 'opened' : ''}>
        <div className='header'>
            <span className='current-city'>
                <span>
                    <img className='icon' src={Folder} alt='Windows XP style folder icon'/>
                    {props.city}
                    </span>
            </span>
            <img src={Buttons} alt='Windows 2000 style menu buttons'/>
        </div>
        <Text text = {props.city}/>
        <div className='lower'>
            <input placeholder='Enter a city' onKeyUp={props.submit}></input>
            <div className='systems'>
                <span 
                className='celsius' 
                id={props.system === 'metric' ? 'active' : ''}
                onClick={() => props.system === 'metric' ? null : props.click()}
                >°C</span>
                /
                <span 
                className='farenheit' 
                id={props.system === 'imperial' ? 'active' : ''}
                onClick={() => props.system === 'imperial' ? null : props.click()}
                >°F</span>
            </div>
        </div>
    </div>
  )
}

export default Interface