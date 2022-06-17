import 'components/styles/Assignment.scss';
import 'components/styles/Modal.scss';
import Form from './Form';
import StatusForm from './StatusForm';
import { format, parseISO } from 'date-fns';

const AssignmentView = (props) => {
  const dueDateColour = () => {
    if (props.status !== 'Complete' && parseISO(props.assigned.dueDate) < new Date()) return 'pastDue';
    return 'due';
  };

  return (
    <article className={`assignment__show ${props.status?.toLowerCase().replace(/\s+/g, '')}`}>
      <div className='cancel-X' onClick={props.onBack}>&#10006;</div>
      {props.status && <div>
        <header><h1 className={`assignment-header ${props.status.toLowerCase().replace(/\s+/g, '')}`}>
          {props.title}
        </h1></header >
        <p className='assn-subj'>{props.subject.name}</p>
        <p className={`assn-desc ${props.status.toLowerCase().replace(/\s+/g, '')}`}>Description:</p>
        <p className='desc'>{props.description}</p>
        <p className='assn-link'><a href={props.url} target="_blank" rel="noopener noreferrer">Link to Google Classroom</a></p>

        <div className='status'>
          <p className={`due-date ${dueDateColour()}`}>Due: {format(props.day || parseISO(props.assigned.dueDate), 'MMM dd yyyy')}</p>
          <p className='assn-prog'>Your Progress:&nbsp;&nbsp;<span className='prog-status'> {props.status}!</span> </p>
        </div>
        {(props.view !== 'complete') && <StatusForm {...props} />}
      </div >}

      {props.admin && <Form {...props} />}
    </article >
  );
};

export default AssignmentView;