import React from 'react'
import Caracter from './Caracter'

const CaractersList = ({players}) => {
  return (
    <div className='caracterlist'>
      {players.map(el=><Caracter el={el}/>)}
    </div>
  )
}

export default CaractersList
