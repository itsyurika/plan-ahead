import 'components/styles/Sidenav.scss';

const SideNav = (props) => {
  return (
  <nav className='sidenav'>
     <a>Welcome</a>
     <button className='login' onClick={props.onLogin}> {props.admin ? 'Admin' : 'Login'}</button>
  </nav >
   );
};

export default SideNav;