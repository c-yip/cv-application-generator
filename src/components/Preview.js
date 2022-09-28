export default function Preview(props) {
  // converts numbers to phone number format
  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  }
  
  return (
    <div className="preview">
      
      <div className="peronal-info">
        <div className="name">
          <h1>{props.data.firstName} {props.data.middle} {props.data.lastName}</h1>
        </div>
        <div className="contact">
          <p>{props.data.location}</p>
          <p>{props.data.email}</p>
          <p>{formatPhoneNumber(props.data.phone)}</p>
          <p>{props.data.linkedIn}</p>
        </div>
      </div>

      <div className="objective">
        <h2 className="objective-title">Objective</h2>
        <p className="objective-info">{props.data.objective}</p>
      </div>
    </div>
  )
}