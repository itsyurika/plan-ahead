import './styles/Popup.scss';
import { format, subDays } from 'date-fns';

const Popup = (props) => {
  const today = new Date();

  // ==helpers==
  const dueToday = props.assignmentList.filter(assignment => (
    format(subDays(today, 1), 'MMM dd yyyy') === format(assignment.assigned.dueDate, 'MMM dd yyyy')
  ));

  const dueTmrw = props.assignmentList.filter(assignment => (
    format(today, 'MMM dd yyyy') === format(assignment.assigned.dueDate, 'MMM dd yyyy')
  ));

  const dueBefore = props.assignmentList.filter(assignment => (
    (format(today, 'MMM dd yyyy') > format(assignment.assigned.dueDate, 'MMM dd yyyy') && !assignment.assigned.dateCompleted)
  ));


  return (
    <div className={`popup ${props.isPopupOpen ? "open" : "closed"}`} onClick={props.onClose}>
    <div className="popup__contents">
      <h4>Welcome {props.student.firstName}!</h4>
      <h3>Work to do today</h3>
      <div className='list-group'>
      <h4>Due Today</h4>
      <ul>
      {dueToday.length ? dueToday.map((due) => {
          return <li key={due.id}>{due.subject.name} - {due.title} - {due.status}</li>
        }) : <li>Nothing Due!</li>}

      </ul>
      </div>
      <div className='list-group'>
      <h4>Due Tomorrow</h4>
      <ul>
      {dueTmrw.length ? dueTmrw.map((due) => {
          return <li key={due.id}>{due.subject.name} - {due.title} - {due.status}</li>
        }) : <li>Nothing Due!</li>}
      </ul>
      </div>
      <div className='list-group past-due' onClick={() => { props.selectView('pastDue'); }}>
        <h4 onClick={props.showPastDue}>Past Due</h4>
        <ul>
        {dueBefore.length ? dueBefore.map((due) => {
          return <li key={due.id}>{due.subject.name} - {due.title} - {due.status}</li>
        }) : <li>Great job! Nothing overdue!</li>}
        </ul>
      </div>

      </div>
    </div>
  );
};

export default Popup;