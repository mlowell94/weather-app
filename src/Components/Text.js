import React from 'react'

const Text = (props) => {
  if(props.prefix) {
  return (
    <div className='prefixed'>
        <span><b>{props.prefix}</b></span>
        <span>{props.text}</span>
    </div>
    )
  } else {
    return (
    <div className='nofixed'>
      <span>{props.text}</span>
    </div>
    )
  }
}

export default Text