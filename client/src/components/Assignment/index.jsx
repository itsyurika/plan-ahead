import { useState } from 'react';
import 'components/styles/Assignment.scss';
import axios from 'axios';
import Form from "./Form";

const AssignmentView = (props) => {
  const [showEdit, setShowEdit] = useState(false);

  // == helpers ==
  const deleteAssignment = (id) => {
    axios.delete('/assignments/' + id);
    props.onBack();
    window.location.reload(true); //change to useEffect
  };

  return (
    <article className={`assignment__view ${props.status.toLowerCase()}`}>
      <header><h3>{props.title}</h3></header>
      <p>{props.subject.name}</p>
      <p>{props.description}</p>
      <p>{props.url}</p>
      <p>{props.status}</p>
      <button disabled={['Started', 'Complete'].includes(props.status)} onClick={props.onStart}>Start</button>
      <button disabled={props.status === 'Complete'} onClick={props.onComplete}>Complete</button>
      <button onClick={() => { setShowEdit((prev) => !prev); }}>Edit</button>
      <button onClick={() => { deleteAssignment(props.id); }}>Delete</button>
      <button onClick={props.onBack}>Back</button>

      {showEdit && <Form
        id={props.id}
        title={props.title}
        subject={props.subject.name}
        description={props.description}
        url={props.url}
        defaultdueDate={props.defaultDueDate}
        onBack={props.onBack}
      />}


    </article>
  );
};

export default AssignmentView;