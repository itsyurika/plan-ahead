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

  const completeGifRandomizer = () => {
    const rnd = Math.floor(Math.random() * 4 + 1)
    if (rnd === 1) return '/images/card-gif/star-spin.gif'
    if (rnd === 2) return '/images/card-gif/cat-roll.gif'
    if (rnd === 3) return '/images/card-gif/bouncing-panda.gif'
    if (rnd === 4) return '/images/card-gif/alpaca.webp'
  }

  return (
    <main
      className={`card__show ${props.status?.toLowerCase().replace(/\s+/g, '')} ${setBorderColor(dueDate)}`}
      onClick={props.onClick}
    >
      <header><h4>{props.title}</h4></header>
      <h5>{props.subject?.name}</h5>
      <h5>{props.status}</h5>
      {props.status === 'Complete' && <img className={'card-gif'}src={`${completeGifRandomizer()}`} />}
    </main>
  );
};

export default Show;