import 'components/styles/Assignment.scss';
import 'components/styles/Modal.scss';
import Form from './Form';
import Show from './Show';

const AssignmentView = (props) => {
  return (
    <article className={`assignment__view ${props.status?.toLowerCase().replace(/\s+/g, '')}`}>
      {/* Don't show in admin calender view */}
      {(props.view || !props.admin) && <Show {...props} />}

      {/* Only show in admin calender view */}
      {(!props.view && props.admin) && <Form {...props} />}
    </article >
  );
};

export default AssignmentView;