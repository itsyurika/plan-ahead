const AssignmentView = (props) => {
  console.log('current assignment', props);
  return (
    <article
      className={`assignment__view ${props.subject.name.toLowerCase()}`}
    >
      <header><h3>{props.title}</h3></header>
      <p>{props.subject.name}</p>
      <p>{props.description}</p>
      <p>{props.url}</p>
      <p>Status: {props.assigned.dateStarted ? 'started' : 'not started'}</p>
      <button onClick={props.onStart}>Start</button>
      <button onClick={props.onComplete}>Complete</button>
      <button onClick={props.onBack}>Back</button>
    </article>
  );
};

export default AssignmentView;