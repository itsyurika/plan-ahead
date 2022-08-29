import { useRef } from 'react';
import 'components/styles/Assignment.scss';
import Assignment from "components/Assignment";

const Modal = (props) => {
  const modalRef = useRef(null);

  const handleClick = (e) => {
    if (modalRef.current === e.target) {
      props.onBack();
    }
  };


  return (
    <article className='outerwrapper'>
      <div ref={modalRef} onClick={handleClick} className={`modalBackdrop ${props.assigned?.dateCompleted ? 'complete' : ''}`}>
        <div className='form-modalContainer' >
          <div className='cancel-X' onClick={props.onBack}>&#10006;</div>
          <Assignment  {...props} />
        </div>
      </div>
    </article>
  );
};

export default Modal;