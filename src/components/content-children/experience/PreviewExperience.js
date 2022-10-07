import PreviewExperienceBullets from "./PreviewExperienceBullets";

export default function PreviewExperience(props) {
  function convertYearMonthToMonthYear(date) {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    return `${month}/${year}`;
  }
  
  return (
    <div className="experience-info">
      <div className= "flex-row-space-between">
        <p className="experience-job-title">{props.data.experienceTitle}</p>
        <div className="experience-dates">
          <p className="job-start-date">{convertYearMonthToMonthYear(props.data.experienceStartDate)} -</p>
          <p className="job-end-date">{convertYearMonthToMonthYear(props.data.experienceEndDate)}</p>
        </div>
      </div>
      
      <div className="flex-row-space-between">
        <p className="experience-company">{props.data.experienceCompany}</p>
        <p className="employer-city-state">{props.data.experienceCityState}</p>
      </div>
    
      <ul className="experience-bullet-container">
        {props.data.experienceBullets.map((bullet, index) =>
          <PreviewExperienceBullets key={index} experienceBulletData={bullet.experienceBullet} />
        )}
      </ul>
    </div>
  )
}