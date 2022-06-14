import 'components/styles/Assignment.scss';
import axios from 'axios';

  const DeleteModal = (props) => {
    const deleteAssignment = (id) => {
      axios.delete('/assignments/' + id)
      props.onBack()
      window.location.reload(true); //change to useEffect
  };

    return (
      <div className="del-modalBackdrop">
        <div className="del-modalContainer">
          <p>Please confirm that you would like to delete {props.title}</p>
          <button onClick={() => {deleteAssignment(props.id)}}>Delete</button>
          <button onClick={props.closeModal}>Close</button>
        </div>
      </div>
    );
  }

  export default DeleteModal;