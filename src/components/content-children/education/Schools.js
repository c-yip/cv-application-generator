export default function Schools(props) {
  return (
    <div>
      <label htmlFor="schoolName">School Name</label>
      <input
        type="text"
        placeholder="School Name"
        className="input"
        name="schoolName"
        onChange={props.handleSchoolChange}
        value={props.schoolData.schoolName}
      />

      <label htmlFor="schoolCity">City, State</label>
      <input 
        type="text"
        placeholder="City"
        className="input"
        name="schoolCity"
        onChange={props.handleSchoolChange}
        value={props.schoolData.schoolLocation}
      />

      <label htmlFor="schoolDegree">Degree</label>
      <input
        type="text"
        placeholder="Degree"
        className="input"
        name="schoolDegree"
        onChange={props.handleSchoolChange}
        value={props.schoolData.schoolDegree}
      />

      <label htmlFor="schoolStartDate">Start Date</label>
      <input 
        type="month"
        placeholder="Start Date"
        className="input"
        name="schoolStartDate"
        onChange={props.handleSchoolChange}
        value={props.schoolData.schoolStartDate}
      />

      <label htmlFor="schoolEndDate">End Date</label>
      <input 
        type="month"
        placeholder="End Date"
        className="input"
        name="schoolEndDate"
        onChange={props.handleSchoolChange}
        value={props.schoolData.schoolEndDate}
      />

      <label htmlFor="schoolCurrent">Still attending</label>
      <input 
        type="checkbox"
        name="schoolCurrent"
        onChange={props.handleSchoolChange}
        checked={props.schoolData.schoolCurrent}
      />
    </div>
  );
}