import Form from "./Form";
import 'components/styles/Assignment.scss';
import Status from "./Status"


const AssignmentView = (props) => {
  return (

      <div>
        <div id="cancel-X" onClick={props.onBack}>&#10006;</div>
        {props.status && <div>
          <header><h1 className={`assignment_header ${props.status.toLowerCase().replace(/\s+/g, '')}`}>{props.title}</h1></header>
          <p id="assn-subj">{props.subject.name} </p>
          <p className={`assn-desc ${props.status.toLowerCase().replace(/\s+/g, '')}`}>Description:</p>
          <p id="desc">{props.description}</p>
          <p id="assn-link">Link: {props.url}</p>
          <p id="assn-prog">Your Progress:&nbsp;&nbsp;<span id="prog-status"> {props.status}! </span></p>

        </div>}
        {(props.view !== 'complete') && < Status {...props} />}
        {props.admin && <Form {...props} />}
        </div>

  );
};

export default AssignmentView;