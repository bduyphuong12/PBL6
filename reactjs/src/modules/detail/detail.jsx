import React, { useRef, useState } from 'react';
import './detail.css';
import { Link } from 'react-router-dom';
import pencil from '../../assets/logo/pencil.png';
import searchI from '../../assets/logo/search.png';
import CanvasDraw from 'react-canvas-draw';

function Detail() {
  const canvasRef = useRef(null);
  const canvas = '#FCA5A5';
  const brush = 4;

  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  return (
    <div>
      <div className='jumbotron d-flex '>
        <div id='container-fluid'>
          <div className='method-input'>
            <div className='method-input-button' onClick={handleClick}>
              <img src={pencil} alt='' className='icon-input' />
            </div>
            <div className='wrapper-search'>
              <input type='text' placeholder='Tra hán tự: hán, 漢, かん' id='inputWord' />
              <Link to={'/detail/'}>
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
          </div>
          <div class='row come-in'>
            <div class='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
              <div class='panel panel-primary'>
                <div class='panel-heading'>Kết quả tra cứu</div>
                <div class='panel-body'>
                  <p>nghia cua kanji</p>
                </div>
              </div>
              <div class='panel panel-primary '>
                <div class='panel-heading'>Các từ liên quan</div>
                <div class='panel-body'>
                  <p>aaaa</p>
                </div>
              </div>
            </div>

            <div class='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
              <div class='panel panel-info'>
                <div class='panel-heading'>Nghĩa của kanji </div>
                <div class='panel-body'>
                  <p>nghĩa</p>
                  <p>load api lien quan</p>
                </div>
              </div>
            </div>

            <div class='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
              <div class='panel panel-warning'>
                <div class='panel-heading'>Cách viết</div>
                <div class='panel-body'>
                  <p>video cách viết kanji</p>
                  <p>cách phát âm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
