import 'components/styles/List.scss';
import Assignment from "components/Assignment";


const List = (props) => {
  console.log("list-props", props)

const displayAssignments = props.assignmentList.filter((assignment) =>
      assignment.assigned.dateCompleted)

  console.log("display,", displayAssignments)
  return (
  

<section className='list__view'>
<h1> Completed Assignments </h1>
<ul id='ul-view'>
  {displayAssignments.map((assignment) => {
    return (
    <li className='card-li' key={assignment.id} >< Assignment 
{...assignment}
    /></li>)})}
</ul>



</section>



)}

export default List;