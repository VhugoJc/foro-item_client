import MasterClassCard from './MasterClassCard';
import {ExperimentOutlined} from '@ant-design/icons';
import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import {getMasterClasses} from '../../Api/MasterclassesApi';
import { BASE_PATH } from '../../Utils/Constants';
import Modal from '../Modal';
import InscriptionForm from '../Forms/InscriptionForm';
import SuccessMessage from '../Message/SuccessMessage'

export default function  MaterClass(){
    const [masterClasses, setmasterClasses] = useState([]);
    const [isVisible, setisVisible] = useState(false);
    const [registered, setregistered] = useState(false);


    useEffect(()=>{
        const api=async()=>{
            const response = await getMasterClasses();
            setmasterClasses(response);
        }
        api();
    },[])

  

    return(
        <>
        <div className="master-class">
            <div className="header-section">
                <ExperimentOutlined  className="turquoise"/>
                <h2 className="turquoise">Talleres</h2>
            </div>
            <Row>
                <Col xl={2}/>
                <Col xl={20}>
                <Row>
                    {
                        masterClasses.length>0
                        ?masterClasses.map(item=>{
                            return( 
                            <MasterClassCard
                                key={item.id}
                                item = {{
                                    slug:item.clave,
                                    title: item.titulo,
                                    img:`${item.imagen.url}`,
                                    master:`${item.ponente.nombre} ${item.ponente.apellidos}`,
                                    description: item.ponente.institucion,
                                }}
                                dataSpeaker={item.ponente}
                            />
                            )
                            })
                        :null
                    }
            </Row>
                </Col>
                <Col xl={2}/>
            </Row>
        </div>
        <Modal isVisible={isVisible} setIsVisible={setisVisible} title="pre-inscripción" width="80%" >{/*footer="No he recibido confirmación"*/}
            { registered ?<SuccessMessage setisvisible={setisVisible}/> :<InscriptionForm  setregistered={setregistered}/>}
        </Modal>
        </>
    );
}