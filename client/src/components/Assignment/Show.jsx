import 'components/styles/Assignment.scss';
import 'components/styles/Modal.scss';
import { format, parseISO } from 'date-fns';

import Status from './Status';

const AssignmentView = (props) => {  const dueDateColour = () => {
  if (parseISO(props.defaultDueDate) < new Date()) return 'pastDue';
  return 'due';
};

return (
  <article className='assignment__show'>
      <header><h1 className='assignment-header'>{props.title}</h1></header>
      <p className='assn-subj'>{props.subject.name}</p>
      <p className='assn-desc'>Description:</p>
      <p className='desc'>{props.description}</p>
      <p className='assn-link'><a href={props.url} target="_blank" rel="noopener noreferrer">{props.url}</a></p>
      <p className={`due-date ${dueDateColour()}`}>Due: {format(props.day || parseISO(props.defaultDueDate), 'MMM dd yyyy')}</p>

      {(props.view !== 'complete') && <Status {...props} />}
  </article>
);
};

export default AssignmentView;