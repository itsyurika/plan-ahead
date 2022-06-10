import Empty from "./Empty";
import Show from "./Show";

const Assignment = (props) => {

  return (
    <article className='assignment'>
      <Show {...props} />

    </article>
  );
};

export default Assignment;