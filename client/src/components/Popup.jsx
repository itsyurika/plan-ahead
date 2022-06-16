import './styles/Popup.scss';

const Popup = (props) => {
  return (
    <div className={`popup ${props.isPopupOpen ? "open" : "closed"}`} onClick={props.onClose}>
    <div className="popup__contents">
      <h3>Welcome Sarah!</h3>
      <h2>Work to do today</h2>
      <div className='list-group'>
      <h3>Due Today</h3>
      <ul>
        <li>History</li>
        <li>Art</li>
      </ul>
      </div>
      <div className='list-group'>
      <h3>Due Tomorrow</h3>
      <ul>
        <li>History</li>
        <li>Art</li>
      </ul>
      </div>
      <div className='list-group past-due'>
        <h3 onClick={props.showPastDue}>Past Due</h3>
        <ul>
          <li>Math</li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Popup;