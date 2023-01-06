import React from 'react'
import Text from './Text'
import Weather from './Weather'
import Clock from './Clock'
import Buttons from '../assets/buttons.png'
import pc from '../assets/pc.png'


const Data = (props) => {
  if(!props.clock) {
    return (
      <div className='data'>
      <div className='header'>
        <span className='current-city'>
            <span>
                <img className='icon' src={pc} alt='Windows XP style folder icon'/>
                Weather
                </span>
        </span>
        <img src={Buttons} alt='Windows 2000 style menu buttons'/>
      </div>
      <Text text = {'??/??/???'}/>
      <Text text = {'??: ??: ??'}/>
      <Weather text = {props.description} url = {props.url}/>
      <Text prefix = {'Currently:'} text = {'??'}/>
      <Text prefix = {'Feels like:'} text = {'??'}/>
      <Text prefix = {'High:'} text = {'??'  + props.system}/>
      <Text prefix = {'Low:'} text = {'??'  + props.system}/>
</div>
    )
  }
  return (
    <div className='data' id={props.dataOpen ? 'opened' : ''}>
          <div className='header'>
            <span className='current-city'>
                <span>
                    <img className='icon' src={pc} alt='Windows XP style folder icon'/>
                    Weather
                    </span>
            </span>
            <img src={Buttons} alt='Windows 2000 style menu buttons'/>
        </div>
        <div className='time'>
          <Clock clock= {props.clock} handler = { props.dateIDHandler } mode = 'date'/>
          <Clock clock = {props.clock} handler = { props.timeIDHandler } mode = 'time'/>
        </div>
        <Weather text = {props.description} url = {props.url}/>
        <Text prefix = {'Current:'} text = {props.temp + props.system}/>
        <Text prefix = {'Feels:'} text = {props.feelsLike + props.system}/>
        <Text prefix = {'High:'} text = {props.max  + props.system}/>
        <Text prefix = {'Low:'} text = {props.min  + props.system}/>
    </div>
  )
}

export default Data