import React, { useEffect, useState } from 'react'

const Clock = (props) => {
    const [clock, setClock] = useState(props.clock)
    
    const updateClock = () => {
    const test = () => setInterval(() => {
        setClock(prevClock => prevClock + 1000) // new
        console.log()
      }, 1000)
      props.handler(test);
    }
    
    useEffect(() => {
      updateClock()
    }, [])

    useEffect(() => {
        if(props.clock !== undefined) {
            setClock(props.clock) 
        }
    }, [props])

    const date = new Date(clock)
    const timeToString = () => {
        let newString = '';
        if (date.getHours() >= 13) {
            newString += (date.getHours() - 12)  + ':';
        } else {
            newString += date.getHours() + ':';
        }
        date.getMinutes() < 10 ? newString += '0' + date.getMinutes() + ':' : newString += date.getMinutes() + ':';
        date.getSeconds() < 10 ? newString += '0' + date.getSeconds() : newString += date.getSeconds();
        if (date.getHours() >= 13) {
            newString += ' PM';
        } else {
            newString += ' AM';
        }
        return newString;
    }
    const dateToString = () => {
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    }

    return (
        <div>
            {props.mode === 'time' ? timeToString() : dateToString()}
        </div>
        )
    }

export default Clock