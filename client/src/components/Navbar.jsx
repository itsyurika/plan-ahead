import 'components/styles/Navbar.scss';

const Navbar = (props) => {
console.log(props);
  return (
    <header id='navbar'>
      <nav className='navbar-container container'>
        <p></p>
        <div>
          {props.admin && <h2>Ms. Lee's Calendar </h2>}
          {!props.admin && <h2> {props.student.firstName}'s Calendar </h2>}
        </div>
        <button className='login' onClick={props.onLogin}> {props.admin ? 'Admin' : 'Login'}</button>
      </nav>

    </header>
  );
};

export default Navbar;