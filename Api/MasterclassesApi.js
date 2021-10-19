import {BASE_PATH} from '../Utils/Constants';


export async function getMasterClasses(){    
    try{
        const url = `${BASE_PATH}/talleres`;
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

export async function getMasterClass(clave){    
    try{
        const url = `${BASE_PATH}/talleres/${clave}`;
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