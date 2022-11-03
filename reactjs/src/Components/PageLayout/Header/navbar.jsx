// import { useState } from "react";

import { Link, useHistory } from 'react-router-dom';
import './navbar.css';
import { useEffect, useState } from 'react';
import logo from '../../../assets/logo/logo1.png';
function NavBar() {
  return (
    <nav className='navbar navbar-expand navbar-light '>
      <div className='nav-left-side'>
        <Link to={'/'}>
          <img className='navbar-logo' src={logo} alt='logo' />
        </Link>
        <Link to={'/login'}>
          <img src='https://i.ibb.co/PCjW83Y/avt.png' className='avt' />
        </Link>
      </div>

      <div className='nav-right-side'>
        {/* <>
          <div className='name-user'>Hi,</div>
          <div>
            {/* <img src="https://i.ibb.co/PCjW83Y/avt.png" className="avt" /> */}
        {/* <div className='dropdown'>
              <i className=' fa fa-solid fa-caret-down dropbtn'></i>
              <div className='drop-down-item dropdown-content'>
                <Link to={'/setting'}>Tài Khoản</Link>
                <button>Logout</button>
              </div>
            </div>
          </div>
        </> */}{' '}
      </div>
    </nav>
    // <>
    //   <div className='header'>
    //     <div className='header-logo'>
    //       <Link to={'/'}>
    //         <img className='navbar-logo' src={logo} alt='logo' />
    //       </Link>
    //     </div>
    //   </div>
    //   <div className='nav-right'>
    //     <Link to={'/login'}>
    //       <div>
    //         <img src='https://i.ibb.co/PCjW83Y/avt.png' className='avt' />
    //         <button className='navbar-btn' id='btnSignUp'>
    //           LOGIN
    //         </button>
    //       </div>
    //     </Link>
    //   </div>
    // </>
  );
}

export default NavBar;
