import React,{useEffect} from 'react';
import {Menu, Row,Col,Button} from 'antd';
const MenuItem = Menu.Item;

export default function MenuTop(){
    
    return(
            <Row className="menu-top">
                <Col lg={2}/>
                <Col lg={20}>
                    <nav>
                        <div className="menu-top__left">
                            LOGO
                        </div>
                        <div className="menu-top__right">
                        <Menu  mode="horizontal"className="menu-top__right-content" >
                        <MenuItem key="home" >
                            <a>Home</a>
                        </MenuItem>
                        <MenuItem key="calendar" >
                            Agenda
                        </MenuItem>
                        <MenuItem key="masterclass" >
                            Talleres
                        </MenuItem>
                        <MenuItem key="speakers" >
                            Ponentes
                        </MenuItem>
                        <MenuItem key="colleges" >
                            Universidades
                        </MenuItem>
                        <MenuItem key="register">
                            <Button className="menu-top__register-btn">Registrárme</Button>
                        </MenuItem>
                        
                    </Menu>
                        </div>
                    
                    </nav>
                </Col>
                <Col lg={2}/>                
            </Row>
    );
}
/*
 <div className="menu-top_items">
            <MenuItem key="home">
                Home
            </MenuItem>
            <MenuItem key="calendar">
                Agenda
            </MenuItem>
            <MenuItem key="masterclass">
                Talleres
            </MenuItem>
            
            <MenuItem key="speakers">
                Ponentes
            </MenuItem>
            
            <MenuItem key="collages">
                Universidades
            </MenuItem>
            
            <MenuItem key="register">
                <Button type="primary" className="menu-top__register-btn">Registrárme</Button>
            </MenuItem>
        </div>
    </Menu>
*/