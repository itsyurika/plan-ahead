import 'components/styles/Modal.scss';

import Button from 'components/Button';

const DeleteModal = (props) => {
  const deleteAssignment = (id) => {
    props.onDelete(id);
    props.onBack();
  };

  return (
    <div className="modalBackdrop del">
      <div className="del-modalContainer">
        <div className="cancel-X" onClick={props.closeModal}>&#10006;</div>
        <p className='del-warning'>&#9888;</p>
        <p>Please confirm that you would like to delete: </p>
        <p className="del-title">{props.title}</p>
        <br />
        <Button style='danger-delete' action={() => { deleteAssignment(props.id); }}>Delete</Button>
      </div>
    </div>
  );
};

export default DeleteModal;