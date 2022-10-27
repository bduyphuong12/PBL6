import React, { Component } from 'react';
import './about-us.css';

class AboutUs extends Component {
  render() {
    return (
      <div className='grid wide-footer row-footer'>
        <div className='col l-2 footer-icon'>
          <img
            src='data:image/png;base64,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'
            className='footer-icon__css'
            alt='logo'
          />
          <div className='footer-from'>
            <div>© 2022 J Translate.</div>
            <div>All rights reserved</div>
          </div>
        </div>
        <div className='col l-2'>
          <ul className='about'>
            <li className='about-header'>J TRANSLATE</li>

            <li className='about-info'>
              <a href='*'>All Tags</a>
            </li>
            <li className='about-info'>
              <a href='*'>Best of new</a>
            </li>
            <li className='about-info'>
              <a href='*'>Most popular</a>
            </li>
          </ul>
        </div>
        <div className='col l-2'>
          <ul className='about'>
            <li className='about-header'>UPDATES</li>
            <li className='about-info'>
              <a href='*'>ReactJS</a>
            </li>
            <li className='about-info'>
              <a href='*'>NodeJS</a>
            </li>
            <li className='about-info'>
              <a href='*'>Python</a>
            </li>
            <li className='about-info'>
              <a href='*'>SQL</a>
            </li>
          </ul>
        </div>
        <div className='col l-2'>
          <ul className='about'>
            <li className='about-header'>SCHOOL</li>
            <li className='about-info'>
              <a href='*'>DUT</a>
            </li>
            <li className='about-info'>
              <a href='*'>19TCLCNhat1 </a>
            </li>
            <li className='about-info'>
              <a href='*'>Hue</a>
            </li>
            <li className='about-info'>
              <a href='*'>Quang Tri</a>
            </li>
          </ul>
        </div>
        <div className='col l-2'>
          <div className='about'>
            <div className='about-header'>FOLLOW US</div>
            <a href='https://github.com/bduyphuong12' className='twitter follow-icon'>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z' />
              </svg>
            </a>
            <a href='https://www.facebook.com/duyphuong.bui.1203' className='facebook follow-icon'>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z' />
              </svg>
            </a>
            <a href='https://www.instagram.com/duyphuong_1203/' className='instagram follow-icon'>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z' />
              </svg>
            </a>
            <a href='*' className='discord follow-icon'>
              <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd'>
                <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm2.784 15.584h-6.804c-.678 0-1.23-.552-1.23-1.236v-8.112c0-.684.552-1.236 1.23-1.236h8.04c.678 0 1.23.552 1.23 1.236v10.764l-1.29-1.14-.726-.672-.768-.714.318 1.11zm-1.08-2.748c1.326-.042 1.836-.912 1.836-.912 0-1.932-.864-3.498-.864-3.498-.864-.648-1.686-.63-1.686-.63l-.084.096c1.02.312 1.494.762 1.494.762-.624-.342-1.236-.51-1.806-.576-.432-.048-.846-.036-1.212.012l-.102.012c-.21.018-.72.096-1.362.378l-.354.174s.498-.474 1.578-.786l-.06-.072s-.822-.018-1.686.63c0 0-.864 1.566-.864 3.498 0 0 .504.87 1.83.912l.402-.498c-.762-.228-1.05-.708-1.05-.708l.168.102.024.018.024.013.006.004.024.013c.15.084.3.15.438.204.246.096.54.192.882.258.45.084.978.114 1.554.006.282-.048.57-.132.87-.258.21-.078.444-.192.69-.354 0 0-.3.492-1.086.714l.396.486zm-2.79-2.802c-.342 0-.612.3-.612.666 0 .366.276.666.612.666.342 0 .612-.3.612-.666.006-.366-.27-.666-.612-.666zm2.19 0c-.342 0-.612.3-.612.666 0 .366.276.666.612.666.342 0 .612-.3.612-.666 0-.366-.27-.666-.612-.666z' />
              </svg>
            </a>
          </div>
        </div>
        <img
          className='footer-img'
          src='https://thietkenhanh24h.com/uploads/thietkenhanh/images/1101/cover_2-01.jpg'
          alt=''
        />
      </div>
    );
  }
}

export default AboutUs;
