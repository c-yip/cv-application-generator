export default function PreviewExperience(props) {
  return (
    <div>
      <p className="employer-name">{props.data.employerName}</p>
      <p className="employer-city">{props.data.employerCity}</p>
      <p className="employer-state">{props.data.employerState}</p>
      <p className="job-title">{props.data.jobTitle}</p>
      <p className="job-bullet">{props.data.jobBullet}</p>
      <p className="job-start-date">{props.data.jobStartDate}</p>
      <p className="job-end-date">{props.data.jobEndDate}</p>
    </div>
  )
}