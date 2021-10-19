import { Card} from "antd";
import { BASE_PATH } from "../../Utils/Constants";
import SpeakerCardItem from "./SpeakerCardItem";

export default function SpeakersCard({profilesList}){
    
    return(
        <div className="speakers-card">
            <div className="speakers-card__line">
                <Card >
                    {
                       profilesList.length>0
                       ? profilesList.map(item=>{
                        return  <SpeakerCardItem key={item.id} item={{
                            data:item,
                            name: `${item.nombre} ${item.apellidos}`,
                            collage:item.institucion,
                            img: `${item.avatar.url}`
                        }}/>
                    })
                    :<h1>Hola</h1>
                    }
                </Card>
            </div>
        </div>
    );
}

