import 'components/styles/Sidenav.scss';

const SideNav = (props) => {
  return (
  <nav className='sidenav'>
     <a onClick={'hi'}>Welcome</a>
     <button className='login' onClick={props.onAdmin}> {props.admin ? 'Admin' : 'Login'}</button>
  </nav >
   );
};

export default SideNav;