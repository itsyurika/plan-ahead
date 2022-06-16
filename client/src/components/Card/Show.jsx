const Show = (props) => {
  return (
    <main
      className={`card__show ${props.status?.toLowerCase().replace(/\s+/g, '')}`}
      onClick={props.onClick}
    >
      <header><h4>{props.title}</h4></header>
      <h5>{props.subject?.name}</h5>
      <h5>{props.status}</h5>
    </main>
  );
};

export default Show;