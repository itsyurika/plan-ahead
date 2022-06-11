const AssignmentView = (props) => {
  return (
    <article className={`assignment__view ${props.status.toLowerCase()}`}>
      <header><h3>{props.title}</h3></header>
      <p>{props.subject.name}</p>
      <p>{props.description}</p>
      <p>{props.url}</p>
      <p>{props.status}</p>
      <button disabled={['Started', 'Complete'].includes(props.status)} onClick={props.onStart}>Start</button>
      <button disabled={props.status === 'Complete'} onClick={props.onComplete}>Complete</button>
      <button onClick={props.onBack}>Back</button>
    </article>
  );
};

export default AssignmentView;