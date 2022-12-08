import React, { useRef, useState } from 'react';
import { WrapperSearch } from './Search.style';
import { Link } from 'react-router-dom';
import CanvasDraw from 'react-canvas-draw';
import pencil from '../../assets/logo/pencil.png';
import searchI from '../../assets/logo/search.png';
export default function SearchComponent({kanji}) {

  const [search, setSearch] = useState('');
  const canvasRef = useRef(null);
  const canvas = '#FCA5A5';
  const brush = 4;

  const [isShown, setIsShown] = useState(false);
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <WrapperSearch>
        <div className='method-input-button' onClick={handleClick}>
          <img src={pencil} alt='' className='icon-input' />
        </div>
        <div className='wrapper-search'>
          <input type='text' onChange={onChange} placeholder='Tra hán tự: hán, 漢, かん' defaultValue={kanji} id='inputWord' />
          <Link to={`/detail/${search}`}>
            <img src={searchI} alt='' className='searchIcon' />
          </Link>
        </div>
        <div className='writing-draw'>
          {isShown && (
            <div className='hand-writing-wrapper-area'>
              <div className='kanji-draw-top-bar'>
                <div className='kanji-draw-result'>result</div>
                <div className='area-writing-button'>
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
                <div className='area-hand-writing'>
                  <div className='canvas-kanji-draw'>
                    <CanvasDraw ref={canvasRef} brushColor={canvas} brushRadius={brush} hideGrid={true} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
    </WrapperSearch>
  );
}
