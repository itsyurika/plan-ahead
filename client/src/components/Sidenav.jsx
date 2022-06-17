import 'components/styles/Sidenav.scss';
import Menu from 'react-burger-menu/lib/menus/slide';

const Sidenav = (props) => {
  return (
    <Menu {...props}>

      <div>
          <h2 onClick={props.showCalendar}>Return to Calendar</h2>
      </div>
      <div>
        <ul> <h3>Subjects</h3>
          <li onClick={props.showArt}>Art</li>
          <li onClick={props.showEnglish}>English</li>
          <li onClick={props.showHistory}>History</li>
          <li onClick={props.showMath}>Math</li>
          <li onClick={props.showScience}>Science</li>
        </ul>
      </div>
      <div>
        <ul> <h3>Assignments</h3>
          <li onClick={props.showPastDue}>Past Due</li>
          {!props.admin && <li onClick={props.showComplete} >Completed</li>}
          {props.admin && <li onClick={props.showAll} >All Assignments</li>}
        </ul>
      </div>
      
    </Menu>
  );
};

export default Sidenav;