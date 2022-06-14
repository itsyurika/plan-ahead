import 'components/styles/Card.scss';
import Empty from "./Empty";
import Show from "./Show";

const Assignment = (props) => {

  return (
    <>
      {(props?.id && <Show {...props} />) || <Empty onAdd={() => {console.log('clicked add');}} />}
    </>
  );
};

export default Assignment;