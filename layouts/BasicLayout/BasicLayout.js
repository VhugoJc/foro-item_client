import React from 'react';
import MenuTop from '../../components/MenuTop';
import Footer from '../../components/Footer/Footer';
import MenuTopMobile from '../../components/MenuTop/MenuTOpMobile/MenuTopMobile';

import FixedButton from '../../components/FixedButton';
import { Alert, Affix } from 'antd';
export default function BasicLayout({children}){

    return(
    <>
    <Affix >
        <Alert className="alert" message="ð¥ð¥ð¥No te pierdas el foro este 3,4 y 5 de Noviembre ððð" type="info" closable={true}/>
      </Affix>
      <MenuTopMobile/>
      <section id="">
        <MenuTop/>
      </section>
      <div>
      
      
      </div>
      
      {children}    
      <Footer/>
    </>
    );
}