import React from 'react';
import ExperienceBullets from "./ExperienceBullets";

export default function Experience(props) {
  const [experienceBullets, setExperienceBullets] = React.useState([
    { experienceBullet: "" }
  ]);

  const handleExperienceBulletChange = (e, indexToChange) => {
    const {name, value} = e.target
    setExperienceBullets(prevData => {
      return prevData.map((item, index) => index === indexToChange ? {
        ...prevData[index],
        [name]: value
      } : item);
    });
    console.log(experienceBullets);
  };

  const addExperienceBullet = () => {
    setExperienceBullets(prevData => [...prevData, {
      experienceBullet: '',
    }])
  };
  
  return(
    <div>
<label htmlFor="employerName">Employer Name</label>
    <input
      type="text"
      placeholder="Employer Name"
      className="input"
      name="employerName"
      onChange={props.handleExperienceChange}
      value={props.experienceData.employerName}
    />

    <label htmlFor="employerCity">City</label>
    <input
      type="text"
      placeholder="City"
      className="input"
      name="employerCity" 
      onChange={props.handleExperienceChange}
      value={props.experienceData.employerCity}
    />

    <label htmlFor="employerState">State</label>
    <input
      type="text"
      placeholder="State"
      className="input"
      name="employerState"
      onChange={props.handleExperienceChange}
      value={props.experienceData.employerState}
    />

    <label htmlFor="jobTitle">Job Title</label>
    <input
      type="text"
      placeholder="Job Title"
      className="input"
      name="jobTitle"
      onChange={props.handleExperienceChange}
      value={props.experienceData.jobTitle}
    />

    <label htmlFor="jobBullet">Job Bullet</label>
    {experienceBullets.map((item, index) => (<ExperienceBullets key={index} experienceBullets={item} handleExperienceBulletChange={(e) => handleExperienceBulletChange(e, index)} />))}
    <button type="button" onClick={addExperienceBullet}>+ Add Bullet</button>

    <label htmlFor="jobStartDate">Start Date</label>
    <input
      type="month"
      placeholder="Start Date"
      className="input"
      name="jobStartDate"
      onChange={props.handleExperienceChange}
      value={props.experienceData.jobStartDate}
    />

    <label htmlFor="jobEndDate">End Date</label>
    <input
      type="month"
      placeholder="End Date"
      className="input"
      name="jobEndDate"
      onChange={props.handleExperienceChange}
      value={props.experienceData.jobEndDate}
    />

    <label htmlFor="jobCurrent">Still working here</label>
    <input
      type="checkbox"
      name="jobCurrent"
      onChange={props.handleExperienceChange}
      checked={props.experienceData.jobCurrent}
    />
    </div>
  )
}