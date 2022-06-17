import 'components/styles/Table.scss';

const Table = (props) => {
  console.log("tableprops", props)

  return (
    <section className='table__view'>
    <div className='student_names'>
      <div>Students</div>
          <ul>
            {props.students.map((student) => { 
              return <li key={student.id}> {student.firstName} {student.lastName} </li>
            })}
          </ul>
    </div>

    <div className='table_wrapper'>
      <p className='student_display'> Sarah's Assignments </p>
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
            return 

        <tr>
          <td className='row_values'>Art</td>
          <td className='row_values'>Portraits</td>
          <td className='row_values'>July 1</td>
          <td className='row_values'>Started</td>
          <td className='row_values'>Url 1</td>          
        </tr>
          })}
        <tr>
          <td className='row_values'>History</td>
          <td className='row_values'>World War II</td>
          <td className='row_values'>June 23</td>
          <td className='row_values'>Completed</td>  
          <td className='row_values'>Url 1</td>
        </tr>


        </tbody>
      </table>
      </div>
     </section>

  )
}


export default Table;