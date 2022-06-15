import Form from "./Form";


const AssignmentView = (props) => {
  return (
    <article className='assignment__show modalBackdrop'>
      <div className={`form-modalContainer ${props.status?.toLowerCase()}`}>
        <div id="cancel-X" onClick={props.onBack}>&#10006;</div>
        <header id="assignment-header"><h3>{props.title}</h3></header>
        <p id="assn-subj">{props.subject?.name}</p>
        <p id="assn-desc">Description:<br/>{props.description}</p>
        <p id="assn-link">Link: {props.url}</p>
        <p id="assn-prog">Your Progress: {props.status}</p>

        {props.status && props.status !== 'Not Started' &&< button onClick={props.onCancel}>Cancel</button>}
        {props.status === 'Not Started' &&< button onClick={props.onStart}>Start</button>}
        {props.status === 'Started' && < button onClick={props.onComplete}>Complete</button>}
        
        {props.admin && <Form {...props} />}
      </div>
    </article>
  );
};

export default AssignmentView;