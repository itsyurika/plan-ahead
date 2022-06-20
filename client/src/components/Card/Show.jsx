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
    if (props.status === 'Complete') return 'complete';
    if (isPastDue(dueDate) && !props.admin) return 'red';
    if ((hrsRemaining(dueDate) < 24) && !props.admin) return 'yellow';
    if (props.admin && props.subject.name === 'Art') return 'art';
    if (props.admin && props.subject.name === 'English') return 'english';
    if (props.admin && props.subject.name === 'History') return 'history';
    if (props.admin && props.subject.name === 'Math') return 'math';
    if (props.admin && props.subject.name === 'Science') return 'science';

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