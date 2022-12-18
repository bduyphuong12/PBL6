import React, { useRef, useState } from 'react';
import { WrapperSearch } from './Search.style';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import CanvasDraw from 'react-canvas-draw';
import pencil from '../../assets/logo/pencil.png';
import searchI from '../../assets/logo/search.png';
import axios from 'axios';
export default function SearchComponent({ kanji }) {
  const [search, setSearch] = useState('');
  const canvasRef = useRef(null);
  const canvas = '#ffff66';
  const brush = 4;
  let dataFinal;
  const [result, setResult] = useState([]);
  const [isShown, setIsShown] = useState(false);
  // const getUrl = window.location.href.split('/');
  // var wordKanji = getUrl[getUrl.length - 1];

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
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
    <WrapperSearch>
      <div className='method-input-button'>
        <img src={pencil} alt='' className='icon-input' />
      </div>
      <div className='wrapper-search'>
        <input
          type='text'
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          onKeyPress={keyPressEnter}
          placeholder='Tra hán tự: hán, 漢, かん'
          defaultValue={kanji}
          id='inputWord'
        />
        <button onClick={onClickSearch} className='search-button'>
          <img src={searchI} alt='' className='searchIcon' />
        </button>
      </div>
      <div className='writing-draw'>
        {isShown && (
          <div className='hand-writing-wrapper-area'>
            <div className='kanji-draw-top-bar'>
              <div className='kanji-draw-result'>
                {result.map((item, i) => (
                  <p id='outputResult' onClick={() => setSearch(item)} key={i}>
                    {item}
                  </p>
                ))}
              </div>
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
                  <CanvasDraw
                    ref={canvasRef}
                    brushColor={canvas}
                    onChange={onChangeDraw}
                    brushRadius={brush}
                    hideGrid={true}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </WrapperSearch>
  );
}
