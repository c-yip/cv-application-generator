export default function Skills(props) {
  return (
    <div className="skills border-bottom">
      <label htmlFor="skillName">Skill Title</label>
      <input 
        type="text"
        placeholder="Title"
        className="input"
        name="skillName"
        onChange={props.handleSkillChange}
        value={props.skillData.skillName}
      />

      <label htmlFor="skillDescription">Skill Description</label>
      <input 
        type="text"
        placeholder="Description"
        className="input"
        name="skillDescription"
        onChange={props.handleSkillChange}
        value={props.skillData.skillDescription}
      />
    </div>
  )
}
  