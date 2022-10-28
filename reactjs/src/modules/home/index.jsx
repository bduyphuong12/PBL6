import React, { useRef, useState } from 'react';
import './index.css';
import CanvasDraw from "react-canvas-draw";
import logo2 from '../../assets/logo/logo2.jpg';
import pencil from '../../assets/logo/pencil.png';
import searchI from '../../assets/logo/search.png';

function HomeScreen() {
  const canvasRef = useRef(null);
  console.log('cavasref', canvasRef.current.clear)
  const [canvas, setBrush] = useState("#FCA5A5");
  const [brush, setThick] = useState(50);


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
        <div className="container">

      <CanvasDraw
        ref={canvasRef}
        brushColor={canvas}
        brushRadius={brush}
        hideGrid={true}
      
      />
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
        type="color"
        value={canvas}
        onChange={(event) => {
          console.log(event.target.value);
          setBrush(event.target.value);
        }}
      />

      <br />
      <label>Brush Thickness</label>
      <div className="thickness"></div>
      <input
        min="2"
        max="50"
        type="range"
        onChange={(event) => {
          console.log(event.target.value);
          setThick(event.target.value);
        }}
      />
    </div>
      </div>
      </div>
      
  );
}

export default HomeScreen;
