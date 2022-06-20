import { isBefore } from "date-fns";

const Show = (props) => {
  const getBorderColor = (date) => {
    const today = new Date();
    if (props.admin) return props.subject.name.toLowerCase();
    if (props.status === 'Complete') return 'complete';
    if (isBefore(date, today)) return 'red';
    if (isBefore(date, today + 1)) return 'yellow';
    return 'default';
  };

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