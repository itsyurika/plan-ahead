import Empty from "./Empty";
import Show from "./Show";

const Assignment = (props) => {

  return (
    <article className='assignment'>
      {(props?.id && <Show {...props} />) || <Empty />}

    </article>
  );
};

export default Assignment;