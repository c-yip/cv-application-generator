import React from 'react';
import Schools from './content-children/Schools';
import Preview from './content-children/Preview';
import Projects from './content-children/Projects';
import Experience from './content-children/Experience';

export default function Input(props) {  
  // education
  const [schoolData, setSchoolData] = React.useState([
    {
      schoolName: '', schoolState: '', schoolCity: '', schoolDegree: '', schoolStartDate: '', schoolEndDate: '', schoolCurrent: false,
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
      schoolName: '', schoolState: '', schoolCity: '', schoolDegree: '', schoolStartDate: '', schoolEndDate: '', schoolCurrent: false,
    }]);
  }

  // projects
  const [projectData, setProjectData] = React.useState([
    {
      projectTitle: '', projectLink: '', projectRepo: '', projectDescription: '', 
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
      projectTitle: '', projectLink: '', projectRepo: '', projectDescription: '', projectDescriptionBullet: '',
    }]);
  }

  // experience
  const [experienceData, setExperienceData] = React.useState([
    {
      experienceTitle: '', experienceCompany: '', experienceStartDate: '', experienceEndDate: '', experienceCurrent: false, experienceDescription: '',
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

  function addExperience() {
    setExperienceData(prevData => [...prevData, {
      experienceTitle: '', experienceCompany: '', experienceStartDate: '', experienceEndDate: '', experienceCurrent: false, experienceDescription: '',
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

        <legend>Education</legend>
        {/* iterates through schoolData, returns Schools component, handleChange takes in event param and index of schoolData */}
        {schoolData.map((school, index) => (<Schools key={index} schoolData={school} handleSchoolChange={(e) => handleSchoolChange(e, index)} />))}
        <button type="button" onClick={addSchool}>+ Add School</button>
        <br />

        <legend>Experience</legend>
        {experienceData.map((experience, index) => (<Experience key={index} experienceData={experience} handleExperienceChange={(e) => handleExperienceChange(e, index)} />))}
        <button type="button" onClick={addExperience}>+ Add Experience</button>
        <br />

        <legend>Skills/Licenses/Certifications</legend>
        <label htmlFor="skillTitle">Skill Title</label>
        <input 
          type="text"
          placeholder="Title"
          className="input"
          name="skillTitle"
          onChange={props.handleChange}
          value={props.data.skillTitle}
        />

        <label htmlFor="skillDescription">Skill Description</label>
        <input 
          type="text"
          placeholder="Description"
          className="input"
          name="skillDescription"
          onChange={props.handleChange}
          value={props.data.skillDescription}
        />
        <br />

        <legend>Projects</legend>
        {projectData.map((project, index) => (<Projects key={index} projectData={project} handleProjectChange={(e) => handleProjectChange(e, index)} />))}
        <button type="button" onClick={addProject}>+ Add Project</button> 

        <button>Submit</button>
      </form>
      
      <div className='preview'>
        <Preview 
          data={props.data} 
          schoolData={schoolData}
          projectData={projectData}
          experienceData={experienceData}
        />
      </div>
    </div>
  )
}