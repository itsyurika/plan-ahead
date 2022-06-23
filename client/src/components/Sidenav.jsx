import 'components/styles/Sidenav.scss';
import Menu from 'react-burger-menu/lib/menus/slide';
import Button from './Button';

const Sidenav = (props) => {
  return (
    <Menu {...props}>
      <div>
        <header>
          <img className='logo' src={'/images/PlanAhead-logo.png'} onClick={() => { props.selectView(null); }} />
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
        <div>
          <header className='students-nav'>
            <h4 onClick={() => { props.selectView('students'); }}>Student Overview</h4>
          </header>
        </div>}

      <div className='debug'>
        <ul className='debug students-nav'>
          {props.students.map((student) => (
            <li key={student.id} onClick={() => props.setStudent(student.id)}>
              {student.firstName} {student.lastName}
            </li>
          ))}
          <Button style='info debug' action={props.onLogin} disabled={props.view === 'students'}> {props.admin ? 'Teacher' : 'Student'}</Button>
        </ul>
      </div>
    </Menu>
  );
};

export default Sidenav;