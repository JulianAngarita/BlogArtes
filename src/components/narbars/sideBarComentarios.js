import React, { useState, useEffect } from 'react'
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Button,
  Container,
  Popup,
} from 'semantic-ui-react'
import {estadoInicialComentario} from '../../estadosIniciales/estadoInicial-comentario';
import {agregarComentarios, obtenerComentarios} from '../../servicios/comentarios.srv';
import { cerrarSesion } from '../../servicios/autenticarUsuario.srv';
import {useDispatch} from 'react-redux'
import FormularioComentarios from '../formularios/formulario.comentarios'; 
import ModalMensaje from '../../components/modales/modalMensaje';
import bg from '../../assets/69.jpg'
import TarjetaComentario from '../tarjetas/tarjeta-comentario';


const SideBar = ({
  sideBar,
  setSideBar
}) => {


    const [ modalMensajeEstatus, setModalMensajeEstatus ] = useState({
        activo: false,
        mensaje: ''
    })
    const [ modalComentarios, setModalComentarios ] = useState(false)
    const [ comentario, setComentario ] = useState(Object.assign({}, estadoInicialComentario))
    const [ comentarios, setComentarios ] = useState([])
    const [ filtro, setFiltro ] = useState({
      activo: true
    })
  
    useEffect(() => {
      consultar()
    }, [filtro])

    const dispatch = useDispatch()

    const salir = () => {
        dispatch(cerrarSesion())
    }

    const consultar = async() => {
      const respuesta = await obtenerComentarios()
      console.log(respuesta)
      if(respuesta.data.estatus){
        setComentarios(respuesta.data.data.comentarios)
      } else {
        setModalMensajeEstatus({
          ...modalMensajeEstatus,
            activo:true,
            mensaje: respuesta.data.resultadoOperacion
        })
      }
    }

    const comentarioNuevo = async() => {
      const respuesta = await agregarComentarios(comentario)
      if(respuesta.data.estatus){
        setModalMensajeEstatus({
          ...modalMensajeEstatus,
            activo:true,
            mensaje: respuesta.data.resultadoOperacion
        })
        setComentario(Object.assign({}, estadoInicialComentario))
        consultar()
        
      } else {
        setModalMensajeEstatus({
          ...modalMensajeEstatus,
            activo:true,
            mensaje: respuesta.data.resultadoOperacion
        })
      }
      consultar()
    }


  return (
  <Grid columns={1}>
    <Grid.Column>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="push"
          icon='labeled'
          onHide={() => setSideBar(false)}
          vertical
          visible={sideBar}
          width='thin'
        >
            <Menu.Item>
              <Icon name='home' />
              OPCIONES
            </Menu.Item>
            <Menu.Item onClick={() => salir()} as='a'>
              <Icon name='log out' />
              CERRAR SESION
            </Menu.Item>
            <Menu.Item>
              <Icon name='info circle' />
              <p>
                Blog Artes
              </p>
              <p>
                Pagina Estudiantil
              </p>
            </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sideBar}>
        <Grid
            columns={3}
            container
            style={{
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat', 
                backgroundPosition: 'center',
                marginTop:65,
                marginBottom:50,
                marginLeft:50,
                marginRight:50,
                minHeight:'72vh'
            }}
            >
            <Grid.Row>
              <Container fluid>
              <Header as="h1" style={{marginBottom:20 }}> 
                COMENTARIOS
                <Popup
                    content="Aquí apareceran los comentarios de todos los estudiantes"
                    trigger={
                      <label>
                        <Icon 
                          name="info circle"
                        />
                      </label>
                    }
                />
                <span>
                  <Button size="tiny" onClick={() => setModalComentarios(true)} style={{backgroundImage: `url(${bg})`, color: 'white'}} floated='right'>
                    <Icon name="add"/>
                    AGREGAR COMENTARIOS
                  </Button>
                </span>
              </Header>
              <Grid columns={4}>
                  {comentarios !== undefined && comentarios.length>0 ?
                  comentarios.map(i => (
                    <TarjetaComentario
                        item={i}
                    />
                  ))
                  :null}
                </Grid>
              <FormularioComentarios
                  comentario={comentario}
                  modalComentarios={modalComentarios}
                  guardar={comentarioNuevo}
                  setModalComentarios={setModalComentarios}
                  setComentario={setComentario}
              />
              <ModalMensaje
                  estatus={modalMensajeEstatus}
                  setModalMensajeEstatus={setModalMensajeEstatus}
              />
              </Container>
            </Grid.Row>
        </Grid>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Grid.Column>
  </Grid>
)
}

export default SideBar