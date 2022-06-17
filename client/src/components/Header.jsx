import 'components/styles/Header.scss';

const Header = (props) => {
  return (
    <header className='navbar'>
      <nav className='navbar-container'>
        <p>Home</p>
        <div>

          <h2> {props.admin ? 'Ms. Lee' : props.student.firstName}'s Calendar </h2>
        </div>
        <button className='login' onClick={props.onLogin}> {props.admin ? 'Admin' : 'Login'}</button>
      </nav>
    </header>
  );
};

export default Header;