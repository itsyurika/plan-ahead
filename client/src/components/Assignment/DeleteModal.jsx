import './Form.scss';
import { useState } from 'react';
import axios from 'axios';
import Form from "./Form"
import Index from "./Index"


  const DeleteModal = (props) => {  

    const deleteAssignment = (id) => {
      console.log("got to deleteAssignment")
      axios.delete('/assignments/' + id)
      props.onBack()
      window.location.reload(true); //change to useEffect
  };
  
    console.log(props)
    return (
      <div className="modalBackdrop">
        <div className="modalContainer">
          <p>Please confirm that you would like to delete {props.title}</p>
          <button onClick={() => {deleteAssignment(props.id)}}>Delete</button>
          <button onClick={props.closeModal}>Close</button>
        </div>
      </div>
    );
  }

  export default DeleteModal;