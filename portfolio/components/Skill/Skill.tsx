import React, { FunctionComponent } from 'react'
import { ISkill } from '../../type'
import style from './Skill.module.css'
import {BsCircleFill} from 'react-icons/bs'

type SkillProps = {
    data: ISkill
}

const Skill:FunctionComponent<SkillProps> = ({data}) => {
    const {name , level} = data
  return (
    <div className={style.container}>
        <div className={style.progress} style={{width: level}}>
            <BsCircleFill/>
            <span>{name}</span>
        </div>
    </div>
  )
}

export default Skill