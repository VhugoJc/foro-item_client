import SpeakersCard from './SpeakersCard';
import {TeamOutlined} from '@ant-design/icons';
import { Carousel} from 'antd';
import { useEffect, useState } from 'react';
import { getSpeakers } from '../../Api/SpeakersApi';


export default function Speakers(){
    const [auxArray, setauxArray] = useState([]);
    let aux=0;
   

    useEffect(()=>{
        const api=async()=>{
            const response=await getSpeakers();
            //here is how to divide the speaker cards in to the carousel using an array of arrays where each array has an object
            const max=6;
            const totalCards=response.length;
            let carousselSize=(Math.ceil(response.length/max));//how much divs will be necesary
            if(carousselSize>0){
                for(let i=0; i<carousselSize; i++){
                    if((totalCards-(i*max))>=max){//full div (6 speakers per div)
                        setauxArray(oldArray=>[...oldArray, response.slice(i*max, i*max+max)])
                        
                    }else{
                        setauxArray(oldArray=>[...oldArray, response.slice(totalCards-(totalCards-(i*max)), totalCards)  ]);                      
                    }
                }
            }
        }
        api();   
    },[]);

   
  
    return(
        <>
        <div className="speakers">
            <div className="header-section">
                <TeamOutlined/>
                <h2>Ponentes</h2>
            </div>
           
            <Carousel autoplay>
                {
                    auxArray.length>0
                    ?auxArray.map(item=>{
                        return(
                            <div key={aux++}>
                                <SpeakersCard profilesList={item}/>
                            </div>
                        );
                    })
                    :null
                }
            </Carousel>
            
        </div>
        
        </>
    );
}