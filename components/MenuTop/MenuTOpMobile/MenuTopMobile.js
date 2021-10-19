import MobileFixedButton from '../../MobileFixedButton/MobileFixedButton';
import {MenuOutlined} from '@ant-design/icons';
import { useState } from 'react';
import {slide as Menu} from 'react-burger-menu';
import {Link as LinkScroll,DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Link from 'next/link';


export default function MenuTopMobile(){
    const [openMenu, setOpenMenu] = useState(false);
    const setMenu=(section)=>{
        scroller.scrollTo(section,{
            duration: 800,
            delay: 0,
            smooth: true,
            spy:false,
            hashSpy:false
        }); setOpenMenu(false);
    }
    return(
            <>
            <div className="menu-top__mobile">
            <Menu isOpen={openMenu} onStateChange={state=>setOpenMenu(state.isOpen)} customBurgerIcon={
           <h3 className="menu-top__mobile-btn"><MenuOutlined/></h3>} >


                <Link href="/#" onClick={e=>setMenu("")} ><a>Home</a></Link><br/>
                <Link href="/#agenda" onClick={e=>setMenu("agenda")}><a>Agenda</a></Link><br/>
                <Link href="/#talleres" onClick={e=>setMenu("talleres")}><a>Talleres</a></Link><br/>
                <Link href="/#ponentes" onClick={e=>setMenu("ponentes")}><a>Ponentes</a></Link><br/>
                <Link href="/#universidades" onClick={e=>setMenu("universidades")}><a>Universidades</a></Link>
            </Menu>
        </div>
     
        </>
    );
}