import {Space, Divider,Row, Col} from 'antd';
import {FieldTimeOutlined} from '@ant-design/icons';
export default function CountDown(){
    return(
        <div className="count-down">
            <div className="header-section">
                    <FieldTimeOutlined className="light" />
                    <h2 className="light">Tiempo restante</h2>
            </div>
                <Space split={<Divider  type="vertical"/>}>
                <Col className="count-down__col">
                        <h1> 23</h1>
                        <h4>Dias</h4>
                    </Col>
                    <Col className="count-down__col">
                        <h1>13</h1>
                        <h4>Horas</h4>
                    </Col>
                    <Col className="count-down__col">
                        <h1>56</h1>
                        <h4>Minutos</h4>
                    </Col>
                </Space>
        </div>
    );
}