import { format, parseISO } from 'date-fns';
import 'components/styles/Assignment.scss';

const ListItem = (props) => {
  const dueDateColour = () => {
    if (parseISO(props.defaultDueDate) < new Date()) return 'pastDue';
    return 'due';
  };

  return (
    <section className='assignment__form'>
      <div className='list_content'>
        <header><h1 className='assignment_header'>{props.title}</h1></header>
        <p className='assn-subj'>{props.subject.name}</p>
        <p className='assn-desc'>Description:</p>
        <p className='desc'>{props.description}</p>
        <p className='assn-link'><a href={props.url} target="_blank" rel="noopener noreferrer">Link to Google Classroom</a></p>
        <p className={`due-date ${dueDateColour()}`}>Due: {format(props.day || parseISO(props.defaultDueDate), 'MMM dd yyyy')}</p>
      </div>
    </section>
  );
};

export default ListItem;