import 'components/styles/Header.scss';
import Button from './Button';

const Header = (props) => {
  return (
    <header className='navbar'>
      <nav className='navbar-container'>
        <h2 onClick={props.setHome}> {props.admin ? 'Ms. Lee' : props.student.firstName}'s Planner </h2>
        <Button className='login' action={props.onLogin}> {props.admin ? 'Teacher' : 'Student'}</Button>
      </nav>
    </header>
  );
};

export default Header;