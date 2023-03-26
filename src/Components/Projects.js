import React from 'react'
import ProjectsData from '../Data/ProjectsData'
import Project from './Project'

const Projects = () => {
  return (
    <article id="project">
      <h1 className='title'>My <span>Projects</span></h1>
      <section className='projects'>
        {ProjectsData.data.projects.map((project) => {
          return <Project project={project} />
        })}
      </section>
    </article>
  )
}

export default Projects
