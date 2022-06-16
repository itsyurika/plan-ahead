import './styles/Popup.scss';

const Popup = (props) => {
  return (

    <div className={`popup ${props.isPopupOpen ? "open" : "closed"}`} onClick={props.onClose}>
      <ul>
        <li>To do stuff</li>
        <li>To do stuff</li>
        <li>To do stuff</li>
      </ul>

    </div>
  );
}

export default Popup;