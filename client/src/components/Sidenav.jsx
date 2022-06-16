import 'components/styles/Sidenav.scss';
import Menu from 'react-burger-menu/lib/menus/slide';
import { useState } from 'react';

const Sidenav = (props) => {

  return (
    <Menu {...props}>

      <div>
          <h2 onClick={props.showCalendar}>Return to Calendar</h2>
      </div>
      <div>
        <ul> <h3>Subjects</h3>
          <li>Art</li>
          <li>English</li>
          <li>History</li>
          <li>Math</li>
          <li>Science</li>
        </ul>
      </div>
      <div>
        <ul> <h3>Assignments</h3>
          <li onClick={props.showPastDue}>Past Due</li>
          <li onClick={props.showComplete} >Completed</li>
        </ul>
      </div>
    </Menu>
  );
};

export default Sidenav;