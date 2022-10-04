import React from 'react';
import Schools from './content-children/Schools';
import Preview from './content-children/Preview';
import Projects from './content-children/Projects';

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
      // iterates through projectData array and returns a new array with the updated value
      // if the index matches the indexToChange, it updates the value
      // otherwise, it returns the previous value
      return prevData.map((project, index) => index === indexToChange ? {
        ...prevData[index],
        [name]: type === 'checkbox' ? checked : value
      } : project);
    });
    console.log(projectData);
  }

  function addProject() {
    // adds a new project object to the projectData array
    setProjectData(prevData => [...prevData, {
      projectTitle: '', projectLink: '', projectRepo: '', projectDescription: '', projectDescriptionBullet: '',
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
        <label htmlFor="employerName">Employer Name</label>
        <input
          type="text"
          placeholder="Employer Name"
          className="input"
          name="employerName"
          onChange={props.handleChange}
          value={props.data.employerName}
        />

        <label htmlFor="employerCity">City</label>
        <input
          type="text"
          placeholder="City"
          className="input"
          name="employerCity" 
          onChange={props.handleChange}
          value={props.data.employerCity}
        />

        <label htmlFor="employerState">State</label>
        <input
          type="text"
          placeholder="State"
          className="input"
          name="employerState"
          onChange={props.handleChange}
          value={props.data.employerState}
        />

        <label htmlFor="jobTitle">Job Title</label>
        <input
          type="text"
          placeholder="Job Title"
          className="input"
          name="jobTitle"
          onChange={props.handleChange}
          value={props.data.jobTitle}
        />

        <label htmlFor="jobBullet">Job Bullet</label>
        <textarea rows="5" cols="50"
          type="text"
          placeholder="Start each bullet with an action verb and explain your contribution/accomplishment and the result/impact/outcome of your work. Quantify and qualify."
          className="input"
          name="jobBullet"
          onChange={props.handleChange}
          value={props.data.jobBullet1}
        />

        <label htmlFor="jobStartDate">Start Date</label>
        <input
          type="month"
          placeholder="Start Date"
          className="input"
          name="jobStartDate"
          onChange={props.handleChange}
          value={props.data.jobStartDate}
        />

        <label htmlFor="jobEndDate">End Date</label>
        <input
          type="month"
          placeholder="End Date"
          className="input"
          name="jobEndDate"
          onChange={props.handleChange}
          value={props.data.jobEndDate}
        />

        <label htmlFor="jobCurrent">Still working here</label>
        <input
          type="checkbox"
          name="jobCurrent"
          onChange={props.handleChange}
          checked={props.data.jobCurrent}
        />
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
        />
      </div>
    </div>
  )
}