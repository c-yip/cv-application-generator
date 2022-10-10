import React from 'react';
import ExperienceBullets from "./ExperienceBullets";

export default function Experience(props) {
  return(
    <div className='border-bottom'>
      <label htmlFor="experienceCompany">Employer Name</label>
      <input
        type="text"
        placeholder="Employer Name"
        className="input"
        name="experienceCompany"
        onChange={props.handleExperienceChange}
        value={props.experienceData.experienceCompany}
      />

      <label htmlFor="experienceCityState">City, State</label>
      <input
        type="text"
        placeholder="City"
        className="input"
        name="experienceCityState" 
        onChange={props.handleExperienceChange}
        value={props.experienceData.experienceCityState}
      />

      <label htmlFor="experienceTitle">Job Title</label>
      <input
        type="text"
        placeholder="Job Title"
        className="input"
        name="experienceTitle"
        onChange={props.handleExperienceChange}
        value={props.experienceData.experienceTitle}
      />

      <div className='experience-bullet-section'>
        <label htmlFor="experienceBullets">Job Bullet</label>
        {props.experienceData.experienceBullets.map((experienceBullet, index) => {
          return (
            <ExperienceBullets
              key={index}
              experienceBullet={experienceBullet.experienceBullet}
              handleExperienceBulletChange={(e) => props.handleExperienceBulletChange(e, props.index, index)}
            />
          )
        })}
      </div>
      <button type="button" onClick={props.addExperienceBullet}>+ Add Bullet</button>
      <br/>

      <label htmlFor="experienceStartDate">Start Date</label>
      <input
        type="month"
        placeholder="Start Date"
        className="input"
        name="experienceStartDate"
        onChange={props.handleExperienceChange}
        value={props.experienceData.experienceStartDate}
      />

      <label htmlFor="experienceEndDate">End Date</label>
      <input
        type="month"
        placeholder="End Date"
        className="input"
        name="experienceEndDate"
        onChange={props.handleExperienceChange}
        value={props.experienceData.experienceEndDate}
      />

      <label htmlFor="experienceCurrent">Still working here</label>
      <input
        type="checkbox"
        name="experienceCurrent"
        onChange={props.handleExperienceChange}
        checked={props.experienceData.experienceCurrent}
      />
    </div>
  )
}