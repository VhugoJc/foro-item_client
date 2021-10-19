import {Result, Button} from 'antd';
export default function SuccessMessage({setisvisible}){
    return (
        <div>
            <Result
                status="success"
                title="Se ha realizado su pre-inscripción exitosamente"
                subTitle="Ya puede inscribirse a los talleres del Foro."
                extra={[
                <Button type="primary" key="console" onClick={e=>setisvisible(false)}>
                    Cerrar
                </Button>,
                
                ]}
            />
        </div>
    )
}