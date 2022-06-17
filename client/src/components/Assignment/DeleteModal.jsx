const DeleteModal = (props) => {
  const deleteAssignment = (id) => {
    props.onDelete(id);
    props.onBack();
  };

  return (
    <div className="modalBackdrop del">
      <div className="del-modalContainer">
        <div id="cancel-X" onClick={props.closeModal}>&#10006;</div>
        <p id='del-warning'>&#9888;</p>
        <p>Please confirm that you would like to delete: </p>
        <p id="del-title">{props.title}</p>
        <br />
        <button className='del-btn' onClick={() => { deleteAssignment(props.id); }}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteModal;