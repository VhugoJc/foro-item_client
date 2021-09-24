import SpeakersCard from './SpeakersCard';
import {TeamOutlined} from '@ant-design/icons';
import { Carousel,Row,Col } from 'antd';


export default function Speakers(){
    const speakers=[];
    let img=1;
    let flag=true;
    for(var i=0; i<6;i++){
        speakers.push({
            id:i,
            name: "Nombre Apellido Apellido M",
            collage:"Universidad Politecnica",
            img:`/img/avatar${img}.png`
        });
        if(img===3){
            if (flag){
                img=2;
                flag=false;
            }else{
                img=1;
            }
        }else{
            img++;
        }
    }
    return(
        <div className="speakers">
            <div className="header-section">
                <TeamOutlined/>
                <h2>Ponentes</h2>
            </div>
            <Row>
                <Col xl={2}/>
                <Col xl={20}>
            <Carousel autoplay>
            <div>
                    <SpeakersCard profilesList={speakers}/>
            </div>
            <div>
                <SpeakersCard profilesList={speakers}/>
            </div>
            </Carousel>
            </Col>
            <Col xl={2}/>
            </Row>
        </div>
    );
}