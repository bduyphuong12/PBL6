import React, { useRef, useState } from 'react';
import './detail.css';
function Detail() {
  return (
    <div>
      <div className='jumbotron d-flex align-items-center'>
        <div id='container-fluid'>
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
