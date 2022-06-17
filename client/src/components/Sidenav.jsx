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
            || <li onClick={() => { props.selectView('complete'); }} >Completed</li>}
        </ul>
      </div>
    </Menu>
  );
};

export default Sidenav;