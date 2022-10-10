import PreviewEducation from "./education/PreviewEducation";
import PreviewProjects from "./project/PreviewProjects";
import PreviewExperience from "./experience/PreviewExperience";

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
    <div className="resume-page" id="pdf">
      
      <div className="personal-info">
        <div className="name">
          <h1>{props.data.firstName} {props.data.middle} {props.data.lastName}</h1>
        </div>

        <div className="contact">
          <div className="location">
            <img 
              src={require("../../images/pin.png")} 
              alt="pin">
            </img> 
            <p>{props.data.location}</p>
          </div>

          <div className="email">
            <img
              src={require("../../images/email.png")}
              alt="email">
            </img>
            <p>{props.data.email}</p>
          </div>

          <div className="phone">
            <img
              src={require("../../images/phone-call.png")}
              alt="phone">
            </img>
            <p>{formatPhoneNumber(props.data.phone)}</p>
          </div>

          <div className="linkedIn">
            <img
              src={require("../../images/linkedin.png")}
              alt="linkedIn">
            </img>
            <p>{props.data.linkedIn}</p>
          </div>
        </div>

      </div>

      <div className="objective">
        <h2 className="objective-title">PROFILE</h2>
        <p className="objective-info">{props.data.objective}</p>
      </div>

      <div className="projects-div">
        <h2 className="project-heading">PROJECTS</h2>
        { props.projectData.map((project, index) => {
          return (
            <PreviewProjects 
              key={index} 
              projectData={project} 
            />
          )
          })}
        
      </div>

      <div className="experience-div">
        <h2 className="experience-title">EXPERIENCE</h2>
        { props.experienceData.map((experience, index) => <PreviewExperience key={index} data={experience} />) }
      </div>
      
      <div className="education-div">
        <h2 className="education-title">EDUCATION</h2>
        { props.schoolData.map((school, index) => <PreviewEducation key={index} schoolData={school}/>) } 
      </div>

      <div className="skills-div">
        <h2 className="skills-title-preview">SKILLS</h2>
        <div className="skills-container-preview">
          { props.skillData.map((skill, index) => {
            return (
              <div className="skill-container-preview" key={index}>
                <p className="skill-name-preview">{skill.skillName}:</p>
                <p className="skill-description-preview">{skill.skillDescription}</p>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}