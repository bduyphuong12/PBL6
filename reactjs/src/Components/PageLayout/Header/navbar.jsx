// import { useState } from "react";
import '../../../assets/bootstrap/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom';
import './navbar.css';
import { useEffect, useState } from 'react';
import logo from '../../../assets/logo/logo1.png';
function NavBar() {
  return (
    <nav id='header-navbar' className='navbar navbar-expand-lg py-4'>
      <div className='container'>
        <Link className='navbar-brand d-flex align-items-center text-white' to={'/'}>
          <h3 className='font-weight-bolder mb-0'>JTranslate</h3>
        </Link>

        <div className='collapse navbar-collapse' id='navbar-nav-header'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to={'/'}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={'/about'}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={'/blog'}>
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={'/contact'}>
                Contact
              </Link>
            </li>

            <li className='nav-item only-desktop'>
              <Link className='nav-link' id='side-nav-open' to={'/login'}>
                <svg width='25' height='25' viewBox='0 0 24 25'>
                  <path
                    fill='currentColor'
                    d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
