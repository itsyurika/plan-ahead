import 'components/styles/Table.scss';
import { format, parseISO } from 'date-fns';

const Table = (props) => {
  console.log(props)
  return (
    
    <section className='table__view'>
      <div className='student_names'>
        <div className='student_header'>Students</div>
        <ul>

          {props.students.map((student) => (
            <li className='student_li' key={student.id} onClick={() => props.setStudent(student.id)}>
              {student.firstName} {student.lastName}
            </li>
          ))}
        </ul>
      </div>

      <div className='table_wrapper' >
        <p className='student_display'> {props.student.firstName}'s Assignments </p>
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
                  <td className={`row_values ${assignment.status}`}>{assignment.status}</td>
                  <td className='row_values link'><a href={assignment.url} target="_blank" rel="noopener noreferrer">Link to Google Classroom</a></td>
                </tr>
              );
            })}

          </tbody>
        </table>
      </div>
    </section>

  );
};


export default Table;