import 'components/styles/Table.scss';
import { format, isAfter} from 'date-fns';

const Table = (props) => {
  const subjOptions = [ // todo get from database
    <option key={0}>Subjects</option>,
    <option key={1} value='1'>Art</option>,
    <option key={2} value='2'>English</option>,
    <option key={3} value='3'>History</option>,
    <option key={4} value='4'>Math</option>,
    <option key={5} value='5'>Science</option>,
  ];

  const statOptions = [ // todo get from database
    <option key={0}>Status</option>,
    <option key={1} value='1'>Not Started</option>,
    <option key={2} value='2'>Started</option>,
    <option key={3} value='3'>Complete</option>,
  ];

  const assignmentStatus = (dueDate, assignmentStatus) => {
    console.log("assignment status fxn: ", dueDate, assignmentStatus);
    if ((isAfter(new Date(), dueDate)) && (assignmentStatus !== 'Complete')) {
      return 'Overdue';}
    return assignmentStatus;
  }

  return (
    <section className='student_overview'>
      <div className='sidebar'>
      <button className='remind_button' onClick={props.onRemind}><p>Remind Students</p></button>

      <div className='student_list'>
        <h4 className='student_names'>Student</h4>
        {props.students.map((student) => (
          <p className='student_name' key={student.id} onClick={() => props.setStudent(student.id)}>
            {student.firstName} {student.lastName}
          </p>
        ))}
        </div>
      </div>
      <div className='body'>
        <div className='header'>
          
          <div className='dropdown'>
            <select className='subjects' onChange={(e) => console.log("selected subject")}>
              {subjOptions}
            </select>
            <select className='status' onChange={(e) => console.log("selected status")}>
              {statOptions}
            </select>
          </div>
          <div className='student_stats_container'>
            <h4 className='name'> {props.student.firstName}'s Assignments </h4>
            <div className='stats'>
              <div className='stat'>
                <h2 className='number' id='complete'>4</h2>
                <p className='label'>Complete</p>
              </div>
              <div className='stat'>
                <h2 className='number' id='started'>1</h2>
                <p className='label'>Started</p>
              </div>
              <div className='stat'>
                <h2 className='number' id='overdue'>3</h2>
                <p className='label'>Overdue</p>
              </div>
              <div className='stat'>
                <h2 className='number' id='assigned'>10</h2>
                <p className='label'>Assigned</p>
              </div>
            </div>
          </div>
        </div>
        <div className='table_wrapper' >
          <table className='student_table'>
            <tbody>
              <tr className='header_row'>
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
                    <td className='row_values'>{format(assignment.assigned.dueDate, 'MMM dd yyyy')}</td>
                    <td className={`row_values ${assignmentStatus(assignment.assigned.dueDate, assignment.status)}`}>{assignmentStatus(assignment.assigned.dueDate, assignment.status)}</td>
                    <td className='row_values link'><a href={assignment.url} target="_blank" rel="noopener noreferrer">Google Classroom</a></td>
                  </tr>
                );
              })}

            </tbody>
          </table>
        </div>
      </div>


    </section>

  );
};


export default Table;