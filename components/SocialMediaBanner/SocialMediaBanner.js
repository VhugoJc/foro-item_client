import React from 'react';
import { Col, Row, Image, Button } from "antd";


export default function SocialMediaBanner(){
    return(
        <>
        <div className="social-media-banner">
            <Row>
                <Col xl={2}/>
                <Col xl={20}>
                    <div className="social-media-banner__content">
                        <h2>No te olvides de seguirnos en redes sociales.</h2>
                        <h3>Nos puedes encontrar como Universidad Politécnica de San Luis Potosí</h3>
                        <div className="social-media-banner__content-sm">
                        <a href="https://www.facebook.com/upslp"target="_blank"  rel="noreferrer" ><Image preview={false} className="social-media-banner__content-sm__icon" src="/svg/facebook.svg" alt="" /></a>
                        <a href="https://twitter.com/UPSLP_MX?s=20" target="_blank" rel="noreferrer" ><Image preview={false} className="social-media-banner__content-sm__icon" src="/svg/twitter.svg" alt="" /></a>
                        <a href="https://www.instagram.com/upslp_oficial/?hl=es" target="_blank" rel="noreferrer" ><Image preview={false} className="social-media-banner__content-sm__icon ig" src="/svg/instagram.svg" alt="" /></a>
                        <a href="https://www.youtube.com/c/UPSLPoficial2001" target="_blank" rel="noreferrer" ><Image preview={false} className="social-media-banner__content-sm__icon yt" src="/svg/youtube.svg" alt="" /></a>
                        <a href="https://t.me/upslp_oficial"target="_blank"  rel="noreferrer" ><Image preview={false} className="social-media-banner__content-sm__icon" src="/svg/telegram.svg" alt="" /></a>
                        <a href="https://wa.me/524441887939" target="_blank" rel="noreferrer" ><Image preview={false} className="social-media-banner__content-sm__icon" src="/svg/whatsapp.svg" alt="" /></a>
                            
                        </div>
                    </div>
                </Col>
                <Col xl={2}/>
            </Row>
        </div>
        </>
    );
}