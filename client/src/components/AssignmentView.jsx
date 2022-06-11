const AssignmentView = (props) => {
  return (
    <article
      className={`assignment__view ${props.subject.name.toLowerCase()}`}
      onClick={props.onClick}
    >
      <header><h3>{props.title}</h3></header>
      <p>{props.subject.name}</p>
      <p>{props.description}</p>
      <p>{props.url}</p>
      <p>Status: {props.startDate ? 'started' : 'not started'}</p>
      <button>Cancel</button>
      <button>Start</button>
      <button>Complete</button>
    </article>
  );
};

export default AssignmentView;