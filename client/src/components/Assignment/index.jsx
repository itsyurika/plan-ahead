import { useState } from 'react'
import axios from 'axios'
import Form from "./Form"
import DeleteModal from "./DeleteModal"

const AssignmentView = (props) => {
  const [showEdit, setShowEdit] = useState(false)
  const [showModal, setShowModal] = useState(false)





  return (
    <article className={`assignment__view ${props.status.toLowerCase()}`}>
      <header><h3>{props.title}</h3></header>
      <p>{props.subject.name}</p>
      <p>{props.description}</p>
      <p>{props.url}</p>
      <p>{props.status}</p>
      <button disabled={['Started', 'Complete'].includes(props.status)} onClick={props.onStart}>Start</button>
      <button disabled={props.status === 'Complete'} onClick={props.onComplete}>Complete</button>
      <button onClick={() => {setShowEdit((prev) => !prev)}}>Edit</button>
      <button onClick={() => setShowModal(true)}> Delete </button>
      
      <button onClick={props.onBack}>Back</button>

    {showModal && <DeleteModal closeModal={() => setShowModal(false)} id={props.id} title={props.title} onBack={props.onBack}/>}


    {showEdit && <Form
    id = {props.id}
    title = {props.title}
    subject = {props.subject.name}
    description = {props.description}
    url = {props.url}
    defaultdueDate = {props.defaultDueDate}
    onBack = {props.onBack}
     />}

    </article>
  );
};

export default AssignmentView;