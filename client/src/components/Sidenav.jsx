import 'components/styles/Sidenav.scss';
import Menu from 'react-burger-menu/lib/menus/slide';

const Sidenav = (props) => {
  return (
    <Menu {...props}>
      <div>
        <header>
          <h2 onClick={() => { props.selectView(null); }}>Return to Calendar</h2>
        </header>
      </div>

      <div>
        <ul>
          <header>
            <h3>Subjects</h3>
          </header>
          <li onClick={() => { props.selectView('art'); }}>Art</li>
          <li onClick={() => { props.selectView('english'); }}>English</li>
          <li onClick={() => { props.selectView('history'); }}>History</li>
          <li onClick={() => { props.selectView('math'); }}>Math</li>
          <li onClick={() => { props.selectView('science'); }}>Science</li>
        </ul>
      </div>

      <div>
        <ul>
          <header>
            <h3>Assignments</h3>
          </header>
          <li onClick={() => { props.selectView('pastDue'); }}>Past Due</li>
          {(props.admin
            && <li onClick={() => { props.selectView('all'); }} >All Assignments</li>)
            || <li onClick={() => { props.selectView('completed'); }} >Completed</li>}
        </ul>
      </div>

      <ul>
        <header>
          <h3>Students</h3>
        </header>
        {props.students.map((student) => (
          <li key={student.id} onClick={() => props.setStudent(student.id)}>
            {student.firstName} {student.lastName}
          </li>
        ))}
      </ul>

      {props.admin &&
        <header>
          <h3 className='students-nav' onClick={() => { props.selectView('students'); }}>Student Overview</h3>
        </header>}
    </Menu>
  );
};

export default Sidenav;