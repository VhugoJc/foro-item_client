import {  Card, Col, Image } from 'antd';
import SpeakerInfo from "../SpeakerInfo";
import Modal from '../Modal';
import { useState } from 'react';
import Link from 'next/link';

export default function MasterClassCard({item,dataSpeaker}){
  const {Meta} = Card;
  const {title, img, description, slug,master} = item;
  const [isVisible, setisVisible] = useState(false);
  const [content, setcontent] = useState({});
    
  const onClickFunction=(item)=>{
      setisVisible(true);
      setcontent(item);
  }
  
  return (
      <>
        <Col sd={8}>
            <Link href={`/talleres/${slug}`} passHref>
              <a>
            <Card
                className="master-class__card"
                hoverable
                cover={
                  <Image
                  className="master-class__card-img"
                  alt={title}
                  src={img}
                  preview={false}
                  />
                }
                >
                <Meta title={title} description={<><p className="master-class__card-master-name">{master}</p><br/>{description}</>} />
              {/*<Meta title={title} description={<><a onClick={e=>onClickFunction(dataSpeaker)} className="master-class__card-master-name">{master}</a><br/>{description}</>} /> */}
              </Card>
            </a>
            </Link>
        </Col>  
        <Modal isVisible={isVisible} setIsVisible={setisVisible} title={"Ponente"} width="80%">
          <SpeakerInfo data={content}/>
        </Modal>
      </>
    );
}