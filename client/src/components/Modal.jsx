import 'components/styles/Assignment.scss';
import Assignment from "components/Assignment";

const Modal = (props) => {
  return (
    <div className='outerwrapper'>
      <article className='modalBackdrop'>
        <div className={`form-modalContainer`} >
          <Assignment  {...props} />
        </div>
      </article>
    </div>
  );
};

export default Modal;