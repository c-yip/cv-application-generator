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

        <label htmlFor="projectDescription">Project Description Bullet</label>
        <input
          type="text"
          placeholder="Description"
          className="input"
          name="projectDescriptionBullet"
          onChange={props.handleProjectChange}
          value={props.projectData.projectDescriptionBullet}
        />
    </div>
  )
}