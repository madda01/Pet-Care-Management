import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { SidebarData } from './CnavbarData';
import './Cnavbar.css';
import { IconContext } from 'react-icons';

const styles={
  navbar:{
    backgroundColor: '#3a3a3a',
    height: '50px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
}

function Navbar() {

    const [sidebar, setSidebar] = useState(true);

    const navigate = useNavigate();

    const backToHome = () =>{
        navigate('/');
    }

  return (
    <>
        <IconContext.Provider value={{ color: '#fff' }}>
      {/*<div style={styles.navbar}>*/}

      {/*</div>*/}

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{backgroundColor:'#3a3a3a'}}>
      <ul className='nav-menu-items'>
            <li className='navbar-toggle' style={{backgroundColor:'#3a3a3a'}}>
              <Link to='#' className='menu-bars'>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })} <br/>
          <div style={{marginLeft:20}}>
              <input type="submit" name='Logout' value='Logout from Client' className='btn btn-light'
                     onClick={backToHome}></input>
          </div>
          </ul>
      </nav>
    
      </IconContext.Provider>
      
    </>
  )
}

export default Navbar;


