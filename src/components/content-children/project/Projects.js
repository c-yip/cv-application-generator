import React from 'react';
import ProjectsBullet from "./ProjectsBullet"

export default function Projects(props) {  
  return (
    <div>
      <label htmlFor="projectTitle">Project Title</label>
        <input
          type="text"
          placeholder="Title"
          className="input"
          name="projectTitle"
          onChange={props.handleProjectChange}
          value={props.projectData.projectTitle}
        />

        <label htmlFor="projectLink">Live Link</label>
        <input
          type="text"
          placeholder="Link"
          className="input"
          name="projectLink"
          onChange={props.handleProjectChange}
          value={props.projectData.projectLink}
        />

        <label htmlFor="projectRepo">Repo Link</label>
        <input
          type="text"
          placeholder="Link"
          className="input"
          name="projectRepo"
          onChange={props.handleProjectChange}
          value={props.projectData.projectRepo}
        />

        <label htmlFor="projectDescription">Project Description</label>
        <textarea
          type="text"
          placeholder="Project Description"
          className="input"
          name="projectDescription"
          onChange={props.handleProjectChange}
          value={props.projectData.projectDescription}
        />

        <label htmlFor="projectBullet">Project Bullet</label>
        {props.projectData.projectBullets.map((projectBullet, index) => {
          return (
            <ProjectsBullet
              key={index}
              projectBulletData={projectBullet.projectBullet}
              handleProjectBulletChange={(e) => props.handleProjectBulletChange(e, props.index, index)}
            />
          )
        })}
        <button type="button" onClick={props.addProjectBullet}>+ Add Bullet</button>
    </div>
  )
}