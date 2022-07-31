import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import ProjectNavbar from '../components/ProjectNavbar/ProjectNavbar'
import { projects as sampleProjects } from '../data'
import style from '../styles/Projects.module.css'
import { Category, IProject } from '../type'
import {motion} from 'framer-motion'

const Projects = () => {

  const [projects, setProjects] = useState<Array<IProject>>(sampleProjects)
  const [active, setActive] = useState<Category | 'all'>('all')

  const outerAnimation = {
    initial: {
        
    },

    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const animation = {
    initial: {
      y: 100,
      opacity: 0
    },

    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  }

  console.log(active);
  console.log(projects)

  const handleProject = (filter: Category | 'all') => {
    if(filter === 'all'){
      setProjects(sampleProjects)
      setActive('all')
    }else {
      const filteredProjects = sampleProjects.filter(project => project.category.includes(filter) )
      setProjects(filteredProjects)
      setActive(filter)
    }
  }

  return (
    <div>

    <nav className={style.navbar}>
      <ProjectNavbar handler={handleProject} />
    </nav>

    <motion.div className={style.projectsContainer} initial="initial" animate="animate" variants={outerAnimation}>
        {
          projects.map(project => (
            <motion.div className={style.projectContainer} key={project.image_src} variants={animation}>
              <ProjectCard project={project} />
            </motion.div>
          ))
        }
    </motion.div>






    </div>
  )
}

export default Projects