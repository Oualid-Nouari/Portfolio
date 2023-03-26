import React from 'react'

const Project = ({project}) => {
  return (
    <div className='project' >
      <div className='project-up'>
        <img src={project.img} alt="" />
        <div className='project-overlay'></div>
        <h1>{project.name}</h1>
      </div>
      <div className='project-btns'>
        <a href={project.codeLink} target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i> <span>Get Code</span></a>
        <a href={project.liveVersion} target="_blank" rel="noreferrer"><i class="fa-solid fa-globe"></i> <span>Go Live</span> </a>
      </div>
    </div>
  )
}

export default Project
