import 'components/styles/Card.scss';
import Empty from "./Empty";
import Show from "./Show";

const Assignment = (props) => {

  return (
    <>
      {(props?.id && <Show {...props} />) || <Empty {...props} />}
    </>
  );
};

export default Assignment;