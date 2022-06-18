import 'components/styles/Assignment.scss';
import 'components/styles/Modal.scss';
import Form from './Form';
import Show from './Show';

const AssignmentView = (props) => {
  return (
    <article className={`assignment__view ${props.status?.toLowerCase().replace(/\s+/g, '')}`}>
      {(props.view || !props.admin) && <Show {...props} />}
      {props.admin && <Form {...props} />}
    </article >
  );
};

export default AssignmentView;