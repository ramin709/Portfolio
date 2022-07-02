import React, { FunctionComponent } from 'react'
import { IServices } from '../../type'
import { IconType } from 'react-icons'
import style from './ServiceCard.module.css'

type ServiceCardProps = {
    service: IServices,
    Icon: IconType
}

const ServiceCard: FunctionComponent<ServiceCardProps> = ({ service, Icon }) => {


    return (

        <div className={style.container}>
            <div className={style.header}>
                <Icon className={style.icon} />
                <h5>{service.title}</h5>
            </div>

            <div className={style.description}>
                <p>{service.about}</p>
            </div>
        </div>
    )
}

export default ServiceCard