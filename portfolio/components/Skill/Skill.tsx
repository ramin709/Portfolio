import React, { FunctionComponent } from 'react'
import { ISkill } from '../../type'
import style from './Skill.module.css'
import { motion } from 'framer-motion'
import { BsCircleFill } from 'react-icons/bs'

type SkillProps = {
  data: ISkill
}

const Skill: FunctionComponent<SkillProps> = ({ data }) => {
  const { name, level } = data

  const variants = {
    initial: {
      width: 0
    },

    animated: {
      width: level,
      transition: {
        duration: 0.8,
        type: "spring",
        damping: 5,
        stiffness: 70
        }
    }
  }

  return (
    <div className={style.container}>
      <motion.div className={style.progress} style={{ width: level }} variants={variants} animate="animated" initial="initial">
        <BsCircleFill />
        <span>{name}</span>
      </motion.div>
    </div>
  )
}

export default Skill