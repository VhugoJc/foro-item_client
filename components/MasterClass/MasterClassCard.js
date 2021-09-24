import { Button, Card, Col, Image } from 'antd';
export default function MasterClassCard({item}){
    const {Meta} = Card;
    const {title, img, description, master} = item;
    return (
        <>
          <Col sd={8}>
              <Card 
                  className="master-class__card"
                  hoverable
                  cover={
                    <Image
                    className="master-class__card-img"
                    alt={title}
                    src={img}
                    preview={false}
                    />
                  }
                  >
                  <Meta title={title} description={<><a className="master-class__card-master-name">{master}</a><br/>{description}</>} />
              </Card>
          </Col>  
    
        </>
      );
}