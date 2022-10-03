import PreviewEducation from "./PreviewEducation";

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
        <h2 className="projects-title">Projects</h2>
        <p className="projects-name">{props.data.projectTitle}</p>
        <p className="project-link">{props.data.projectLink}</p>
        <p className="project-repo">{props.data.projectRepo}</p>
        <p className="project-description">{props.data.projectDescription}</p>
        <p className="project-description-bullet">{props.data.projectDescriptionBullet}</p>
      </div>

      <div className="experience">
        <h2 className="experience-title">Experience</h2>
        <p className="employer-name">{props.data.employerName}</p>
        <p className="employer-city">{props.data.employerCity}</p>
        <p className="employer-state">{props.data.employerState}</p>
        <p className="job-title">{props.data.jobTitle}</p>
        <p className="job-bullet">{props.data.jobBullet}</p>
        <p className="job-start-date">{props.data.jobStartDate}</p>
        <p className="job-end-date">{props.data.jobEndDate}</p>
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