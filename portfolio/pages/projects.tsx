import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import ProjectNavbar from '../components/ProjectNavbar/ProjectNavbar'
import { projects as sampleProjects } from '../data'
import style from '../styles/Projects.module.css'
import { Category, IProject } from '../type'

const Projects = () => {

  const [projects, setProjects] = useState<Array<IProject>>(sampleProjects)
  const [active, setActive] = useState<Category | 'all'>('all')

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

    <div className={style.projectsContainer}>
        {
          projects.map(project => (
            <div className={style.projectContainer} key={project.image_src}>
              <ProjectCard project={project} />
            </div>
          ))
        }
    </div>






    </div>
  )
}

export default Projects