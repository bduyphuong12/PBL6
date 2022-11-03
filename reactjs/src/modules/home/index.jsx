import React, { useRef, useState } from 'react';
import './index.css';
import CanvasDraw from 'react-canvas-draw';
import logo2 from '../../assets/logo/logo2.jpg';
import pencil from '../../assets/logo/pencil.png';
import searchI from '../../assets/logo/search.png';

function HomeScreen() {
  const canvasRef = useRef(null);
  const canvas = '#FCA5A5';
  const brush = 4;
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div className='homepage'>
      <div className='logo'>
        <img src={logo2} alt='logo' className='logo2' />
      </div>

      <div className='input-method'>
        <div className='input-method-button' onClick={handleClick}>
          <img src={pencil} alt='' className='input-icon' />
        </div>
        <div className='search-wrapper'>
          <input placeholder='Tra hán tự: hán, 漢, かん' />
          <img src={searchI} alt='' className='searchI' />
        </div>
        {isShown && (
          <div className='hand-writing-area-wrapper'>
            <div className='draw-kanji-top-bar'>
              <div className='draw-kanji-result'></div>
              <div className='writing-button-area'>
                <div>
                  <button
                    onClick={() => {
                      canvasRef.current.undo();
                    }}
                  >
                    <i class='fa fa-repeat icon'></i>
                  </button>
                  <button
                    onClick={() => {
                      canvasRef.current.clear();
                    }}
                  >
                    <i class='fa fa-eraser icon'></i>
                  </button>
                  <button
                    onClick={() => {
                      handleClick(false);
                    }}
                  >
                    <i class='fa fa-window-close icon'></i>
                  </button>
                </div>
              </div>
              <div className='hand-writing-area margin-btm'>
                <div className='canvas-draw-kanji'>
                  {/* <canvas width='348' height='228' style='display: block; position: absolute; z-index: 15;'></canvas> */}
                  <CanvasDraw
                    className='canvas-box'
                    ref={canvasRef}
                    brushColor={canvas}
                    brushRadius={brush}
                    hideGrid={true}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
