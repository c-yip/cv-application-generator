import PreviewEducation from "./PreviewEducation";
import PreviewProjects from "./PreviewProjects";
import PreviewExperience from "./PreviewExperience";

export default function Preview(props) {
  // converts numbers to phone number format
  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  }
  
  return (
    <div className="resume-page">
      
      <div className="personal-info">
        <div className="name">
          <h1>{props.data.firstName} {props.data.middle} {props.data.lastName}</h1>
        </div>
        <div className="contact">
          <p>{props.data.location}</p>
          <p>{props.data.email}</p>
          <p>{formatPhoneNumber(props.data.phone)}</p>
          <p>{props.data.linkedIn}</p>
        </div>
      </div>

      <div className="objective">
        <h2 className="objective-title">Objective</h2>
        <p className="objective-info">{props.data.objective}</p>
      </div>

      <div className="projects">
        <h2 className="project-title">Projects</h2>
        { props.projectData.map((project, index) => {
          return (
            <PreviewProjects 
              key={index} 
              projectData={project} 
              projectBulletData={project.projectBullets.map((bullet, index2) => bullet.projectBullet)}
            />
          )
          })}
        
      </div>

      <div className="experience">
        <h2 className="experience-title">Experience</h2>
        { props.experienceData.map((experience, index) => <PreviewExperience key={index} data={experience} />) }
      </div>
      
      <h2 className="education-title">Education</h2>
      { props.schoolData.map((school, index) => <PreviewEducation key={index} schoolData={school}/>) } 

      <div className="skills">
        <h2 className="skills-title">Skills</h2>
        <p className="skill-name">{props.data.skillTitle}</p>
        <p className="skill-description">{props.data.skillDescription}</p>
      </div>

    </div>
  )
}