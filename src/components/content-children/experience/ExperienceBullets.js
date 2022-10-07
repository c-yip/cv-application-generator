export default function ExperienceBullets(props) {
  return (
    <textarea rows="5" cols="50"
      type="text"
      placeholder="Start each bullet with an action verb and explain your contribution/accomplishment and the result/impact/outcome of your work. Quantify and qualify."
      className="input"
      name="experienceBullet"
      onChange={props.handleExperienceBulletChange}
      value={props.experienceBullet}
    />
  )
}