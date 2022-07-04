import React from 'react'
import style from '../styles/Resume.module.css'
import Skill from '../components/Skill/Skill'
import { ISkill } from '../type'
import { skills , tools } from '../data'

const resume = () => {
  return (
    <div>
      <div className={style.information}>
        <div className={style.education}>
          <h5>Education</h5>
          <span className={style.title}>Computer Science</span>
          <span className={style.subTitle}>Washington University (2016-2020)</span>
          <p className={style.description}>
            I am pursing B.Tech Degree(Final year) in computer science engineering from the Washington University.
          </p>
        </div>

        <div className={style.experience}>
          <h5>Experience</h5>
          <span className={style.title}>Software Engineer junior</span>
          <span className={style.subTitle}>TSC (2020 - on)</span>
          <p className={style.description}>
            I have +3 years of experience in web development and I have many certificates about the computer and web programming.
          </p>
        </div>
      </div>

      <div className={style.skills}>
        <div className={style.languagesAndFrameworks}>
          <h5>Frameworks and Languages</h5>
          {
            skills.map(skill => <Skill data={skill} key={skill.name}></Skill>)
          }
        </div>

        <div className={style.tools}>
          <h5>Frameworks and Languages</h5>
          {
            tools.map(tool => <Skill data={tool} key={tool.name}></Skill>)
          }
        </div>
      </div>
    </div>
  )
}

export default resume