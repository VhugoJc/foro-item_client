import { Avatar,Card} from "antd";
export default function SpeakersCard({profilesList}){
    return(
        <div className="speakers-card">
            <div className="speakers-card__line">
                <Card >
                    {
                        profilesList.map(item=>{
                            return  <SpeakerCardItem key={item.id} item={item}/>
                        })
                    }
                </Card>
            </div>
        </div>
    );
}

export function SpeakerCardItem({item}){
    const {name, collage, img}= item; 
    return(
        <Card.Grid style={{width:"33.33%"}} hoverable={false} className="speakers-card__line-item">
            <Avatar size={100} src={img} /><br/><br/>
            <h5 className="speakers-card__line-item__name">{name.toUpperCase()}</h5>
            <h5 className="speakers-card__line-item__collage">{collage.toUpperCase()}</h5>
        </Card.Grid>
    );
}