import {CrownOutlined} from '@ant-design/icons';
import { Card, Col, Row, Image } from 'antd';
import ReactPlayer from 'react-player/youtube'

export default function HostBanner(){
    return(
        <>
        <div className="host-banner__turquoise"/>
        <div className="host-banner">
            <div className="header-section">
                <CrownOutlined className="dark"/>
                <h2 className="dark">Anfitrión</h2>
            </div>
                    <Row>
                    <Col lg={2}/>
                    <Col xl={6} className="host-banner__card1">
                        <Card bordered={false} >
                            <Image preview={false}  src="/img/item.png" className="host-banner__img" alt="ingenieria en telematica"/>
                            <br/>
                            <Image preview={false} src="/img/upslp.png" className="host-banner__img" alt="universidad politécnica de san luis potosi"/>
                        </Card>
                    </Col>
                    <Col span={1}/>
                    <Col xl={13} className="host-banner__card2">
                        <Card  bordered={false} >
                            <ReactPlayer
                                url ="https://www.youtube.com/watch?v=EIHJ-6kephM"
                                width="90%"
                                style={{margin:"auto"}}
                                playing
                                controls
                            />
                        </Card>
                    </Col>
                    <Col lg={2}/>
                </Row>
               
               
        </div>
        </>
    );
}