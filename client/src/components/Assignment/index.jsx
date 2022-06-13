import { useState } from 'react'
import 'components/styles/Assignment.scss'

import Form from "./Form"


const AssignmentView = (props) => {
  console.log(props)
  const [showEdit, setShowEdit] = useState(false)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

// == helpers ==
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
      <button >Delete</button>
      <button onClick={props.onBack}>Back</button>


    {showEdit && <Form
    id = {props.id}
    title = {props.title}
    subject = {props.subject.name}
    description = {props.description}
    url = {props.url}
    defaultdueDate = {props.defaultDueDate}
     />}


    </article>
  );
};

export default AssignmentView;