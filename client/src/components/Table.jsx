import 'components/styles/Table.scss';
import { format, parseISO } from 'date-fns'

const Table = (props) => {
console.log('student prop', props.student)

  return (
    <section className='table__view'>
    <div className='student_names'>
      <div>Students</div>
          <ul>

            {props.students.map((student) => { 
              return <li key={student.id} onClick={() => props.setStudent(student.id)}>{student.firstName} {student.lastName}</li>
            })}

          </ul>
    </div>

    <div className='table_wrapper' >
      <p className='student_display'> {/* props.students[props.student -1].firstName*/}'s Assignments </p>
      <table className='student_table'>

        <tbody>
        <tr className='table_rows'>
          <th className="table_header">Subject</th>
          <th className="table_header">Assignment Title</th>
          <th className="table_header">Due Date</th>
          <th className="table_header">Status</th>
          <th className="table_header">Link</th>

        </tr>
          {props.assignmentList.map(assignment => {
            return (
              
        <tr key={assignment.id}>
          <td className='row_values'>{assignment.subject.name}</td>
          <td className='row_values'>{assignment.title}</td>
          <td className='row_values'>{format(parseISO(assignment.assigned.dueDate), 'MMM dd yyyy')}</td>
          <td className='row_values'>Status</td>
          <td className='row_values'>{assignment.url}</td>          
        </tr>
          )})}

 

        </tbody>
      </table>
      </div>
     </section>

  )
}


export default Table;