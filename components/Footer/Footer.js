import {Row, Col, Image, Button} from 'antd';
import {scroller} from 'react-scroll';
import { REGISTER_URL } from '../../Utils/Constants';
export default function Footer(){
    return(
        <div className="footer">
            <Row>
            <Col md={4}/>
            <Col md={16}>
                <Row>
                    <Col md={8}>
                        <div className="footer-logo">
                            <Image className="footer-logo__img" preview={false} src="/img/upslp.png" alt="upslp logo"/>
                        </div>
                    </Col>
                    <Col md={8}>
                        <FooterLinks/>                        
                    </Col>
                    <Col md={8}>
                        <FooterRegister/>                       
                    </Col>
                </Row>
            </Col>
            <Col md={4}/> 
            </Row>
            <Row className="footer-rights">
                <Col md={24}>
                        <p>© 2021 Desarrollado por: <a>Academia de ITI e ITEM</a> & <a>Víctor Hugo Jiménez. </a>All rights reserved</p>
                </Col>
            </Row>
        </div>
    );
}
export function FooterLinks(){
    return(
        <div className="footer-links">
            <a className="footer-links__title"
            onClick={e=>scroller.scrollTo("",{
                duration: 800,
                delay: 0,
                smooth: true,
                spy:false,
                hashSpy:false})}
            href="#"
            >Home</a>
            
            <a onClick={e=>scroller.scrollTo("agenda",{
                duration: 800,
                delay: 0,
                smooth: true,
                spy:false,
                hashSpy:false})}
                href="#agenda"
            className="footer-links__title">Agenda</a>

            <a onClick={e=>scroller.scrollTo("talleres",{
                duration: 800,
                delay: 0,
                smooth: true,
                spy:false,
                hashSpy:false})}
                href="#talleres" 
            className="footer-links__title">Talleres</a>
            
            <br/>
            <a onClick={e=>scroller.scrollTo("ponentes",{
                duration: 800,
                delay: 0,
                smooth: true,
                spy:false,
                hashSpy:false})}
                href="#ponentes"
                className="footer-links__title">Ponentes</a>

            <a  onClick={e=>scroller.scrollTo("universidades",{
                duration: 800,
                delay: 0,
                smooth: true,
                spy:false,
                hashSpy:false})}
                href="#universidades"
                className="footer-links__title">Universidades</a> 
        </div>
    );
}

export function FooterRegister(){
    return(
        <div className="footer-register">
            <h3>¿Aun no te has tegistrado? <br/>¿Qué esperas?</h3>
            <Button href={REGISTER_URL} target="_blank" rel="noreferrer noopener" className="footer-register__btn menu-top__register-btn ">Registrárme</Button>
        </div>
    );
}