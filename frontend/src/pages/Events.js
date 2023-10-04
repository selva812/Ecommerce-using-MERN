import React from 'react'
import Header from '../components/Layout/Header'
import Eventcard from '../components/Event/Eventcard'

const Events = () => {
  return (
    <div>
        <Header activeheading={4}/>
        <Eventcard/>
        <Eventcard/>
    </div>
  )
}

export default Events