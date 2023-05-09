import React from 'react'

const Menu = ({char, isActive}) => {
  return (
    <div id={char} className={`char ${isActive ? "active" : ""}`} >
      {char}
    </div>
  )
}

export default Menu