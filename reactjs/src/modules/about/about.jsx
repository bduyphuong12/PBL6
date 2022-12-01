import React, { useRef, useState } from 'react';
import './about.css';
import triangle from '../../assets/logo/obj_triangle.png';
function About() {
  return (
    <div>
      <div className='jumbotron d-flex align-items-center'>
        <div className='container text-center'>
          <div class='container'>
            <div class='row'></div>
            <div class='row'>
              <div class='col-md-4 col-sm-4 col-xs-12'>
                <div class='row section-success ourTeam-box text-center'>
                  <div class='col-md-12 section1'>
                    <img src='https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/123795644_1876976129119938_1717053274022819800_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=XEWFLgSf4yYAX9QUyHW&_nc_ht=scontent.fdad2-1.fna&oh=00_AfDjzN7E_9WM3h8KdUen6HLBtVEoKRTblrf1setXU_iGXQ&oe=63B04FEF' />
                  </div>
                  <div class='col-md-12 section2 pb-3'>
                    <p>Phan Hữu Minh Trí</p>
                    <span>
                      19TCLCNhat1 <br />
                      Hue, Viet Nam
                    </span>
                  </div>
                  <div class='col-md-12 section3'>
                    <a href='https://www.facebook.com/minhtri162001'>
                      <svg width='32' height='32' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z'
                        />
                      </svg>
                    </a>
                    <a href='https://github.com/MinhTri111'>
                      <svg width='32' height='32' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z'
                        />
                      </svg>
                    </a>
                    <a href=''>
                      <svg width='32' height='32' viewBox='0 0 256 256'>
                        <path
                          fill='currentColor'
                          d='M172 36H84a48 48 0 0 0-48 48v88a48 48 0 0 0 48 48h88a48 48 0 0 0 48-48V84a48 48 0 0 0-48-48Zm-44 132a40 40 0 1 1 40-40a40 40 0 0 1-40 40Z'
                          opacity='.2'
                        />
                        <path
                          fill='currentColor'
                          d='M128 80a48 48 0 1 0 48 48a48 48 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32.1 32.1 0 0 1-32 32Z'
                        />
                        <path
                          fill='currentColor'
                          d='M172 28H84a56 56 0 0 0-56 56v88a56 56 0 0 0 56 56h88a56 56 0 0 0 56-56V84a56 56 0 0 0-56-56Zm40 144a40 40 0 0 1-40 40H84a40 40 0 0 1-40-40V84a40 40 0 0 1 40-40h88a40 40 0 0 1 40 40Z'
                        />
                        <circle cx='180' cy='76' r='12' fill='currentColor' />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class='col-md-4 col-sm-4 col-xs-12'>
                <div class='row section-info ourTeam-box text-center'>
                  <div class='col-md-12 section1'>
                    <img src='https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/275369068_1450111608743142_4423956209003690256_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AVWg9qYOpQsAX9xyFaE&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDdIp3bZenW-InGQ_hZNAslNSdL2lbWILPN6uAcn1-Xpw&oe=638E4753' />
                  </div>
                  <div class='col-md-12 section2 pb-3'>
                    <p>Bùi Duy Phương</p>
                    <span>
                      19TCLCNhat1 <br />
                      Quang Tri, Viet Nam
                    </span>
                  </div>
                  <div class='col-md-12 section3'>
                    <a href='https://www.facebook.com/duyphuong.bui.1203/'>
                      <svg width='32' height='32' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z'
                        />
                      </svg>
                    </a>
                    <a href='https://github.com/bduyphuong12'>
                      <svg width='32' height='32' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z'
                        />
                      </svg>
                    </a>
                    <a href=''>
                      <svg width='32' height='32' viewBox='0 0 256 256'>
                        <path
                          fill='currentColor'
                          d='M172 36H84a48 48 0 0 0-48 48v88a48 48 0 0 0 48 48h88a48 48 0 0 0 48-48V84a48 48 0 0 0-48-48Zm-44 132a40 40 0 1 1 40-40a40 40 0 0 1-40 40Z'
                          opacity='.2'
                        />
                        <path
                          fill='currentColor'
                          d='M128 80a48 48 0 1 0 48 48a48 48 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32.1 32.1 0 0 1-32 32Z'
                        />
                        <path
                          fill='currentColor'
                          d='M172 28H84a56 56 0 0 0-56 56v88a56 56 0 0 0 56 56h88a56 56 0 0 0 56-56V84a56 56 0 0 0-56-56Zm40 144a40 40 0 0 1-40 40H84a40 40 0 0 1-40-40V84a40 40 0 0 1 40-40h88a40 40 0 0 1 40 40Z'
                        />
                        <circle cx='180' cy='76' r='12' fill='currentColor' />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class='col-md-4 col-sm-4 col-xs-12'>
                <div class='row section-danger ourTeam-box text-center'>
                  <div class='col-md-12 section1'>
                    <img src='https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/241870827_1681052345416921_3310919235212854390_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=s0TSKpbMZRQAX875QqW&_nc_ht=scontent.fdad1-3.fna&oh=00_AfAsj4UusPvch5ReU3QuJIFCIZ6PLv60nHeSygky0OH4aQ&oe=638DFE58' />
                  </div>
                  <div class='col-md-12 section2 pb-3'>
                    <p>Hoàng Trọng Thái</p>
                    <span>
                      19TCLCNhat1 <br />
                      Hue, Viet Nam
                    </span>
                  </div>
                  <div class='col-md-12 section3'>
                    <a href='https://www.facebook.com/thai.uciat'>
                      <svg width='32' height='32' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z'
                        />
                      </svg>
                    </a>
                    <a href=''>
                      <svg width='32' height='32' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z'
                        />
                      </svg>
                    </a>
                    <a href=''>
                      <svg width='32' height='32' viewBox='0 0 256 256'>
                        <path
                          fill='currentColor'
                          d='M172 36H84a48 48 0 0 0-48 48v88a48 48 0 0 0 48 48h88a48 48 0 0 0 48-48V84a48 48 0 0 0-48-48Zm-44 132a40 40 0 1 1 40-40a40 40 0 0 1-40 40Z'
                          opacity='.2'
                        />
                        <path
                          fill='currentColor'
                          d='M128 80a48 48 0 1 0 48 48a48 48 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32.1 32.1 0 0 1-32 32Z'
                        />
                        <path
                          fill='currentColor'
                          d='M172 28H84a56 56 0 0 0-56 56v88a56 56 0 0 0 56 56h88a56 56 0 0 0 56-56V84a56 56 0 0 0-56-56Zm40 144a40 40 0 0 1-40 40H84a40 40 0 0 1-40-40V84a40 40 0 0 1 40-40h88a40 40 0 0 1 40 40Z'
                        />
                        <circle cx='180' cy='76' r='12' fill='currentColor' />
                      </svg>
                    </a>
                  </div>
                </div>
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

export default About;
