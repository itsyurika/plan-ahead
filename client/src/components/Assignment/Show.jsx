import 'components/styles/Assignment.scss';
import 'components/styles/Modal.scss';
import { format, parseISO } from 'date-fns';

import Status from './Status';

const AssignmentView = (props) => {
  const dueDateColour = () => {
    if (parseISO(props.defaultDueDate) < new Date()) return 'pastDue';
    return 'due';
  };

  return (
    <article className={`assignment__show ${props.status?.toLowerCase().replace(/\s+/g, '')}`}>
      <header><h1 className='title'>{props.title}</h1></header>
      <p className='subject'>{props.subject?.name}</p>
      <div className='description'>
        <header>Details</header>
        <p>{props.description}</p>
      </div>
      <p className='classroom-url'><a href={props.url} target="_blank" rel="noopener noreferrer">{props.url}</a></p>
      <div className={`due-date ${dueDateColour()}`}><span>Due: {format(props.day || parseISO(props.defaultDueDate), 'MMM dd yyyy')}</span></div>

      {(!props.admin) && <Status {...props} />}
    </article>
  );
};

export default AssignmentView;