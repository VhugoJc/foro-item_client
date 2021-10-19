import { Card,Image} from "antd";
import { BASE_PATH } from "../../Utils/Constants";
import Link from 'next/link';
export default function CollegesList({collegeData}){
    return(
        <div className="colleges__content-list">
            <Card>
                {collegeData.length>0
                ?collegeData.map(item=>{
                    return (<CollegesCard key={item.id} data={{
                        name: item.nombre,
                        img:`${item.imagen.url}`,
                        url:item.url
                    }}/>)
                })
            :null}
            </Card>
        </div>
    );
}

export function CollegesCard({data}){
    
    const {name,img,url} = data;

    console.log(url);

    return(
        <Card.Grid style={{width:"33.33%"}} hoverable={false} className="colleges__content-list__card">
           <div className="tooltip">
                <a href={url} target="_blank"  rel="noreferrer" ><Image src={img} alt={name} className="colleges__content-list__card-img" preview={false}/></a>  
                <span className="tooltiptext">{name}</span>
            </div>
        </Card.Grid>
    );
}