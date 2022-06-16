import 'components/styles/Sidenav.scss';
import Menu from 'react-burger-menu/lib/menus/slide';

const Sidenav = (props) => {

  return (
    <Menu {...props}>

      <div>
        <a href="/">
          <h2>Return to Calendar</h2>
        </a>
      </div>
      <div>
        <ul> <h3>Subjects</h3>
          <li><a href='#'>Art</a></li>
          <li><a href='#'>English</a></li>
          <li><a href='#'>History</a></li>
          <li><a href='#'>Math</a></li>
          <li><a href='#'>Science</a></li>
        </ul>
      </div>
      <div>
        <ul> <h3>Assignments</h3>
          <li><a href='#'>Past Due</a></li>
          <li><a href='#'>Completed</a></li>
        </ul>
      </div>
    </Menu>
  );
};

export default Sidenav;