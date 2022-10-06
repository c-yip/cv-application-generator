import PreviewExperienceBullets from "./PreviewExperienceBullets";

export default function PreviewExperience(props) {
  return (
    <div>
      <p className="employer-name">{props.data.employerName}</p>
      <p className="employer-city">{props.data.employerCity}</p>
      <p className="employer-state">{props.data.employerState}</p>
      <p className="job-title">{props.data.jobTitle}</p>
      <p className="job-start-date">{props.data.jobStartDate}</p>
      <p className="job-end-date">{props.data.jobEndDate}</p>

      <div className="experience-bullet-container">
        {props.data.experienceBullets.map((bullet, index) =>
          <PreviewExperienceBullets key={index} experienceBulletData={bullet.experienceBullet} />
        )}
      </div>
    </div>
  )
}