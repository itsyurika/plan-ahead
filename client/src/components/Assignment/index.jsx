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

        {props.status === 'Started' &&< button onClick={props.onCancelStarted}>Undo Started</button>}
        {props.status === 'Complete' &&< button onClick={props.onCancelComplete}>Cancel Submission</button>}

        {props.status === 'Not started' &&< button onClick={props.onStart}>Start</button>}
        {props.status === 'Started' && < button onClick={props.onComplete}>Complete</button>}

        {props.admin && <Form {...props} />}
      </div>
    </article>
  );
};

export default AssignmentView;