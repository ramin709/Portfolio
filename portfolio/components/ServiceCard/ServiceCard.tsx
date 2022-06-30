import React, { FunctionComponent } from 'react'
import { IServices } from '../../type'
import {IconType} from 'react-icons'

type ServiceCardProps = {
    service: IServices,
    Icon: IconType
}

const ServiceCard: FunctionComponent<ServiceCardProps> = ({service , Icon}) => {
  
  
    return (

    <div>
        <Icon />
        <h5>{service.title}</h5>
        <p>{service.about}</p>
    </div>
  )
}

export default ServiceCard