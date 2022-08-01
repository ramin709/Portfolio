import style from '../styles/Resume.module.css'
import Skill from '../components/Skill/Skill'
import { motion } from 'framer-motion'
import { skills, tools } from '../data'
import Head from 'next/head'

const resume = () => {

  const animation = {
    initial: {
      y: 100,
      opacity: 0
    },

    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      }
    }
  }

  return (
    <div>
      <Head>
        <title>
          Resume Page
        </title>
        <meta name="description" content="This is an example of a meta description. This will often show up in search results."/>
      </Head>
      <div className={style.information}>
        <motion.div className={style.education} initial="initial" animate="animate" variants={animation} >
          <h5>Education</h5>
          <span className={style.title}>Computer Science</span>
          <span className={style.subTitle}>Washington University (2016-2020)</span>
          <p className={style.description}>
            I am pursing B.Tech Degree(Final year) in computer science engineering from the Washington University.
          </p>
        </motion.div>

        <motion.div className={style.experience} initial="initial" animate="animate" variants={animation}>
          <h5>Experience</h5>
          <span className={style.title}>Software Engineer junior</span>
          <span className={style.subTitle}>TSC (2020 - on)</span>
          <p className={style.description}>
            I have +3 years of experience in web development and I have many certificates about the computer and web programming.
          </p>
        </motion.div>
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