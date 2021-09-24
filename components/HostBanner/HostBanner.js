import {CrownOutlined} from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import upslpLogo from '../../assets/img/icemaglogo.png';
import itemLogo from'../../assets/img/Logo-ITEM-web-20-21.png';
import Image from 'next/image';
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
                <Col lg={20}>
                <div className="site-card-wrapper">
                <Row>
                <Col lg={8}>
                    <Card bordered={false}>
                    <Image  src={itemLogo} className="host-banner__img" alt="ingenieria en telematica"/>
                    <Image src={upslpLogo}className="host-banner__img" alt="universidad politécnica de san luis potosi"/>
                    </Card>
                </Col>
                <Col lg={1}/>
                <Col lg={15}>
                    <Card  bordered={false}>
                        <ReactPlayer
                        url ="https://www.youtube.com/watch?v=EIHJ-6kephM"
                        width="90%"
                        style={{margin:"auto"}}
                        playing
                        controls
                        />
                    </Card>
                </Col>
                
                </Row>
            </div>
                </Col>
                <Col lg={2}/>
            </Row>
        </div>
        </>
    );
}