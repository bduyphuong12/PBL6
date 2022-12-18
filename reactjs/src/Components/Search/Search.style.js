import styled from 'styled-components';

export const WrapperSearch = styled.div`
  position: relative;
  text-align: center;
  padding-bottom: 20px;

  .icon-input {
    font-weight: 65px;
    height: 43px;
    margin-right: 2px;
    width: 40px;
    padding: 3px;
    color: #333;
    border-radius: 10px;
    background-color: #f8f9fa;
    border: 1px solid #dfe1e5;
    cursor: pointer;
    position: absolute;
    left: 330px;
  }
  .icon-input:hover {
    box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
    border: 1px solid #dadce0;
  }
  .wrapper-search {
    padding: 9px;
    width: 37%;
    display: inline-block;
    flex-direction: row;
    color: rgba(0, 0, 0, 0.87);
    border: 1px solid #dfe1e5;
    box-shadow: none;
    border-radius: 10px;
    z-index: 10;
    background: #fff;
  }
  .search-button{

  }
  .wrapper-search input {
    font-size: 1.1rem;
    line-height: 1.1rem;
    width: 380px;
    float: left;
    background-color: transparent;
    border: none;
    word-wrap: break-word;
    outline: none;
    flex: 1;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }
  .searchIcon {
    width: 20px;
    height: 20px;
    cursor: pointer;
    float: right;
  }
  .hand-writing-wrapper-area {
    width: 37%;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-top: 0 solid rgba(0, 0, 0, 0.08);
    border-radius: 0 0 10px 10px;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 8%);
    position: absolute;
    z-index: 1;
    left: 370px;
    top: 41px;
  }

  .kanji-draw-result {
    height: 42px;
    overflow: auto;
    white-space: nowrap;
    flex-grow: 1;
    background: #fff;
    display: inline-block;
  }
  .area-writing-button {
    height: 50px;
    float: right;
    background-color: #f0f0f0;
    display: inline-flex;
    flex-direction: column;
  }
  .area-writing-button button {
    background-color: #f5f5f5 !important;
    background-image: -webkit-linear-gradient(top, #f5f5f5, #f1f1f1);
    border: 1px solid rgba(0, 0, 0, 0.1) !important;
    padding: 0.6971429em;
    cursor: pointer;
  }
  .area-writing-button i {
    font-size: 1em;
    margin: auto auto;
    display: inline-block;
  }

  .canvas-kanji-draw {
    border-top: 0.5px solid #ebebeb;
    border-bottom: 0.5px solid #ebebeb;
  }
`;
