export default function ProjectsBullet(props) {
  return (
    <input
      type="text"
      placeholder="Description"
      className="input"
      name="projectBullet"
      onChange={props.handleProjectBulletChange}
      value={props.projectBulletData}
    />    
  )
}