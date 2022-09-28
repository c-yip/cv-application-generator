export default function Input(props) {
  return (
    <form>
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

      <label htmlFor="phone">Phone Number</label>
      <input 
        type="tel"
        placeholder="Phone Number"
        className="input"
        name="phone"
        onChange={props.handleChange}
        value={props.data.phone}
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
      <br />

      <label htmlFor="objective">Objective</label>
      <textarea rows="5" cols="50"
        value={props.data.objective}
        placeholder="Capture the attention of the employer with a “power pitch”. It’s the written equivalent of your verbal response to the “why should we hire you?” interview question. Include the type of position you are seeking and the start date (“Seeking a position in software development starting November 2022.”)"
        onChange={props.handleChange}
        name="objective"
      />
      <br />

      <legend>Education</legend>
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
      <label htmlFor="projectTitle">Project Title</label>
      <input
        type="text"
        placeholder="Title"
        className="input"
        name="projectTitle"
        onChange={props.handleChange}
        value={props.data.projectTitle}
      />

      <legend>Link to Live</legend>
      <label htmlFor="projectLink">Link</label>
      <input
        type="text"
        placeholder="Link"
        className="input"
        name="projectLink"
        onChange={props.handleChange}
        value={props.data.projectLink}
      />

      <legend>Link to Repo</legend>
      <label htmlFor="projectRepo">Link</label>
      <input
        type="text"
        placeholder="Link"
        className="input"
        name="projectRepo"
        onChange={props.handleChange}
        value={props.data.projectRepo}
      />

      <label htmlFor="projectDescription">Project Description</label>
      <textarea
        type="text"
        placeholder="Project Description"
        className="input"
        name="projectDescription"
        onChange={props.handleChange}
        value={props.data.projectDescription}
      />

      <label htmlFor="projectDescription">Project Description Bullet</label>
      <input
        type="text"
        placeholder="Description"
        className="input"
        name="projectDescriptionBullet"
        onChange={props.handleChange}
        value={props.data.projectDescriptionBullet}
      />

      <button>Submit</button>
    </form>
  )
}