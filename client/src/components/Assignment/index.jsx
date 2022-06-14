import { useState } from 'react';
import Form from "./Form";
import DeleteModal from "./DeleteModal";

const AssignmentView = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState(true);

  return (

  <article >
  <div className='modalBackdrop'>
    <div className={`form-modalContainer ${props.status?.toLowerCase()}`}>
      <header id="assignment-header"><h3>{props.title}</h3></header>
      <br />
      <p>{props.subject?.name}</p>
      <br />
      <p>{props.description}</p>
      <br />
      <p>{props.url}</p>
      <br />
      <p>{props.status}</p>
      <br />
      <button disabled={['Started', 'Complete'].includes(props.status)} onClick={props.onStart}>Start</button>
      <button disabled={props.status === 'Complete'} onClick={props.onComplete}>Complete</button>
      {edit && <button onClick={() => { setShowForm((prev) => !prev); }}>Edit</button>}
      {!edit && <button onClick={() => { setShowForm((prev) => !prev); }}>Create</button>}
      <button onClick={() => setShowModal(true)}> Delete </button>
      <button onClick={props.onBack}>Back</button>
      <button onClick={() => { setEdit((prev) => !prev); }}>Toggle</button> // Just here to test functionality.

      {showForm && <Form
        id={props.id}
        title={props.title}
        subject={props.subject?.name}
        description={props.description}
        url={props.url}
        defaultdueDate={props.defaultDueDate}
        onBack={props.onBack}
        toggle={props.edit}
      />}
      </div>
      </div>
      {showModal && <DeleteModal closeModal={() => setShowModal(false)} id={props.id} title={props.title} onBack={props.onBack} />}
    </article>
  );
};

export default AssignmentView;