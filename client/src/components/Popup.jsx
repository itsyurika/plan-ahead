import './styles/Popup.scss';

const Popup = (props) => {
  return (
    <div className={`popup ${props.isPopupOpen ? "open" : "closed"}`}>

    </div>
  );
}

export default Popup;