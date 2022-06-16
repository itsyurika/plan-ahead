import 'components/styles/Assignment.scss';
import axios from 'axios';

const DeleteModal = (props) => {
  const deleteAssignment = (id) => {
    axios.delete('/assignments/' + id);
    props.onBack();
    window.location.reload(true); //change to useEffect
  };

  return (
    <div className="modalBackdrop del">
      <div className="del-modalContainer">
        <div id="cancel-X" onClick={props.closeModal}>&#10006;</div>
        <br />
        <p>Please confirm that you would like to delete: </p><br /> <p>{props.title}</p>
        <br />
        <button onClick={() => { deleteAssignment(props.id); }}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteModal;