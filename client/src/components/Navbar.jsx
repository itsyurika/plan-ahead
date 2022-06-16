import 'components/styles/Navbar.scss';

const Navbar = (props) => {
  return (
    <header id='navbar'>
      <nav className='navbar-container container'>
        <p></p>
        <div>

          <h2> {props.admin ? 'Ms. Lee' : props.student.firstName}'s Calendar </h2>
        </div>
        <button className='login' onClick={props.onLogin}> {props.admin ? 'Admin' : 'Login'}</button>
      </nav>
    </header>
  );
};

export default Navbar;