import MasterClassCard from './MasterClassCard';
import {ExperimentOutlined} from '@ant-design/icons';
import { Col, Row } from 'antd';
export default function  MaterClass(){
    const masterclassList=[];
    for(let i=1; i<=6;i++){
        masterclassList.push({
            id:i,
            title:`Taller nombre ${i}`, 
            master:`Dr. Tallerista ${i}`,
            description:"Universidad Politécnica",
            img: `/img/course${i}.jpg`,
        })
    }

    return(
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
                        masterclassList.length
                        ?masterclassList.map(item=>{
                            return( 
                            <MasterClassCard
                                key={item.id}
                                item = {item}
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
    );
}