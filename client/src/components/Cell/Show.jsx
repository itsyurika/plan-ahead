const Show = (props) => {
  return (
    <article
      className={`card__show ${props.status?.toLowerCase()}`}
      onClick={props.onClick}
    >
      <header><h3>{props.title}</h3></header>
      <p>{props.subject?.name}</p>
      <p>{props.status}</p>
    </article>
  );
};

export default Show;