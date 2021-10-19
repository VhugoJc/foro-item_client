import {Result} from 'antd';

export default function Error404(){
    return(
        <Result
            status="404"
            title="Página no encontrada."
            subTitle="Lo sentimos, la página que buscas no existe. Por favor utiliza la barra de menú"    
        />
    );
}