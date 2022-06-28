import React from 'react'
import {servieces} from '../data'

const index = () => {
  return (
    <div>
      {servieces.map((service , index) => (<span key={index}>{service.title}</span>))}
    </div>
  )
}

export default index