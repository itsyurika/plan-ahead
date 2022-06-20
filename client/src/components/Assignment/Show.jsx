import 'components/styles/Assignment.scss';
import 'components/styles/Modal.scss';
import { format } from 'date-fns';

import Status from './Status';

// = helpers =
const dueDateColour = (date) => {
  if (date < new Date()) return 'pastDue';
  return 'due';
};

// = main component =
const AssignmentView = (props) => {
  return (
    <article className={`assignment__show ${props.status?.toLowerCase().replace(/\s+/g, '')}`}>
      <header><h1 className='title'>{props.title}</h1></header>
      <p className='subject'>{props.subject?.name}</p>
      <div className='description'>
        <header>Details</header>
        <p>{props.description}</p>
      </div>
      <p className='classroom-url'><a href={props.url} target="_blank" rel="noopener noreferrer">{props.url}</a></p>
      <div className={`due-date ${dueDateColour(props.assigned.dueDate)}`}><span>Due: {format(props.assigned.dueDate, 'MMM dd yyyy')}</span></div>

      {(!props.admin) && <Status {...props} />}
    </article>
  );
};

export default AssignmentView;