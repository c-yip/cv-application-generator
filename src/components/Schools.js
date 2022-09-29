export default function Schools(props) {
  return (
    <div>
      <label htmlFor="schoolName">School Name</label>
      <input
        type="text"
        placeholder="School Name"
        className="input"
        name="schoolName"
        onChange={props.handleChange}
        value={props.data.schoolName}
      />

      <label htmlFor="schoolCity">City</label>
      <input 
        type="text"
        placeholder="City"
        className="input"
        name="schoolCity"
        onChange={props.handleChange}
        value={props.data.schoolCity}
      />

      <label htmlFor="schoolState">State</label>
      <input
        type="text"
        placeholder="State"
        className="input"
        name="schoolState"
        onChange={props.handleChange}
        value={props.data.schoolState}
      />

      <label htmlFor="schoolDegree">Degree</label>
      <input
        type="text"
        placeholder="Degree"
        className="input"
        name="schoolDegree"
        onChange={props.handleChange}
        value={props.data.schoolDegree}
      />

      <label htmlFor="schoolStartDate">Start Date</label>
      <input 
        type="month"
        placeholder="Start Date"
        className="input"
        name="schoolStartDate"
        onChange={props.handleChange}
        value={props.data.schoolStartDate}
      />

      <label htmlFor="schoolEndDate">End Date</label>
      <input 
        type="month"
        placeholder="End Date"
        className="input"
        name="schoolEndDate"
        onChange={props.handleChange}
        value={props.data.schoolEndDate}
      />

      <label htmlFor="schoolCurrent">Still attending</label>
      <input 
        type="checkbox"
        name="schoolCurrent"
        onChange={props.handleChange}
        checked={props.data.schoolCurrent}
      />
    </div>
  );
}