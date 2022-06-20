import 'components/styles/Alert.scss';

const Alert = (props) => {
  return (
    <article className={'alert'}>
      <header><h2 className='title'>{props.title}</h2></header>
      <div className='description'>
        <p>{props.text}</p>
      </div>
    </article>
  );
};

export default Alert;