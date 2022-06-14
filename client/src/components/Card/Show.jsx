import classNames from "classnames";

const Show = (props) => {
  const { dateStarted, dateCompleted } = props.assigned;

  const showClass = classNames("card__show", {
    "complete": dateCompleted,
    "started": dateStarted && !dateCompleted 
  })

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