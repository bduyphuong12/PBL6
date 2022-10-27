import React, { useCallback, useEffect, useRef, useState } from 'react';
import './index.css';
import logo2 from '../../assets/logo/logo2.jpg';
import pencil from '../../assets/logo/pencil.png';
import searchI from '../../assets/logo/search.png';
function HomeScreen() {
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const [mouseDown, setMouseDown] = useState(false);
  const [lastPosition, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');
    }
  }, []);

  const draw = useCallback(
    async (x, y) => {
      if (mouseDown) {
        ctx.current.beginPath();
        ctx.current.strokeStyle = 'green';
        ctx.current.lineWidth = 4;
        ctx.current.lineJoin = 'round';
        ctx.current.moveTo(lastPosition.x, lastPosition.y);
        ctx.current.lineTo(x, y);
        ctx.current.closePath();
        ctx.current.stroke();
        setPosition({
          x,
          y,
        });
      }
    },
    [lastPosition, mouseDown, setPosition],
  );

  const clear = () => {
    ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height);
  };

  const onMouseDown = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY,
    });
    setMouseDown(true);
  };

  const onMouseUp = (e) => {
    setMouseDown(false);
  };

  const onMouseMove = (e) => {
    draw(e.pageX, e.pageY);
  };

  return (
    <div className='homepage'>
      <div className='logo'>
        <img src={logo2} alt='logo' className='logo2' />
      </div>

      <div className='input-method'>
        <div className='input-method-button'>
          <img src={pencil} alt='' className='input-icon' />
        </div>
        <div className='search-wrapper'>
          <input placeholder='Tra hán tự: hán, 漢, かん' />
          <img src={searchI} alt='' className='searchI' />
        </div>
      </div>
      <div className='hand-writing-area-wrapper'>
        <div className='draw-kanji-top-bar'>
          <div className='draw-kanji-result'></div>
          <div className='writing-button-area'>
            <div>
              <button>
                <i class='fa fa-repeat icon'></i>
              </button>
              <button>
                <i class='fa fa-eraser icon' onClick={clear}></i>
              </button>
              <button>
                <i class='fa fa-window-close icon'></i>
              </button>
            </div>
          </div>
          <div className='hand-writing-area margin-btm'>
            <div className='canvas-draw-kanji'>
              {/* <canvas width='348' height='228' style='display: block; position: absolute; z-index: 15;'></canvas> */}
              <canvas
                className='canvas-box'
                // id='canvas_box'
                width={400}
                height={228}
                ref={canvasRef}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
                onMouseMove={onMouseMove}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
