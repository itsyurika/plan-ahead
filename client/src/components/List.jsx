import 'components/styles/List.scss';
import Assignment from "components/Assignment";
import { useEffect } from 'react';


const List = (props) => {
  console.log("list-props", props)

const displayAssignments = props.assignmentList.filter((assignment) =>
      assignment.assigned.dateCompleted)

  return (

<section className='list__view'>
<h1> Hello </h1>
<ul>
  {displayAssignments.map((assignment) => {
    <li>< Assignment {...assignment.assigned}/></li>})}
  
  <li>Assn1</li>
  <li>Assn2</li>
  <li>Assn3</li>
</ul>



</section>



)}

export default List;