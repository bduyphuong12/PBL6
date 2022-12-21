import React, { useState } from 'react';
import './detail.css';
import axios from 'axios';
import AudioPlayer from 'react-h5-audio-player';
import ReactPlayer from 'react-player';
import 'react-h5-audio-player/lib/styles.css';
import { Image, List, Row, Col, Table, Typography } from 'antd';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import SearchComponent from '../../Components/Search/Search.component';

function Detail() {
  const { Paragraph } = Typography;
  const [data, setData] = useState({});
  const [dataMazzi, setDataMazzi] = useState({});
  const kanji = useParams().kanji;

  useEffect(() => {
    fetchData();
    fetchDataMazzi();
  }, [kanji]);

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: `https://kanjialive-api.p.rapidapi.com/api/public/kanji/${kanji}`,
      headers: {
        'X-RapidAPI-Key': '7735c1c38fmsh60ea14ac6f9fd18p1abb1ejsne83037eae0b6',
        'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com',
      },
    };
    const data = await axios.request(options);
    setData(data.data);
  };

  const fetchDataMazzi = async () => {
    const options = {
      method: 'GET',
      url: `https://mazii.net/api/mazii/${kanji}/1`,
    };
    const data = await axios.request(options);
    setDataMazzi(data.data.results[0]);
  };

  const columns = [
    {
      title: '#',
      dataIndex: 'stt',
      key: '#',
    },
    {
      title: 'Từ',
      dataIndex: 'text',
      key: 'text',
    },
    {
      title: 'Hiragana',
      dataIndex: 'hira',
      key: 'hira',
    },
    {
      title: 'Hán Việt',
      dataIndex: 'hv',
      key: 'hv',
    },
    {
      title: 'Nghĩa',
      dataIndex: 'mean',
      key: 'mean',
    },
  ];

  const exampleData = dataMazzi?.examples?.map((item, index) => ({
    stt: index,
    text: item.w,
    hira: item.p,
    hv: item.h,
    mean: item.m,
  }));

  return (
    <div>
      <div className='jumbotron d-flex '>
        <div id='container-fluid'>
          <SearchComponent kanji={kanji} />
          <div class='row come-in'>
            <div class='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
              <div class='panel panel-primary'>
                <div class='panel-heading'>
                  <p>Kanji</p>
                </div>
                <div class='panel-body'>
                  <Image src={data?.kanji?.video.poster} />
                  <p style={{ textAlign: 'center' }}>{dataMazzi?.mean}</p>
                </div>
              </div>
            </div>

            <div class='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
              <div class='panel panel-info'>
                <div class='panel-heading'>
                  <p>Kết quả</p>
                </div>
                <div class='panel-body'>
                  <div>
                    <Paragraph>
                      Bộ: {dataMazzi.kanji} - {dataMazzi.mean}
                    </Paragraph>
                    <Paragraph>訓: {dataMazzi?.kun}</Paragraph>
                    <Paragraph>音: {dataMazzi?.on}</Paragraph>
                    <Paragraph>Số nét: {dataMazzi?.stroke_count}</Paragraph>
                    <Paragraph>JLPT: {dataMazzi?.level}</Paragraph>
                    <Paragraph>
                      Bộ thành phần:
                      {dataMazzi?.compDetail?.map((item) => (
                        <span>
                          {' '}
                          {item.w} - {item.h}
                        </span>
                      ))}
                    </Paragraph>
                    <Paragraph>Nghĩa: {dataMazzi.detail}</Paragraph>
                  </div>
                  <Table columns={columns} dataSource={exampleData} />
                </div>
              </div>
            </div>

            <div class='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
              <div class='panel panel-warning'>
                <div class='panel-heading'>Cách viết</div>
                <div class='panel-body'>
                  <p>Cách viết kanji</p>
                  <div>
                    <ReactPlayer
                      width='100%'
                      loop={true}
                      playing={true}
                      muted={true}
                      height='100%'
                      autoplay={true}
                      controls={true}
                      url={data?.kanji?.video?.mp4}
                    />
                  </div>
                </div>
              </div>

              <div class='panel panel-warning '>
                <div class='panel-heading'>
                  <p>Từ vựng liên quan tới {kanji}</p>
                </div>
                <div class='panel-body example'>
                  <List
                    bordered
                    dataSource={data?.examples}
                    renderItem={(item) => (
                      <List.Item>
                        <Row>
                          <Col span={18}>
                            <p>{item.japanese}</p>
                          </Col>

                          <Col span={6}>
                            <p>{item.meaning.english}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={24}>
                            <AudioPlayer src={item.audio.mp3} />
                          </Col>
                        </Row>
                      </List.Item>
                    )}
                  />
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
