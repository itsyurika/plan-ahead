const Show = (props) => {
  return (
    <article
      className={`assignment__show ${props.subject.name.toLowerCase()}`}
      onClick={props.onClick}
    >
      <header><h3>{props.title}</h3></header>
      <p>{props.subject.name}</p>
      <p>Status: {props.status}</p>
    </article>
  );
};

export default Show;