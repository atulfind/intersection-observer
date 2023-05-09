import React from 'react'

const Country = (props) => {
  return (
    <div className='country' id={props.country.name}>
      <div className='title'>{props.country.name}</div>
      <div className='sub-title'>{props.country.code}</div>
    </div>
  )
}

export default Country