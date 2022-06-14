import classNames from "classnames";

const Show = (props) => {
  console.log("props for creating show slot card: ", props);
  const { dateStarted, dateCompleted } = props.assigned;

  const showClass = classNames("card__show", {
    "complete": dateCompleted,
    "started": dateStarted && !dateCompleted 
  })

  return (
    <article
      className={showClass}
      onClick={props.onClick}
    >
      <header><h3>{props.title}</h3></header>
      <p>{props.subject?.name}</p>
      {dateCompleted && <p>Complete!</p>}
      {dateStarted && !dateCompleted && <p>Started!</p>}
      {!dateStarted && !dateCompleted && <p>Not started!</p>}

    </article>
  );
};

export default Show;