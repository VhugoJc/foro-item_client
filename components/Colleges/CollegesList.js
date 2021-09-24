import { Card,Image} from "antd";
export default function CollegesList(){
    return(
        <div className="colleges__content-list">
            <Card>
                <CollegesCard/>
                <CollegesCard/>
                <CollegesCard/>
                <CollegesCard/>
                <CollegesCard/>
                <CollegesCard/>
                <CollegesCard/>
                <CollegesCard/>
                <CollegesCard/>
            </Card>
        </div>
    );
}

export function CollegesCard(){
    return(
        <Card.Grid style={{width:"33.33%"}} hoverable={false} className="colleges__content-list__card">
            <Image src="/img/upslp.png" alt="" className="colleges__content-list__card-img" preview={false}/>
        </Card.Grid>
    );
}