import 'components/styles/List.scss';
import Assignment from "components/Assignment";


const List = (props) => {

  return (
  
    <section className='list__view'>
      <h1> Completed Assignments </h1>
        <ul id='ul-view'>
          {props.assignmentList.map((assignment) => {
      
          return (

          <li className='card-li' key={assignment.id} >< Assignment 
            {...assignment }
            view={props.view}
            onStart={() => { props.updateSubmission(assignment.assigned.id, { dateStarted: new Date() }); }}
            onComplete={() => { props.updateSubmission(assignment.assigned.id, { dateCompleted: new Date() }); }}
            onCancelStarted={() => { props.updateSubmission(assignment.assigned.id, { dateStarted: null }); }}
            onCancelComplete={() => { props.updateSubmission(assignment.assigned.id, { dateCompleted: null }); }}
          />
          </li>)})}
        </ul>
    </section>

  )
}

export default List;