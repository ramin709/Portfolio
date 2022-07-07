import React from 'react'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import { projects } from '../data'
import style from '../styles/Projects.module.css'

const Projects = () => {
  return (
    <div>

    <nav>Navbar</nav>

    <div className={style.projectsContainer}>
        {
          projects.map(project => (
            <div className={style.projectContainer}>
              <ProjectCard project={project} />
            </div>
          ))
        }
    </div>






    </div>
  )
}

export default Projects