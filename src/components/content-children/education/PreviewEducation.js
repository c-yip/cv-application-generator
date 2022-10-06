export default function PreviewEducation(props) {
  return (
    <div className="education">
        <p className="school-name">{props.schoolData.schoolName}</p>
        <p className="school-city">{props.schoolData.schoolCity}</p>
        <p className="school-state">{props.schoolData.schoolState}</p>
        <p className="school-degree">{props.schoolData.schoolDegree}</p>
        <p className="school-start-date">{props.schoolData.schoolStartDate}</p>
        <p className="school-end-date">{props.schoolData.schoolEndDate}</p>
      </div>
  )
}