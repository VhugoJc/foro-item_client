import CollegesList from './CollegesList';
import {Carousel, Row, Col} from 'antd';
import {BankOutlined} from '@ant-design/icons';

export default function Colleges(){
    //background with parallix scrolling
    return(
        <div className="section">
        <div className="colleges">
            <div className="colleges__content">
                <div className="header-section">
                    <BankOutlined className="light"/>
                    <h2 className="light">Universidades</h2>
                </div>
                <Row>
                    <Col xl={2}/>
                    <Col xl={20}>
                        <Carousel autoplay>
                            <div>
                                <CollegesList/>
                            </div>
                            <div>
                                <CollegesList/>
                            </div>
                        </Carousel>
                    </Col>
                    <Col xl={2}/>
                </Row>
            </div>  
        </div>
        </div>
    );
}