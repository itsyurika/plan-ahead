import 'components/styles/Assignment.scss';
import 'components/styles/Modal.scss';
import { format, parseISO } from 'date-fns';

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
    
      <header className='title'> <i class="fa-solid fa-square fa-2xl"></i><h2>{props.title}</h2></header>

    
     <h3 className='subject'>{props.subject?.name}</h3>

      <div className={`due-date ${dueDateColour(props.assigned.dueDate)}`}><i className="fa-regular fa-clock fa-lg"></i><span>  Due {format(props.day || parseISO(props.defaultDueDate), 'MMM dd yyyy')}</span></div>
      
      <div className='link'> <i className="fa-solid fa-link fa-lg"></i> <span className='classroom-url'><a href={props.url} target="_blank" rel="noopener noreferrer">{props.url}</a></span></div>

      <div className='description'>
      <i className="fa-regular fa-file-lines fa-xl"></i>
        <p>{props.description}</p>
      </div>

      {(!props.admin) && <Status {...props} />}
    </article>
  );
};

export default AssignmentView;