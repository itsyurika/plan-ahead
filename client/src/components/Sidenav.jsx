import 'components/styles/Sidenav.scss';
import Menu from 'react-burger-menu/lib/menus/slide';

const Sidenav = (props) => {
  return (
    <Menu {...props}>
      <div>
        <header>
          <img className='logo' src={'/images/PlanAhead-logo.png'}onClick={() => { props.selectView(null); }}/>
        </header>
      </div>

      <div>
        <ul>
          <header>
            <h4>Subjects</h4>
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
            <h4>Assignments</h4>
          </header>
          <li onClick={() => { props.selectView('pastDue'); }}>Past Due</li>
          {(props.admin
            && <li onClick={() => { props.selectView('all'); }} >All Assignments</li>)
            || <li onClick={() => { props.selectView('completed'); }} >Completed</li>}
        </ul>
      </div>

      {props.admin &&
        <header>
          <h4 className='students-nav' onClick={() => { props.selectView('students'); }}>Student Overview</h4>
        </header>}
      
      <ul>
        <header>
          <h4>Students</h4>
        </header>
        {props.students.map((student) => (
          <li key={student.id} onClick={() => props.setStudent(student.id)}>
            {student.firstName} {student.lastName}
          </li>
        ))}
      </ul>
    </Menu>
  );
};

export default Sidenav;