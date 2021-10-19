import { Avatar,Card} from "antd";
import Modal from '../Modal';
import { useState } from "react";
import SpeakerInfo from "../SpeakerInfo/SpeakerInfo";

export default function SpeakerCardItem({item}){
    const [isVisible, setisVisible] = useState(false);
    const {name, collage, img,data}= item; 
    return(
        <>
        <a onClick={e=>setisVisible(true)}>
            <Card.Grid style={{width:"33.33%"}} hoverable={false} className="speakers-card__line-item">
                <Avatar size={100} src={img} /><br/><br/>
                <h5 className="speakers-card__line-item__name">{name.toUpperCase()}</h5>
                <h5 className="speakers-card__line-item__collage">{collage.toUpperCase()}</h5>
            </Card.Grid>
        </a>
        <Modal isVisible={isVisible} setIsVisible={setisVisible} title={"Ponente"} width="80%">
            <SpeakerInfo data={data}/>
        </Modal>
        </>
    );
}