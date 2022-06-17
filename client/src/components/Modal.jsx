import 'components/styles/Assignment.scss';
import Assignment from "components/Assignment";

const Modal = (props) => {
  return (
    <article className='outerwrapper'>
      <div className='modalBackdrop'>
        <div className='form-modalContainer' >
          <Assignment  {...props} />
        </div>
      </div>
    </article>
  );
};

export default Modal;