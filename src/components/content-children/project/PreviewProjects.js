import PreviewProjectBullets from './PreviewProjectBullets';

export default function PreviewProjects(props) {
  return (
    <div className="projects">
      <p className="project-title">{props.projectData.projectTitle}</p>
      <p className="project-link">{props.projectData.projectLink}</p>
      <p className="project-repo">{props.projectData.projectRepo}</p>
      <p className="project-description">{props.projectData.projectDescription}</p>

      <div className="project-bullet-container">
      {props.projectData.projectBullets.map((bullet, index) => 
        <PreviewProjectBullets key={index} projectBulletData={bullet.projectBullet} />
      )}
      </div>
    </div>
  )
}