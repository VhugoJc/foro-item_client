import CollegesList from './CollegesList';
import {Carousel, Row, Col} from 'antd';
import {BankOutlined} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import {getColleges} from '../../Api/Colleges';

export default function Colleges(){
    const [collegesList, setcollegesList] = useState([]);
    let aux=0;

    useEffect(()=>{
        const api = async()=>{
            const response = await getColleges();
            const max=9;
            const totalCards=response.length;
            let carousselSize=(Math.ceil(response.length/max));//how much divs will be necesary
            if(carousselSize>0){
                for(let i=0; i<carousselSize; i++){
                    if((totalCards-(i*max))>=max){//full div (6 speakers per div)
                        setcollegesList(oldArray=>[...oldArray, response.slice(i*max, i*max+max)])
                        
                    }else{
                        setcollegesList(oldArray=>[...oldArray, response.slice(totalCards-(totalCards-(i*max)), totalCards)  ]);                      
                    }
                }
            }
        }
        api();
    },[])
    //background with parallix scrolling
    return(
        <div className="section">
        <div className="colleges">
            <div className="colleges__content">
                <div className="header-section">
                    <BankOutlined className="light"/>
                    <h2 className="light">Universidades</h2>
                </div>
                
                        <Carousel autoplay>
                            {
                                collegesList.length>0
                                ?( collegesList.map(item=>{
                                        return(
                                        <div key={++aux}>
                                            <CollegesList collegeData={item}/>
                                        </div>    
                                        )
                                    })
                                )
                                :null
                            }
                            
                        </Carousel>
                   
            </div>  
        </div>
        </div>
    );
}