import { Row, Col, Avatar } from "antd";
import Markdown from 'markdown-to-jsx';
import { BASE_PATH} from '../../Utils/Constants';
export default function SpeakerInfo({data}){
 
    return(
        <div className="speaker-info">
             <Row>
                <Col xs={24} xl={12}>
                <Avatar size={300} src={`${data.avatar.url}`}/>
                <br/>
                <h2>Información de contacto</h2>
                <Markdown>{data.contacto}</Markdown>
                </Col>
                <Col xs={24} xl={12}>
                <h1>{`${data.nombre} ${data.apellidos}`}</h1>
                <Markdown>{data.descripcion}</Markdown>
                </Col>
            </Row>
        </div>
    );
}