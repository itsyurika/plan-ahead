const Show = (props) => {
  return (
    <main
      className={`card__show ${props.status?.toLowerCase().replace(/\s+/g, '')}`}
      onClick={props.onClick}
    >
      <header><h3>{props.title}</h3></header>
      <p>{props.subject?.name}</p>
      <p>{props.status}</p>
    </main>
  );
};

export default Show;