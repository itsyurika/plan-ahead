import { isBefore, addDays } from "date-fns";

const Show = (props) => {
  // helpers
  const getBorderColor = (date) => {
    // priority styles
    if (props.admin) return props.subject.name.toLowerCase();
    if (props.status === 'Complete') return 'complete';

    // check overdue status
    const today = new Date();
    if (isBefore(date, today)) return 'red';
    if (isBefore(date, addDays(today, 1))) return 'yellow';
    return 'default';
  };

  // render component
  return (
    <main
      className={`card__show ${props.status?.toLowerCase().replace(/\s+/g, '')} ${getBorderColor(props.assigned.dueDate)}`}
      onClick={props.onClick}
    >
      <header><h4>{props.title}</h4></header>
      <h5>{props.subject?.name}</h5>
      <h5>{props.status}</h5>
    </main>
  );
};

export default Show;