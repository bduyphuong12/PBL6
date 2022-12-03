import React, { useRef, useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import '../../assets/bootstrap/bootstrap.min.css';
import CanvasDraw from 'react-canvas-draw';
import logo2 from '../../assets/logo/logo2.png';
import pencil from '../../assets/logo/pencil.png';
import searchI from '../../assets/logo/search.png';
import triangle from '../../assets/logo/obj_triangle.png';
function HomeScreen() {
  const canvasRef = useRef(null);
  const [canvas, setBrush] = useState('#FCA5A5');
  const [brush, setThick] = useState(50);

  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  return (
    // <div className='homepage'>
    //   <div className='logo'>
    //     <img src={logo2} alt='logo' className='logo2' />
    //   </div>

    <div>
      <div className='jumbotron d-flex align-items-center'>
        <div className='container text-center'>
          <img src={logo2} alt='logo' className='logo2' />
          <div className='input-method'>
            <div className='input-method'>
              <div className='input-method-button' onClick={handleClick}>
                <img src={pencil} alt='' className='input-icon' />
              </div>
              <div className='search-wrapper'>
                <input type='text' placeholder='Tra hán tự: hán, 漢, かん' id='inputWord' />
                <Link to={'/detail/'}>
                  <img src={searchI} alt='' className='searchI' />
                </Link>
              </div>
              <div className='draw-writing'>
              {isShown && (
                <div className='hand-writing-area-wrapper'>
                  <div className='draw-kanji-top-bar'>
                    <div className='draw-kanji-result'>result</div>
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
                          <CanvasDraw ref={canvasRef} brushColor={canvas} brushRadius={brush} hideGrid={true} />
                          <button
                            onClick={() => {
                              canvasRef.current.undo();
                            }}
                          >
                            UNDO
                          </button>
                          <button
                            onClick={() => {
                              canvasRef.current.clear();
                            }}
                          >
                            CLEAR
                          </button>
                          <br />
                          <label>Colour picker</label>
                          <input
                            style={{ background: { canvas } }}
                            type='color'
                            value={canvas}
                            onChange={(event) => {
                              console.log(event.target.value);
                              setBrush(event.target.value);
                            }}
                          />

                          <br />
                          <label>Brush Thickness</label>
                          <div className='thickness'></div>
                          <input
                            min='2'
                            max='50'
                            type='range'
                            onChange={(event) => {
                              console.log(event.target.value);
                              setThick(event.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
              )}
              </div>
            </div>
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
}

export default HomeScreen;
