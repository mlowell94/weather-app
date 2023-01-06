import React, { useState, useEffect } from 'react';
import Data from './Components/Data';
import Interface from './Components/Interface';
import TextRelay from './Components/TextRelay';
import Error from './Components/Error'

const lookup = require('country-code-lookup');
const states = require('us-state-codes');

const App = () => {
  const [data, setData] = useState(null)
  const [system, setSystem] = useState('metric')
  const [clock, setClock] = useState(0)
  const [city, setCity] = useState('London')
  const [errorShown, setErrorShown] = useState(false)
  const [dateID, setDateID] = useState(0);
  const [timeID, setTimeID] = useState(0);
  const [dataOpen, setDataOpen] = useState(false);
  const [interfaceOpen, setInterfaceOpen] = useState(false)
  const [textOpen, setTextOpen] = useState(false)
  
  useEffect(() => {
    const dataInit = async () => {
      const weatherResponse = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=36ddeb5b0b846ad0146840686166d1c3', {mode: 'cors'});
      const weatherResult = await weatherResponse.json(); 
      setData(weatherResult);

      const timeResponse = await fetch('https://api.timezonedb.com/v2.1/get-time-zone?key=Q0RXG90J3FC2&format=json&by=position&lat=' +
      weatherResult.coord.lat + '&lng=' + weatherResult.coord.lon, {mode : 'cors'})
      const timeResult = await timeResponse.json()
      const dateInNumbers = new Date(timeResult.formatted.replace(' ', 'T')).getTime()
      setClock(dateInNumbers);
    }
    dataInit();
  }, [])

  const createQuery = (someArray) => {
    if(someArray.length === 1) {
      return someArray[0];
  } else if (someArray.length === 2) {
      const convertedCountry = lookup.byCountry(someArray[1]);
      if(convertedCountry === null) {
          return;
      }
      const searchQuery = someArray[0] + ',' + convertedCountry.country;
      console.log(searchQuery);
      return searchQuery;
  } else {
      const convertedState = states.getStateCodeByStateName(someArray[1]);
      const searchQuery = someArray[0] + ',' + convertedState + '-US,US';
      console.log(searchQuery);
      return searchQuery;
  }
  }
  
  const getNewLocation = async (location, system) => {
    const search = location.split(', ');
    const searchQuery = createQuery(search);
    const weatherResponse = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchQuery + '&units=' + system + '&appid=36ddeb5b0b846ad0146840686166d1c3', {mode: 'cors'});
    if(weatherResponse.status === 200) {
      const weatherResult = await weatherResponse.json();
      setData(weatherResult);

      const timeResponse = await fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=Q0RXG90J3FC2&format=json&by=position&lat=' +
      weatherResult.coord.lat + '&lng=' + weatherResult.coord.lon, {mode : 'cors'})
      const timeResult = await timeResponse.json()
      const dateInNumbers = new Date(timeResult.formatted.replace(' ', 'T')).getTime()

      setClock(dateInNumbers);

      return true;
    } else {
      console.log(weatherResponse);
      return false;
    }
  }

  const handleSubmit = async (e) => {
    if(e.key === 'Enter') {
      const req = await getNewLocation(e.target.value, system)
      console.log(req)
      if(req) {
        setCity(e.target.value.split(', ')[0]);
        setErrorShown(false);
      } else {
        setErrorShown(true);
      }
      e.target.value = '';
    }
  }

  const handleChangeSystem = async () => {
    setSystem(() => system === 'metric' ? 'imperial' : 'metric')
    getNewLocation(data.name, system === 'metric' ? 'imperial' : 'metric')
  }

  const dateIDHandler = (someInt) => {
    setDateID(someInt);
  }

  const timeIDHandler = (someInt) => {
    setTimeID(someInt);
  }

  setTimeout(() => {
    setInterfaceOpen(true)
  }, 250)

  setTimeout(() => {
    setDataOpen(true)
  }, 500)

  setTimeout(() => {
    setTextOpen(true)
  }, 750)

  if(data) {
    return (
      <div className="App">
        <Interface 
        city = { city }
        submit = { handleSubmit }
        click = { handleChangeSystem }
        system = { system }
        interfaceOpen = { interfaceOpen }
        />

        <Data 
        clock = {clock}
        dateIDHandler = { dateIDHandler }
        timeIDHandler = { timeIDHandler }
        temp = {data.main.temp}
        feelsLike = {data.main.feels_like}
        max = {data.main.temp_max}
        min = {data.main.temp_min}
        description = {data.weather[0].description}
        url = {data.weather[0].icon}
        system = {system === 'metric' ?' °C' : '°F'}
        dataOpen = { dataOpen }
        /> 

        <TextRelay 
        data = { data }
        clock = { clock }
        timeID = { timeID }
        dateID = { dateID }
        textOpen = { textOpen }
        />

        <Error
        errorShown = { errorShown }
        />

      <div className='footer'>made by micheal</div>
  
      </div>
    )
  }
  return (
    <div className="App">
      <Interface />
      <Data /> 
      <TextRelay />
      <div className='footer'>made by micheal</div>
    </div>
  );
}

export default App;
