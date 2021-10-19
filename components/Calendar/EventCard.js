import React from 'react';
import { List, Avatar, Space,Image } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import {BASE_PATH} from '../../Utils/Constants';
import { useState } from "react";
import SpeakerInfo from "../SpeakerInfo";
import Modal from '../Modal';

export default function EventCard({listData, day}){
  const [isVisible, setisVisible] = useState(false);
  const [content, setcontent] = useState({});
  const onClickFunction=(item)=>{
    setisVisible(true);
    setcontent(item);
  }
    return(
      <>
        <List
    itemLayout="vertical"
    size="large"
    pagination={{
  
      pageSize: 3,
    }}
    dataSource={listData}
    /*
    footer={
      <div>
        <b>Foro Nacional de Telematica</b> Redes y Telecomunicaciones
      </div>
    }
     */
    renderItem={item => (
      <List.Item
        key={item.titulo}
        actions={[
          <>
          <CalendarOutlined/> &nbsp; {`${item.hora.substr(0, 5)} ${day}`}
          </>
        ]}
        extra={
          <Image
            width={272}
            alt={item.titulo}
            src={`${item.imagen.url}`}
          />
        }
        >
         <List.Item.Meta
          avatar={<Avatar src={`${item.ponente.avatar.url}`} />}
          title={item.titulo}
          description={<a onClick={e=>onClickFunction(item.ponente)}>{item.ponente.nombre} {item.ponente.apellidos}</a>}
        />
        {item.descripcion}
      </List.Item>
    )}
  />
  <Modal isVisible={isVisible} setIsVisible={setisVisible} title={"Ponente"} width="80%">
    <SpeakerInfo data={content}/>
  </Modal>
  </>
    );
}