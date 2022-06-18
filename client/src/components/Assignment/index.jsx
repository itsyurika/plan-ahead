import 'components/styles/Assignment.scss';
import 'components/styles/Modal.scss';
import Form from './Form';
import Status from './Status';
import ListItem from './ListItem';
import Show from './Show';
import { format, parseISO } from 'date-fns';

const AssignmentView = (props) => {
  const dueDateColour = () => {
    if (props.status !== 'Complete' && parseISO(props.assigned.dueDate) < new Date()) return 'pastDue';
    return 'due';
  };

  return (
    <article className={`assignment__view ${props.status?.toLowerCase().replace(/\s+/g, '')}`}>
      {<Show {...props}/>}

      {props.admin && <Form {...props} />}
    </article >
  );
};

export default AssignmentView;