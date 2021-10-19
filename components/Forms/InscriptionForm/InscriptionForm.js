import { useState } from "react";
import { Row, Col, Input, Spin, Form, Select, InputNumber, Button } from 'antd';
import { useFormik } from "formik";
import Modal from '../../Modal';
import estados from '../../../assets/json/estados.json';
import municipios from '../../../assets/json/estados-municipios.json';
import ErrorMessage from "../../Message/ErrorMessage";

const { Option } = Select;

export default function InscriptionForm({setregistered}){
    const mun = municipios.Aguascalientes[0];
    const est = estados[0].nombre;
    const [isVisible, setisVisible] = useState(false);
    const [state, setState] = useState("Chihuahua");
    const [loading, setloading] = useState(false);
    const [auxSelector, setauxSelector] = useState(true);
    const levels=["Bachillerato","Licenciatura","Maestría","doctorado"];
    const speciallity=["Telemática", "Tecnologías de la Información", "Telecomunicaciones","Computación","Otra"];
    const [form] = Form.useForm();

    const getDistricts = (city) => {
        form.setFieldsValue({municipio: municipios[city][0]})
    }

    const formik = useFormik({
        initialValues: inititalvalues(state),
        onSubmit: async(formData)=>{
            setloading(true);
            try{
                setregistered(true);
            }catch(err){
                setisVisible(true)
            }
            setloading(false);
        }
    });
    
    const onChangeState=(e)=>{
        setState(e);
        setauxSelector(!auxSelector);
    }

    return(
        <>
        <Spin tip="cargando" spinning={loading}>
        <div className="inscription-form">

                <Form 
                form={form}
                className="inscription-form__form"
                onFinish={formik.handleSubmit}
                initialValues={formik.initialValues}
                layout="vertical"
                >
                    <Row>
                <Col xs={24} xl={12}>
                <Form.Item label="Nombre" name="nombre"rules={[ { required: true, message: 'Por favor escribe tu nombre!'},{type: 'string',warningOnly: true,},]}>
                    <Input placeholder="Nombre" onChange={formik.handleChange} />
                </Form.Item> 
                <Form.Item label="Apellidos" name="apellidos"rules={[ { required: true, message: 'Por favor escribe tus apellidos!'},{type:'string',warningOnly: true,},]}>
                    <Input placeholder="Apellidos" onChange={formik.handleChange}/>
                </Form.Item>
                {/*<Form.Item name="edad" label="Edad"rules={[ { required: true, message: 'Por favor escribe tu edad!'},{ type: 'number', min: 15, max: 99, message: "La edad debe ser entre 15 y 99 años" }]}>
                    <InputNumber placeholder="18" onChange={e=>formik.handleChange} />
                </Form.Item>*/}
                <Form.Item label="Correo Electrónico" name="email"rules={[ { required: true, message: 'Por favor escribe tu correo!'},{type: 'email',warningOnly: true,message: 'Correo no válido' },]}>
                    <Input placeholder="Correo Electrónico" onChange={formik.handleChange}/>
                </Form.Item>           
                <Form.Item  
                    hasFeedback
                    label="Contraseña" name="password"
                    rules={[ { required: true, message: 'Por favor escribe tu contraseña!'},
                    {type: 'string',warningOnly: true,message: 'contraseña no válida' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || value.length>=8) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('Las contraseña es muy corta!'));
                        },
                    }),
                    ]}>
                    <Input.Password placeholder="Contraseña" onChange={formik.handleChange} />
                </Form.Item>    
                <Form.Item
                    hasFeedback
                    name="confirm"
                    label="Confirmar contraseña"
                    dependencies={['password']}
                    rules={[
                    {
                        required: true,
                        message: 'Porfavor confirma tu contraseña!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('Las contraseñas no coinciden!'));
                        },
                    }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>  
               
               </Col>


                <Col xs={24} xl={12}>
                            
                <Form.Item label="Escuela" name="escuela"rules={[ { required: true, message: 'Por favor escribe tu escuela!'},{type: 'string',warningOnly: true,},]}>
                    <Input placeholder="Escuela" onChange={formik.handleChange} />
                </Form.Item>               
                <Form.Item label="Especialidad" name="especialidad">
                    <Select onChange={formik.handleChange} >
                            {speciallity.length>0
                            ?speciallity.map(item=>{
                                return (<Option key={item} value={item}>{item}</Option>)
                            })
                            :null
                        }
                    </Select>
                </Form.Item>
                <Form.Item label="Nivel" name="nivel">
                    <Select  onChange={formik.handleChange}>
                        {levels.length>0
                        ?levels.map(item=>{
                            return (<Option key={item} value={item}>{item}</Option>)
                        })
                        :null
                    }
                    </Select>
                </Form.Item>
                <Form.Item label="Estado" name="estado" >
                    <Select onChange={e=>formik.handleChange&&onChangeState(e)} onSelect={getDistricts}>
                    {estados.length>0
                        ?estados.map(item=>{return(<Option key={item.clave} value={item.nombre}>{item.nombre}</Option>)})
                        :null
                    }
                    
                </Select>
                </Form.Item> 
                <Form.Item label="Municipio" name="municipio"  >
                <Select onChange={formik.handleChange}>
                            {municipios[state].map(item=>{
                                return(<Option  key={item} >{item}</Option>)
                            })
                            }
                        </Select>
                </Form.Item>               
                <Form.Item  >
                    <Button type="primary" htmlType="submit" className="inscription-form__form-btn">
                    Enviar
                    </Button>
            </Form.Item>
              
                </Col>
            </Row>                   
                </Form>
        </div>
        </Spin>
        <Modal setIsVisible={setisVisible} isVisible={isVisible} > <ErrorMessage/> </Modal>
        </>
    )
}

function inititalvalues(state){
    
    return {
        nombre:"",
        apellidos:"",
        email:"",
        escuela:"",
        nivel:"Bachillerato",
        especialidad:"Telemática",
        estado:state,
        municipio:municipios[state][0],
        password:"",
    }
}

