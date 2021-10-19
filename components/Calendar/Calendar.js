import {CalendarOutlined} from '@ant-design/icons';
import { Row, Col, Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { getEvents} from '../../Api/EventsApi';

import EventCard from './EventCard';

const { TabPane } = Tabs;

export default function Calendar(){
    
    const [eventsList1, seteventsList1] = useState([]);
    const [eventsList2, seteventsList2] = useState([]);
    const [eventsList3, seteventsList3] = useState([]);


    useEffect(()=>{
        const api=async()=>{
            const response = await getEvents();
            
            if(response.length>0){
                response.map(item=>{
                    if(item.dia==="miercoles"){
                        seteventsList1(oldArray => [...oldArray, item]);
                    }else{
                        if(item.dia==="jueves"){
                            seteventsList2(oldArray => [...oldArray, item]);
                        }else{
                            seteventsList3(oldArray => [...oldArray, item]);
                        }
                    }
                });
            }
        }
        api();
    },[])



    return(
        <div className="calendar">
            <div className="header-section">
            <CalendarOutlined className="light" />
            <h2 className="light">Calendario de eventos</h2>
            </div>
            <Row>
                <Col md={2}/>
                <Col md={20}>
                <div className="card-container">
                    <Tabs type="card">
                    <TabPane tab="3 de Noviembre" key="1">
                        {<EventCard listData={eventsList1} day={"03-11-2021"}/>}
                    </TabPane>
                    <TabPane tab="4 de Noviembre" key="2">
                       <EventCard listData={eventsList2} day={"04-11-2021"}/>
                    </TabPane>
                    <TabPane tab="5 de Noviembre" key="3">
                        <EventCard listData={eventsList3} day={"05-11-2021"}/>
                    </TabPane>
                    </Tabs>
                </div>
                </Col>
                <Col md={2}/>
            </Row>
        </div>
    );
}