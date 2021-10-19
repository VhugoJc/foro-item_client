import React,{useEffect} from 'react';
import {Menu, Row,Col,Button} from 'antd';
import {Link as LinkScroll,DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Link from 'next/link';
import { REGISTER_URL } from '../../Utils/Constants';
const MenuItem = Menu.Item;

export default function MenuTop(){
    
    return(
        <>
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
                        <Link href="/"><a  onClick={e=>scroller.scrollTo("",{
                            duration: 800,
                            delay: 0,
                            smooth: true,
                            spy:false,
                            hashSpy:false
                        })}>
                            Home</a></Link>
                        </MenuItem>
                        <MenuItem key="calendar" >
                        <Link href="/#agenda" ><a  onClick={e=>scroller.scrollTo("agenda",{
                            duration: 800,
                            delay: 0,
                            smooth: true,
                            spy:false,
                            hashSpy:false
                        })}>
                            Agenda</a></Link>
                        </MenuItem>
                        <MenuItem key="masterclass" >
                        <Link href="/#talleres"><a  onClick={e=>scroller.scrollTo("talleres",{
                            duration: 800,
                            delay: 0,
                            smooth: true,
                            spy:false,
                            hashSpy:false
                        })}>
                            Talleres</a></Link>
                        </MenuItem>
                        <MenuItem key="speakers" >
                        <Link href="#ponentes"><a  onClick={e=>scroller.scrollTo("ponentes",{
                            duration: 800,
                            delay: 0,
                            smooth: true,
                            spy:false,
                            hashSpy:false
                        })}>
                            Ponentes</a></Link>                        
                            </MenuItem>
                        <MenuItem key="colleges" >
                        <Link href="/#universidades"><a  onClick={e=>scroller.scrollTo("universidades",{
                            duration: 800,
                            delay: 0,
                            smooth: true,
                            spy:false,
                            hashSpy:false
                        })} >
                            Universidades</a></Link>
                        </MenuItem>
                        <MenuItem key="register">
                            <Button href={REGISTER_URL} target="_blank" rel="noreferrer noopener"  className="menu-top__register-btn">Registrárme</Button>
                        </MenuItem>
                        
                    </Menu>
                        </div>
                    
                    </nav>
                </Col>
                <Col lg={2}/>                
            </Row>
            </>
    );
}