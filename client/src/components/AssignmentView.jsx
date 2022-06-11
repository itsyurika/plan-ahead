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
      <p>Status: {props.status}</p>
      <button disabled={props.status === 'Started' || 'Complete' ? true : false}onClick={props.onStart}>Start</button>
      <button disabled={props.status === 'Complete' ? true : false} onClick={props.onComplete}>Complete</button>
      <button onClick={props.onBack}>Back</button>
    </article>
  );
};

export default AssignmentView;