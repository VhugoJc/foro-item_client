import {CalendarOutlined} from '@ant-design/icons';
import { Row, Col, Tabs } from 'antd';
import EventCard from './EventCard';

const { TabPane } = Tabs;

export default function Calendar(){
    
    const tab1 = [
        {
            href: 'https://ant.design',
            title: `Tema numero 1`,
            avatar: "https://uploads-ssl.webflow.com/60c625a33f9c487bcf7f2406/60cb0e768413c77bc9e67b75_Rectangle%202235.png",
            name:
            `Dr Ponente numero 1`,
            img:'/img/event1.webp',
            content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            date:"2021 09-10 11:30"
        },
        {
            href: 'https://ant.design',
            title: `Tema numero 2`,
            avatar:'/img/avatar2.png',
            name:`Dr Ponente numero 2`,
            img:'/img/event2.jpg',
            content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            date:"2021 09-10 11:45"
        },
        {
            href: 'https://ant.design',
            title: `Tema numero 3`,
            avatar:'/img/avatar3.png', 
            name:`Dr Ponente numero 3`,
            img: '/img/event3.jpg',
            content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            date:"2021 09-10 12:00"
        },
          
        {
            href: 'https://ant.design',
            title: `Tema numero 2`,
            avatar:'/img/avatar3.png',
            name:`Dr Ponente numero 2`,
            img:'/img/event2.jpg',
            content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            date:"2021 09-10 11:45"
        },
];
    const tab2 = [
    
    {
        href: 'https://ant.design',
        title: `Tema numero 2`,
        avatar: "https://lh3.googleusercontent.com/3gwE6nvOPEF3t7eMLO7RVVwJupZ0HjuV67Rtde2Foqy6SyrB99j6BJSJ83FjxILLahjvcg=s85",
        name:
        `Dr Ponente numero 2`,
        img:'/img/event2.jpg',
        content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        date:"2021 09-10 11:45"
    },
    {
        href: 'https://ant.design',
        title: `Tema numero 1`,
        avatar: "https://uploads-ssl.webflow.com/60c625a33f9c487bcf7f2406/60cb0e768413c77bc9e67b75_Rectangle%202235.png",
        name:
        `Dr Ponente numero 1`,
        img:'/img/event1.webp',
        content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        date:"2021 09-10 11:30"
    },
    {
        href: 'https://ant.design',
        title: `Tema numero 3`,
        avatar: "https://www.westpac.com.au/content/dam/public/wbc/images/personal/home-loans/wbc-fh_minimise-interest_144x144.jpg",
        name:
        `Dr Ponente numero 3`,
        img: '/img/event3.jpg',
        content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        date:"2021 09-10 12:00"
    },
];


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
                        <EventCard listData={tab1}/>
                    </TabPane>
                    <TabPane tab="4 de Noviembre" key="2">
                       <EventCard listData={tab2}/>
                    </TabPane>
                    <TabPane tab="5 de Noviembre" key="3">
                        <EventCard listData={tab1}/>
                    </TabPane>
                    </Tabs>
                </div>
                </Col>
                <Col md={2}/>
            </Row>
        </div>
    );
}