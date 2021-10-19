import { Result, Button, Typography } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

const { Paragraph, Text } = Typography;

export default function ErrorMessage(){
    return(
        <Result
        status="error"
        title="Ha ocurrido un error creando su registro"
        subTitle="Por favor intente más tarde"
       
      >
        <div className="desc">
          <Paragraph>
            <Text
              strong
              style={{
                fontSize: 16,
              }}
            >
              Si el error continúa por favor:
            </Text>
          </Paragraph>
          <Paragraph>
            <CloseCircleOutlined className="site-result-demo-error-icon" /> Contácte al organizador inmediatamente.
          </Paragraph>
         
        </div>
      </Result>
    );
}