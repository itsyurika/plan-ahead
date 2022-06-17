import 'components/styles/Assignment.scss';
import Assignment from "components/Assignment";

const Modal = (props) => {
  return (
    <div className='outerwrapper'>
      <article className='assignment__show modalBackdrop'>
        <div className={`form-modalContainer ${props.status?.toLowerCase().replace(/\s+/g, '')}`} >
          <Assignment  {...props} />
        </div>
      </article>
    </div>
  );
};

export default Modal;