const Show = (props) => {
  console.log('what are my props', props);
  return (
    <article className="assignment__show">
      <p>{props.first_name}</p>
      <p>{props.description}</p>
      <p>{props.url}</p>
      <p>Math</p>
      <p>Status: Started!</p>
      <button>Start!</button>
      <button>Complete!</button>
    </article>
  );
};

export default Show;