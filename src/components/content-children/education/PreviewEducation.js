export default function PreviewEducation(props) {
  function convertYearMonthToMonthYear(date) {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    return `${month}/${year}`;
  }
  
  return (
    <div className="education">
      <div className="flex-row-space-between">
        <p className="school-degree">{props.schoolData.schoolDegree}</p>
        <div className="education-dates">
          <p className="school-start-date">{convertYearMonthToMonthYear(props.schoolData.schoolStartDate)} -</p>
          {!props.schoolData.schoolCurrent && <p className="school-end-date">{convertYearMonthToMonthYear(props.schoolData.schoolEndDate)}</p>}
          {props.schoolData.schoolCurrent && <p className="school-end-date">present</p>}
        </div>
      </div>
      
      <div className="flex-row-space-between">
        <p className="school-name">{props.schoolData.schoolName}</p>
        <p className="school-location">{props.schoolData.schoolLocation}</p>
      </div>
    </div>
  )
}