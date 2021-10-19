import {Space, Divider,Row, Col} from 'antd';
import {FieldTimeOutlined} from '@ant-design/icons';
import Countdown from 'react-countdown';

export default function CountDown(){
    const ConferenceDay = new Date("2021-11-03");
    const renderer =  ({ days, hours, minutes, seconds, completed })=>{
        return(<div className="count-down">
        <div className="header-section">
                <FieldTimeOutlined className="light" />
                <h2 className="light">Tiempo restante</h2>
        </div>
            <Space split={<Divider  type="vertical"/>}>
            <Col className="count-down__col">
                    <h1> {days<10 ?`0${days}` :`${days}`}</h1>
                    <h4>Dias</h4>
                </Col>
                <Col className="count-down__col">
                    <h1>{hours<10 ?`0${hours}` :`${hours}`}</h1>
                    <h4>Horas</h4>
                </Col>
                <Col className="count-down__col">
                    <h1>{minutes<10 ?`0${minutes}` :`${minutes}`}</h1>
                    <h4>Minutos</h4>
                </Col>
              {/*<Col className="count-down__col">
                    <h1>{seconds<10 ?`0${seconds}` :`${seconds}`}</h1>
                    <h4>Segundos</h4>
                </Col>*/}
                
            </Space>
    </div>
)
    } 
    return(
        <Countdown
                date={ConferenceDay}
                renderer={renderer}
            />  
    );
}