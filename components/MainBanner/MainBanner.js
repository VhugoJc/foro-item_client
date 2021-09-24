import Link from 'next/link';
import Particles from 'react-particles-js';
import {Row,Col} from 'antd';
import{PlayCircleOutlined,LineOutlined} from'@ant-design/icons';
export default function MainBanner(){
    return(
        <>
        <div className="main-banner"/>
            <Particles className="main-banner__particles"/>
            <div className="content-banner">
                <Row>
                    <Col lg={2}/>
                    <Col lg={16}>
                        <div className="content-banner__title">
                        <h3>La Universidad Politécnica de San Luis Potosí invita al:</h3>
                        <h1>Foro Nacional<br/>De Telemática</h1>
                        <h2>Redes y Telecomunicaciones.</h2>
                        </div>
                        <h3><Link href="/about" ><a><PlayCircleOutlined /> 	 <LineOutlined  className="line"/><LineOutlined  className="line"/><LineOutlined  className="line"/> Ver más</a></Link></h3>
                    </Col>
                    <Col lg={2}/>
                </Row>
            </div>
        </>
    );
}