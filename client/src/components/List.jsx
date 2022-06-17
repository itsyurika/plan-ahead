import 'components/styles/List.scss';
import Assignment from "components/Assignment";

const List = (props) => {

  const viewName = () => {
    if (props.view === 'pastDue') return 'Past Due';
    if (props.view === 'complete') return 'Completed';
    if (props.view === 'art') return 'Art';
    if (props.view === 'english') return 'English';
    if (props.view === 'history') return 'History';
    if (props.view === 'math') return 'Math';
    if (props.view === 'science') return 'Science';
  };

  return (
    <section className='list__view'>
      <h1> {viewName()} Assignments </h1>
      <ul id='ul-view'>
        {props.assignmentList.map((assignment) => (
          <li className='card-li' key={assignment.id}>
            <Assignment
              {...assignment}
              view={props.view}
              onStart={() => { props.updateSubmission(assignment.assigned.id, { dateStarted: new Date() }); }}
              onComplete={() => { props.updateSubmission(assignment.assigned.id, { dateCompleted: new Date() }); }}
              onCancelStarted={() => { props.updateSubmission(assignment.assigned.id, { dateStarted: null }); }}
              onCancelComplete={() => { props.updateSubmission(assignment.assigned.id, { dateCompleted: null }); }}
            />
          </li>
        ))}
      </ul>
    </section>

  );
};

export default List;