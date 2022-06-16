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
            {...assignment} view={props.view}
          />
          </li>)})}
        </ul>
    </section>



)}

export default List;