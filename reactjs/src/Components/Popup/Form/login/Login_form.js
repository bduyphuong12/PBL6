import React from 'react';
import './login.scss';
import faceio from '../../../../assets/logo/zyro-image1.png';
import { useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { Link } from 'react-router-dom';
import triangle from '../../../../assets/logo/obj_triangle.png';
// import { loginUser } from "../../../../Redux/apiReques";

const Login_form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [valmsg, setValmsg] = useState('');
  const [msg, setMsg] = useState('');

  const onChangeEmail = (event) => {
    let value = event.target.value;
    setEmail(value);
  };
  const onChangePassWord = (event) => {
    let value = event.target.value;
    setPassWord(value);
  };
  const validateAll = () => {
    const msg = {};
    if (isEmpty(email)) {
      msg.email = 'Please input your email';
    }
    if (isEmpty(password)) {
      msg.password = 'Please input your password';
    }
    setValmsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const onSubmitLogin = () => {
    const isValid = validateAll();
    if (!isValid) return;
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    const newUser = {
      email: email,
      password: password,
    };
  };
  return (
    <div>
      <div className='jumbotron d-flex align-items-center'>
        <div className='container text-center'>
        <div className='login'>
      <form action='' className='login_form' onSubmit={onSubmitForm}>
        <h2>ĐĂNG NHẬP</h2>
        <p>{msg}</p>
        <div className='input-container '>
          <i className='fa fa-user icon' style={{ width: 22.5 }}></i>
          <input
            type='text'
            placeholder='Email...'
            className='input'
            name='username'
            value={email}
            onChange={onChangeEmail}
          />
          <p>{valmsg.email}</p>
        </div>
        <div className='input-container'>
          <i className='fa fa-key icon'></i>
          <input
            type='password'
            placeholder='Mật khẩu...'
            className='input'
            name='password'
            value={password}
            onChange={onChangePassWord}
          />
          <p>{valmsg.password}</p>
        </div>
        <button className='btn-login' onClick={onSubmitLogin}>
          ĐĂNG NHẬP
        </button>
        <div className='register'>
          <label htmlFor='register'>Bạn chưa có tài khoản?</label>
          <Link to={'/register'}>Đăng ký</Link>
        </div>
      </form>
    </div>
        </div>
        <div className='rectangle-1'></div>
        <div className='rectangle-2'></div>
        <div className='rectangle-transparent-1'></div>
        <div className='rectangle-transparent-2'></div>
        <div className='circle-1'></div>
        <div className='circle-2'></div>
        <div className='circle-3'></div>
        <div className='triangle triangle-1'>
          <img src={triangle} alt='' />
        </div>
        <div className='triangle triangle-2'>
          <img src={triangle} alt='' />
        </div>
        <div className='triangle triangle-3'>
          <img src={triangle} alt='' />
        </div>
        <div className='triangle triangle-4'>
          <img src={triangle} alt='' />
        </div>
      </div>
    </div>
   
  );
};
export default Login_form;
