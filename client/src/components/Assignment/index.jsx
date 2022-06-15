import Form from "./Form";
import 'components/styles/Assignment.scss';


const AssignmentView = (props) => {
  console.log("looking for status props:", props.status.toLowerCase().trim(" "))
  return (
    <article className='assignment__show modalBackdrop'>
      <div className={`form-modalContainer ${props.status.toLowerCase().replace(/\s+/g, '')}`}>

        <div id="cancel-X" onClick={props.onBack}>&#10006;</div>
        {props.status && <div>
        <header ><h1 className={`assignment_header ${props.status.toLowerCase().replace(/\s+/g, '')}`}>{props.title}</h1></header>
        <p id="assn-subj">{props.subject?.name} </p>
        <p className={`assn-desc ${props.status.toLowerCase().replace(/\s+/g, '')}`}>Description:</p>
        <p id="desc">{props.description}</p>
        <p id="assn-link">Link: {props.url}</p>
        <p id="assn-prog">Your Progress:&nbsp;&nbsp;<span id="prog-status"> {props.status}! </span></p>
        <div id="status-buttons">
        {props.status === 'Not started' && < button className="start-btn" onClick={props.onStart}>Start</button>}
        {props.status === 'Started' && < button className="start-btn"onClick={props.onComplete}>Complete</button>}
        {props.status === 'Started' && < button className="undo-btn" onClick={props.onCancelStarted}>Undo Started</button>}
        {props.status === 'Complete' && < button className="undo-btn" onClick={props.onCancelComplete}>Cancel Submission</button>}
        </div>
        </div>}


        
        {props.admin && <Form {...props} />}
      </div>
    </article>
  );
};

export default AssignmentView;