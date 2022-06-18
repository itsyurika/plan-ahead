import 'components/styles/Assignment.scss';
import Assignment from "components/Assignment";

const Modal = (props) => {

  return (
    <article className='outerwrapper'>
      <div className={`modalBackdrop ${props.assigned.dateCompleted ? 'complete' : ''}`}>
        <div className='form-modalContainer' >
        <div className='cancel-X' onClick={props.onBack}>&#10006;</div>
          <Assignment  {...props} />
        </div>
      </div>
    </article>
  );
};

export default Modal;