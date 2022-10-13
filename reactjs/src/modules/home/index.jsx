import React, { useEffect } from 'react';
import './index.css';
import useGlobalStore from '../../hook/useGlobal';
import image from '../../assets/logo/img.png';
const HomeScreen = () => {
  var showAva = function (event) {
    var avaEdit = document.getElementById('output');
    try {
      avaEdit.src = URL.createObjectURL(event.target.files[0]);
    } catch (error) {}
  };
  return (
    <div className='homepage'>
      <h1>CONVERT IMAGE TO TEXT</h1>
      <div className='body-img'>
        <div className='upload-image'>
          <form runat='server' className='upload'>
            <img src={image} alt='' id='output' className='img' />
            {/* <img className='avatar-img' src='' alt='' id='output' width='200px' height='200px' /> */}
            <input accept='image/*' className='inputImg' type='file' onChange={showAva} />
          </form>
        </div>
      </div>
      <a class='button1' href='*'>
        <span class='btn1'>Convert</span>
      </a>
    </div>
  );
};

export default HomeScreen;
