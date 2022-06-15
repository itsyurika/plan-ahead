import Form from "./Form";

const AssignmentView = (props) => {
  return (
    <article className='assignment__show modalBackdrop'>
      <div className={`form-modalContainer ${props.status?.toLowerCase()}`}>
        <div id="cancel-X" onClick={props.onBack}>&#10006;</div>
        <header id="assignment-header"><h3>{props.title}</h3></header>
        <p>{props.subject?.name}</p>
        <p>{props.description}</p>
        <p>{props.url}</p>
        <p>{props.status}</p>

        {!props.admin &&< button disabled={['Started', 'Complete'].includes(props.status)} onClick={props.onStart}>Start</button>}
        {!props.admin &&< button disabled={props.status === 'Complete'} onClick={props.onComplete}>Complete</button>}

        {props.admin && <Form {...props} />}
      </div>
    </article>
  );
};

export default AssignmentView;