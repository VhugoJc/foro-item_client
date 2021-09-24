import {Row, Col, Image, Button} from 'antd';
import Link from 'next/link';
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
            <Link href="/   "><a className="footer-links__title">Home</a></Link>
            <a className="footer-links__title">Agenda</a>
            <a className="footer-links__title">Talleres</a>
            <br/>
            <a className="footer-links__title">Ponentes</a>
            <a className="footer-links__title">Universidades</a> 
        </div>
    );
}

export function FooterRegister(){
    return(
        <div className="footer-register">
            <h3>¿Aun no te has tegistrado? <br/>¿Qué esperas?</h3>
            <Button className="footer-register__btn menu-top__register-btn ">Registrárme</Button>
        </div>
    );
}