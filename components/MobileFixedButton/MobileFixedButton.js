import React, { useState } from 'react';
import { Button } from 'antd';
import {BookOutlined} from '@ant-design/icons';
import Link from 'next/link';
import { REGISTER_URL} from '../../Utils/Constants';

const MobileFixedButton = () => {
    const [showButtonMobil, setshowButtonMobil] = useState(false);
    const [showNull, setshowNull] = useState(false);
    
    if (typeof window !== "undefined") {    
        const height = document.body.scrollHeight -1000;
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                setshowButtonMobil(true);
                if(document.body.scrollTop>height || document.documentElement.scrollTop>height){
                    setshowNull(true);
                }else{
                    setshowNull(false);
                }
            } else {
                setshowButtonMobil(false);    
            }
        }
    }
    return (  
        <div className="fixed-button-mobile ">
        {showButtonMobil
        ?showNull
        ?null:
            <Link href={REGISTER_URL}  passHref>
                <div className="fixed-button-mobile__circle">
                    <BookOutlined className="fixed-button__icon" />
                </div>
            </Link>
        :(<Button className="fixed-button-mobile__btn"
            href={REGISTER_URL}>
                Registrárme
            </Button>)
        }
        </div>
    );
}
 
export default MobileFixedButton;