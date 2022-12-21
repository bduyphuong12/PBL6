import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import { NavLink, useNavigate } from 'react-router-dom';
import SearchComponent from '../../Components/Search/Search.component';
import '../../assets/bootstrap/bootstrap.min.css';
import CanvasDraw from 'react-canvas-draw';
import logo2 from '../../assets/logo/logo2.png';
import pencil from '../../assets/logo/pencil.png';
import searchI from '../../assets/logo/search.png';
import triangle from '../../assets/logo/obj_triangle.png';
import axios from 'axios';

function HomeScreen() {
  const canvasRef = useRef(null);
  const canvas = '#FFFF00';
  const brush = 4;
  let dataFinal;
  const [isShown, setIsShown] = useState(false);
  const [draw, setDraw] = useState();
  const [result, setResult] = useState([]);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const [search, setSearch] = useState('');
  const onChangeDraw = async () => {
    if (canvasRef.current) {
      let subData = canvasRef.current.canvasContainer.children[1].toDataURL();
      dataFinal = subData.substring(22);
      const form = new FormData();
      form.append('data', dataFinal);
      const res = await axios
        .post('http://127.0.0.1:5000/model', form, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          //handle success
          console.log(response);
          setResult(Object.values(response.data));
        })
        .catch((response) => {
          //handle error
          console.log(response);
        });
    }
    console.log(result);
  };
  let navigate = useNavigate();
  const keyPressEnter = (e) => {
    var val = document.getElementById('inputWord').value;
    if ((e.key === 'Enter') & (val !== '')) {
      navigate(`/detail/${search}`);
    }
  };
  const onClickSearch = () => {
    var val = document.getElementById('inputWord').value;
    if (val !== '') {
      navigate(`/detail/${search}`);
    }
  };
  return (
    <div>
      <div className='jumbotron d-flex align-items-center'>
        <img src={draw} alt='' />
        <div className='container text-center'>
          <img src={logo2} alt='logo' className='logo2' />
          <div className='input-method'>
            <div className='input-method'>
              <div className='input-method-button' onClick={handleClick}>
                <img src={pencil} alt='' className='input-icon' />
              </div>
              <div className='search-wrapper'>
                <input
                  type='text'
                  placeholder='Tra hán tự: hán, 漢, かん'
                  id='inputWord'
                  value={search}
                  onKeyPress={keyPressEnter}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
                <button onClick={onClickSearch} className='search-button'>
                  <img src={searchI} alt='' className='searchI' />
                </button>
              </div>
              <div className='draw-writing'>
                {isShown && (
                  <div className='hand-writing-area-wrapper'>
                    <div className='draw-kanji-top-bar'>
                      <div className='draw-kanji-result'>
                        {result.map((item, i) => (
                          <p id='outputResult' onClick={() => setSearch(item)} key={i}>
                            {item}
                          </p>
                        ))}
                      </div>

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
                          <CanvasDraw
                            ref={canvasRef}
                            onChange={onChangeDraw}
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
