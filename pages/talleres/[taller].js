import React, { useEffect, useState } from "react";
import Markdown from 'markdown-to-jsx';
import { useRouter } from "next/router";
import { Col, Row, Spin,Divider } from 'antd';
import { getMasterClass } from "../../Api/MasterclassesApi";
import { BASE_PATH } from "../../Utils/Constants";
import { CalendarOutlined, FieldTimeOutlined, TeamOutlined} from '@ant-design/icons';

import BasicLayout from "../../layouts/BasicLayout";
import Error404 from "../../components/Calendar/Error/Error404";
import SpeakerCardItem from '../../components/Speakers/SpeakerCardItem';
import Seo from "../../components/Seo";

export default function Taller(){
    const [loading, setloading] = useState(true);
    const [masterclass, setmasterclass] = useState(null);
    const { query } = useRouter();

    useEffect(()=>{
        const api=async()=>{
                const response = await getMasterClass(query.taller);
                setmasterclass(response);
                setloading(false);
        }
        api();
        },[query])

       

    return(
        <BasicLayout>
        {
           loading
           ?(<div className="taller__spin">
                    <Spin size={"large"}  />
            </div>)
            :masterclass
                ? <TallerContent masterclass={masterclass}/>
                :<Error404/>
        }
        </BasicLayout>
    );
}

export function TallerContent({masterclass}){
  
    return(
        <>
        <Seo title={masterclass.titulo}/>
        <div className="taller" >
        <div className="taller__hero-img" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${masterclass.imagen.url})` }}>
            <h2 className="taller__hero-img__title">{masterclass.titulo}</h2>
            </div>
            <Row>
                <Col xl={2}/>
                <Col xs={24} xl={6}>
                        <h3 className="taller__subtitle">Impartido por:</h3>
                    <div className="taller__speaker">
                    <SpeakerCardItem item={{
                        name: masterclass.ponente.nombre,
                        collage:masterclass.ponente.institucion,
                        img:`${masterclass.ponente.avatar.url}`,
                        data:masterclass.ponente
                    }} />
                    </div>
                </Col>
                <Col xs={24} xl={14}>
                   <h3 className="taller__subtitle">Descripción</h3>
                   <div className="taller__description">
                   <Markdown>{masterclass.descripcion}</Markdown>
                   </div>
                </Col>
                <Col xl={2}/>
            </Row>
            <Row>
                <Col span={2}/>
                <Col xl={20}>
                <Divider />
                </Col>
                <Col span={2}/>
            </Row>
            <TallerOptions masterclass={masterclass}/>
        </div>
    </>
    );
}

export function TallerOptions({masterclass}){
    let d = new Date("2021-11-03T18:00:00.000Z");
    let n = d.toString();
 
    return(
        <div className="taller__options">
            <Row>
            <Col xl={2}/>
                <Col xs={24} xl={6}>
                    <p><strong>Fecha:</strong></p>
                    <p className="taller__options-date"> <CalendarOutlined/> {n.slice(3,25)}</p>
                </Col>
                <Col xs={24} xl={7}>
                    <p><strong>Duración:</strong></p>
                    <p className="taller__options-time"><FieldTimeOutlined /> {masterclass.duracion}</p>
                </Col>
                <Col xs={24} xl={7}>
                    <p><strong>Lugares:</strong></p>
                    <p className="taller__options-limit"><TeamOutlined /> {masterclass.cantidadDeLugares} Disponibles</p>
                </Col>
                <Col xl={2}/>
            </Row>
        </div>
    );
}