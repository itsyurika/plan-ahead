import 'components/styles/Card.scss';
import Empty from "./Empty";
import Show from "./Show";

const Assignment = (props) => {

  return (
    <article className='card'>
      {(props.id && <Show {...props} />) || <Empty {...props} />}
    </article>
  );
};

export default Assignment;