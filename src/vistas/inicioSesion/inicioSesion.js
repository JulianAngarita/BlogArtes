import React, {useState} from 'react';
import {Grid, Form, Segment, Button, Header} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import imgBackGround from '../../assets/background.jpg';
import ModalMensaje from '../../components/modales/modalMensaje';
import { iniciarSesionAction } from '../../action/usuarioAction';


const initialState = {
    email: '',
    password: ''
}

const InicioSesion = () => {

    const dispatch = useDispatch()
    const [ modalMensajeEstatus, setModalMensajeEstatus ] = useState({
        activo: false,
        mensaje: ''
    })
    const [ cuenta, setCuenta ] = useState(Object.assign({}, initialState));

    const iniciarSesion = () => {
        dispatch(iniciarSesionAction(cuenta))
    }

    const handleChangeCuenta = e => {
        setCuenta({
            ...cuenta,
            [e.target.name]:e.target.value
        })
    }
    
    return ( 
        <Grid 
        centered 
        style={{
            minHeight:"105vh", 
            backgroundImage:`url(${imgBackGround})`, 
            backgroundSize:"cover", 
            backgroundRepeat:"no-repeat", 
            backgroundPosition:"center"
        }} 
        verticalAlign="middle">
        <Grid.Column style={{maxWidth:450}}>
            <Form>
                <Segment stacked>
                    <Header as="h1">
                        INICIAR SESION
                    </Header>
                    <Form.Input 
                        label="Correo Electronico" 
                        name="email"
                        value={cuenta.email}
                        onChange={handleChangeCuenta}
                        fluid icon="user" 
                        iconPosition="left" 
                    />
                    <Form.Input 
                        label="Contraseña" 
                        name="password"
                        onChange={handleChangeCuenta}
                        value={cuenta.password}
                        fluid icon="lock" 
                        iconPosition="left" 
                        type="password" 
                    />
                    <Button
                        onClick={iniciarSesion}
                        size='small'
                        style={{backgroundColor:'blue', color:'white', fontWeight: "bold"}} 
                    >
                        INICIAR SESION
                    </Button>
                    <Button
                        size='tiny'
                    >
                        <Link
                            to={`/crearCuenta`}
                            style={{textDecoration:"none", color: 'black', fontWeight: "bold"}}
                        > REGISTRARSE </Link>
                    </Button> 
                </Segment>
            </Form>
        </Grid.Column>
        <ModalMensaje
            estatus={modalMensajeEstatus}
            setModalMensajeEstatus={setModalMensajeEstatus}
        />
    </Grid>
    );
}
 
export default InicioSesion;