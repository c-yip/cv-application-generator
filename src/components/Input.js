export default function Input(props) {
  return (
    <form>
      <legend>Personal Information</legend>

      <label htmlFor="input">First Name</label>
      <input 
        type="text"
        placeholder="First Name"
        className="input"
        name="firstName"
        onChange={props.handleChange}
        value={props.data.firstName}
      />

      <label htmlFor="input">Middle Name or Initial</label>
      <input 
        type="text"
        placeholder="Middle"
        className="input"
        name="middle"
        onChange={props.handleChange}
        value={props.data.middle}
      />

      <label htmlFor="input">Last Name</label>
      <input 
        type="text"
        placeholder="Last Name"
        className="input"
        name="lastName"
        onChange={props.handleChange}
        value={props.data.lastName}
      />

      <label htmlFor="input">Phone Number</label>
      <input 
        type="tel"
        placeholder="Phone Number"
        className="input"
        name="phone"
        onChange={props.handleChange}
        value={props.data.phone}
      />

      <label htmlFor="input">Email Address</label>
      <input 
        type="email"
        placeholder="Email Address"
        className="input"
        name="email"
        onChange={props.handleChange}
        value={props.data.email}
      />

      <button>Submit</button>
    </form>
  )
}