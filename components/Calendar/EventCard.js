import React from 'react';
import { List, Avatar, Space,Image } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function EventCard({listData}){
    return(
        <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
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
        key={item.title}
        actions={[
          <>
          <CalendarOutlined/> &nbsp; {item.date}
          </>
        ]}
        extra={
          <Image
            width={272}
            alt={item.title}
            src={item.img}
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={item.title}
          description={<a className="name-item" href={item.href}>{item.name}</a>}
        />
        {item.content}
      </List.Item>
    )}
  />
    );
}