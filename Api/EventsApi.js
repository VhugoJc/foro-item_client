
import {BASE_PATH} from '../Utils/Constants';

export async function getEvents(){
    
    try{
        const url = `${BASE_PATH}/eventos`;
        const params ={
            method: "GET",
            headers: {
                "Content-Type":"application/json"
            }
        }
        const result = await fetch(url,params);
        const response = await result.json();
        return response;
    }catch(err){
        return null;
    }
}

