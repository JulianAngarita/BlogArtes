import React, {useState} from 'react';
import {Grid, Form, Segment, Button, Header, Message} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {estadoInicialNuevaCuenta} from '../../estadosIniciales/estadoInicial-nuevaCuenta';
import {rolLista} from '../../listas/rol-lista';
import {crearCuenta} from '../../servicios/crearCuenta.srv';
import imgBackGround from '../../assets/background.jpg';
import ModalMensaje from '../../components/modales/modalMensaje';


const CrearCuenta = () => {
    const [ modalMensajeEstatus, setModalMensajeEstatus ] = useState({
        activo: false,
        mensaje: ''
    })
    const [ cuenta, setCuenta ] = useState(Object.assign({}, estadoInicialNuevaCuenta));

    const handleChangeCuenta = (e, {name, value}) => {
        setCuenta({
            ...cuenta,
            [name]:value
        })
    }

    const CrearCuenta = async(payload) => {
        delete payload.confirmarContrasena
        const respuesta = await crearCuenta(payload)
        if(respuesta.data.estatus){
            setModalMensajeEstatus({
                ...modalMensajeEstatus,
                activo: true,
                mensaje: respuesta.data.resultadoOperacion
            })
        } else {
            setModalMensajeEstatus({
                ...modalMensajeEstatus,
                activo: true,
                mensaje: respuesta.data.resultadoOperacion
            })
        }
    }

    const mensaje = () => {
        if(cuenta.password !== cuenta.confirmarContrasena){
            return(
                <Message
                    content="La contraseña no coincide"
                    color="red"
                />
            )
        } else {
            return null
        }
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
                        REGISTRARSE
                        <Button
                            size='tiny'
                            floated="right"
                        >
                        <Link
                            to={`/iniciarSesion`}
                            style={{textDecoration:"none", color: 'black', fontWeight: "bold"}}
                        > INICIAR SESION </Link>
                    </Button> 
                    </Header>
                    <Form.Input 
                        label="Nombres"
                        name='nombres'
                        value={cuenta.nombres}
                        onChange={handleChangeCuenta}
                    />
                    <Form.Input 
                        label="Apellidos"
                        name='apellidos'
                        value={cuenta.apellidos}
                        onChange={handleChangeCuenta}
                    />
                    <Form.Input 
                        label="Email"
                        name="email"
                        value={cuenta.email}
                        onChange={handleChangeCuenta}
                    />
                    <Form.Select 
                        label="Rol"
                        name="rol"
                        options={rolLista}
                        value={cuenta.rol}
                        onChange={handleChangeCuenta}
                    />
                    <Form.Input 
                        label="Curso"
                        name="curso"
                        onChange={handleChangeCuenta}
                        value={cuenta.curso}
                    />
                    <Form.Input 
                        label="Contraseña"
                        type="password"
                        name="password"
                        onChange={handleChangeCuenta}
                        value={cuenta.password}
                    />
                    <Form.Input 
                        label="Confirmar Contraseña"
                        type="password"
                        name="confirmarContrasena"
                        value={cuenta.confirmarContrasena}
                        onChange={handleChangeCuenta}
                    />
                    {mensaje()}
                    <Button
                        size='small'
                        style={{backgroundColor:'blue', color:'white', fontWeight: "bold"}}
                        onClick={() => CrearCuenta(cuenta)}
                    >
                        CREAR CUENTA
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
 
export default CrearCuenta;