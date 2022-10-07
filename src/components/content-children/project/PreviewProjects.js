import PreviewProjectBullets from './PreviewProjectBullets';

export default function PreviewProjects(props) {
  return (
    <div className="projects">
      <p className="project-title">{props.projectData.projectTitle}</p>
      <div className="project-languages-links">
        <p className="project-languages">{props.projectData.projectLanguages} |</p>
        {/* <p className="project-link">{props.projectData.projectLink}</p> */}
        <p className="project-repo">{props.projectData.projectRepo}</p>
      </div>
      
      <ul className="project-bullet-container">
      {props.projectData.projectBullets.map((bullet, index) => 
        <PreviewProjectBullets key={index} projectBulletData={bullet.projectBullet} />
      )}
      </ul>
    </div>
  )
}