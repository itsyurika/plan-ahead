import { differenceInHours, isPast, parseISO } from "date-fns";

const Show = (props) => {
  const { dueDate } = props.assigned;

  const isPastDue = (dueDate) => {
    return isPast(parseISO(dueDate)); //returns true if it's pastDue
  };

  const hrsRemaining = (dueDate) => {
    return differenceInHours(parseISO(dueDate), new Date());
  };

  const setBorderColor = (dueDate) => {
    if (props.admin) return 'default';
    if (props.status === 'Complete') return 'complete';
    if (isPastDue(dueDate)) return 'red';
    if ((hrsRemaining(dueDate) < 24)) return 'yellow';
    return 'default';
  };

  return (
    <main
      className={`card__show ${props.status?.toLowerCase().replace(/\s+/g, '')} ${setBorderColor(dueDate)}`}
      onClick={props.onClick}
    >
      <header><h4>{props.title}</h4></header>
      <h5>{props.subject?.name}</h5>
      <h5>{props.status}</h5>
    </main>
  );
};

export default Show;