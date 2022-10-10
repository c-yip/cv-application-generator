import React from 'react';
import Schools from './content-children/education/Schools';
import Preview from './content-children/Preview';
import Projects from './content-children/project/Projects';
import Experience from './content-children/experience/Experience';
import Skills from './content-children/Skills';

export default function Content(props) {  
  // education
  const [schoolData, setSchoolData] = React.useState([
    {
      schoolName: 'Chapman University Dale E. Fowler School of Law', schoolLocation: 'Orange, CA', schoolDegree: 'Juris Doctor', schoolStartDate: '', schoolEndDate: '', schoolCurrent: false,
    }
  ]);

  function handleSchoolChange(event, indexToChange) {
    const { name, value, type, checked } = event.target;
    setSchoolData(prevData => {
      // iterates through schoolData array and returns a new array with the updated value
      // if the index matches the indexToChange, it updates the value
      // otherwise, it returns the previous value
      return prevData.map((school, index) => index === indexToChange ? {
        ...prevData[index],
        [name]: type === 'checkbox' ? checked : value
      } : school);
    });
    console.log(schoolData);
  }

  function addSchool() {
    // adds a new school object to the schoolData array
    setSchoolData(prevData => [...prevData, {
      schoolName: '', schoolLocation: '', schoolDegree: '', schoolStartDate: '', schoolEndDate: '', schoolCurrent: false,
    }]);
  }

  // projects
  const [projectData, setProjectData] = React.useState([
    {
      projectTitle: 'Project Title', projectLink: '', projectRepo: 'https://github.com/project', projectLanguages: 'React, JavaScript, HTML, CSS', 
      projectBullets: [{projectBullet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},],
    }
  ]);

  function handleProjectChange(event, indexToChange) {
    const { name, value, type, checked } = event.target;
    setProjectData(prevData => {
      return prevData.map((project, index) => index === indexToChange ? {
        ...prevData[index],
        [name]: type === 'checkbox' ? checked : value
      } : project);
    });
    console.log(projectData);
  }

  function addProject() {
    setProjectData(prevData => [...prevData, {
      projectTitle: '', projectLink: '', projectRepo: '', projectLanguages: '',
      projectBullets: [{projectBullet: ''},],
    }]);
  }

  function handleProjectBulletChange(event, projectIndex, bulletIndex) {
    const { name, value } = event.target;
    console.log('project index', projectIndex);
    console.log('bullet index', bulletIndex);
    setProjectData(prevData => {
      return prevData.map((project, index) => index === projectIndex ? {
        ...prevData[index],
        projectBullets: prevData[index].projectBullets.map((projectBullet, index2) => index2 === bulletIndex ? {
          ...prevData[index].projectBullets[index2],
          [name]: value
        } : projectBullet)
      } : project);
    });
    console.log(projectData);
  }

  function addProjectBullet(indexToChange) {
    // add project bullet to projectBullets array
    setProjectData(prevData => {
      return prevData.map((project, index) => index === indexToChange ? {
        ...prevData[index],
        projectBullets: [...prevData[index].projectBullets, {projectBullet: ''},]
      } : project);
    });
    console.log('bullet added', projectData);
  }

  // experience
  const [experienceData, setExperienceData] = React.useState([
    {
      experienceTitle: 'Your title', experienceCompany: 'Company Name', experienceStartDate: '', experienceEndDate: '', experienceCurrent: false, experienceDescription: '', experienceCityState: 'City, State',
      experienceBullets: [{experienceBullet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},],
    }
  ]);

  function handleExperienceChange(event, indexToChange) {
    const { name, value, type, checked } = event.target;
    setExperienceData(prevData => {
      return prevData.map((experience, index) => index === indexToChange ? {
        ...prevData[index],
        [name]: type === 'checkbox' ? checked : value
      } : experience);
    });
    console.log(experienceData);
  }

  function handleExperienceBulletChange(event, experienceIndex, bulletIndex) {
    const { name, value } = event.target;
    setExperienceData(prevData => {
      return prevData.map((experience, index) => index === experienceIndex ? {
        ...prevData[index],
        experienceBullets: prevData[index].experienceBullets.map((experienceBullet, index2) => index2 === bulletIndex ? {
          ...prevData[index].experienceBullets[index2],
          [name]: value
        } : experienceBullet)
      }: experience);
    })
  }

  function addExperience() {
    setExperienceData(prevData => [...prevData, {
      experienceTitle: '', experienceCompany: '', experienceStartDate: '', experienceEndDate: '', experienceCurrent: false, experienceDescription: '',
      experienceBullets: [{experienceBullet: ''},],
    }]);
  }

  function addExperienceBullet(indexToChange) {
    setExperienceData(prevData => {
      return prevData.map((experience, index) => index === indexToChange ? {
        ...prevData[index],
        experienceBullets: [...prevData[index].experienceBullets, {experienceBullet: ''},]
      } : experience);
    });
  }

  // skills
  const [skillData, setSkillData] = React.useState([
    {
      skillName: 'Skill Name', skillDescription: 'Description of skill',
    },
  ]);

  function handleSkillChange(event, indexToChange) {
    const { name, value } = event.target;
    setSkillData(prevData => {
      return prevData.map((skill, index) => index === indexToChange ? {
        ...prevData[index],
        [name]: value
      } : skill);
    });
    console.log(skillData);
  }

  function addSkill() {
    setSkillData(prevData => [...prevData, {
      skillName: '', skillDescription: '',
    }]);
  }

  return (
    <div className='content'>

      <form className='form'>
        <legend>Personal Information</legend>
        <label htmlFor="firstName">First Name</label>
        <input 
          type="text"
          placeholder="First Name"
          className="input"
          name="firstName"
          onChange={props.handleChange}
          value={props.data.firstName}
        />

        <label htmlFor="middle">Middle Name or Initial</label>
        <input 
          type="text"
          placeholder="Middle"
          className="input"
          name="middle"
          onChange={props.handleChange}
          value={props.data.middle}
        />

        <label htmlFor="lastName">Last Name</label>
        <input 
          type="text"
          placeholder="Last Name"
          className="input"
          name="lastName"
          onChange={props.handleChange}
          value={props.data.lastName}
        />

        <label htmlFor="location">City, State</label>
        <input 
          type="text"
          placeholder="City, State"
          className="input"
          name="location"
          onChange={props.handleChange}
          value={props.data.location}
        />

        <label htmlFor="email">Email Address</label>
        <input 
          type="email"
          placeholder="Email Address"
          className="input"
          name="email"
          onChange={props.handleChange}
          value={props.data.email}
        />

        <label htmlFor="phone">Phone Number</label>
        <input 
          type="tel"
          placeholder="Phone Number"
          className="input"
          name="phone"
          onChange={props.handleChange}
          value={props.data.phone}
        />

        <label htmlFor="linkedIn">LinkedIn</label>
        <input 
          type="text"
          placeholder="LinkedIn Link"
          className="input"
          name="linkedIn"
          onChange={props.handleChange}
          value={props.data.linkedIn}
        />
        <br />

        <legend>Objective</legend>
        <textarea rows="5" cols="50"
          value={props.data.objective}
          placeholder="Capture the attention of the employer with a “power pitch”. It’s the written equivalent of your verbal response to the “why should we hire you?” interview question. Include the type of position you are seeking and the start date (“Seeking a position in software development starting November 2022.”)"
          onChange={props.handleChange}
          name="objective"
        />
        <br />

        <div>
          <legend>Projects</legend>
          <div className='project-input-div'>
            {projectData.map((project, index) => (<Projects key={index} index={index} projectData={project} handleProjectChange={(e) => handleProjectChange(e, index)} 
            handleProjectBulletChange={handleProjectBulletChange} addProjectBullet={() => addProjectBullet(index)}/>))}
          </div>
          <br />
          <button type="button" onClick={addProject}>+ Add Project</button> 
        </div>
        <br/>

        <div>
          <legend>Experience</legend>
          <div className='experience-input-div'>
            {experienceData.map((experience, index) => (<Experience key={index} index={index} experienceData={experience} handleExperienceChange={(e) => handleExperienceChange(e, index)} 
            handleExperienceBulletChange={handleExperienceBulletChange} addExperienceBullet={() => addExperienceBullet(index)}/>))}
          </div>
          <br />
          <button type="button" onClick={addExperience}>+ Add Experience</button>
        </div>
        <br />

        <div>
          <legend>Education</legend>
          {/* iterates through schoolData, returns Schools component, handleChange takes in event param and index of schoolData */}
          <div className='education-input-div'>
            {schoolData.map((school, index) => (<Schools key={index} schoolData={school} handleSchoolChange={(e) => handleSchoolChange(e, index)} />))}
          </div>
          <br/>
          <button type="button" onClick={addSchool}>+ Add School</button>
        </div>
        <br />

        <div>
          <legend>Skills/Licenses/Certifications</legend>
          {skillData.map((skill, index) => <Skills key={index} skillData={skill} handleSkillChange={(e) => handleSkillChange(e, index)}/>)}
          <br />
          <button type="button" onClick={addSkill}>+ Add Skill</button>
        </div>
        <br />

        <button>Submit</button>
      </form>
      
      <div className='preview'>
        <Preview 
          data={props.data} 
          schoolData={schoolData}
          projectData={projectData}
          experienceData={experienceData}
          skillData={skillData}
        />
      </div>
    </div>
  )
}