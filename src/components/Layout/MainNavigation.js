import { Link } from 'react-router-dom';
import React,{useContext} from 'react';
import classes from './MainNavigation.module.css';
import Authcontext from '../../store/Auth-Context';

const MainNavigation = () => {

  const ctx=useContext(Authcontext)

  const isloggedin=ctx.isLoggein
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
        {!isloggedin &&  <li>
            <Link to='/auth'>Login</Link>
          </li>}
        {isloggedin &&   <li>
            <Link to='/profile'>Profile</Link>
          </li> }
         { isloggedin && <li>
            <button onClick={ctx.logout}>Logout</button>
          </li> }
        
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
