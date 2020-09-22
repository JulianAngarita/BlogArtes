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
import {estadoInicialProyecto} from '../../estadosIniciales/estadoInicial- proyecto';
import {agregarProyecto, obtenerProyectos} from '../../servicios/proyectos.srv';
import { cerrarSesion } from '../../servicios/autenticarUsuario.srv';
import {useDispatch} from 'react-redux'
import FormularioTrabajo from '../formularios/formulario.trabajo';
import ModalMensaje from '../../components/modales/modalMensaje';
import bg from '../../assets/69.jpg'
import TarjetaProyecto from '../tarjetas/tarjeta-proyecto';


const SideBar = ({
  sideBar,
  setSideBar
}) => {

  const [ modalMensajeEstatus, setModalMensajeEstatus ] = useState({
    activo: false,
    mensaje: ''
  })
  const [ proyecto, setProyecto] = useState(Object.assign({}, estadoInicialProyecto))
  const [ proyectos, setProyectos ] = useState([])
  const [ modalProyecto, setModalProyecto ] = useState(false)
  const [ filtro, setFiltro ] = useState({
    activo: true
  })

  const dispatch = useDispatch()

  const salir = () => {
      dispatch(cerrarSesion())
  }

  useEffect(() => {
    consultar()
  }, [filtro])
  const proyectoNuevo = async() => {
      const respuesta = await agregarProyecto(proyecto)
      if(respuesta.data.estatus){
        setModalMensajeEstatus({
          ...modalMensajeEstatus,
            activo:true,
            mensaje: respuesta.data.resultadoOperacion
        })
        setProyecto(Object.assign({}, estadoInicialProyecto))
        consultar()
      } else {
        setModalMensajeEstatus({
          ...modalMensajeEstatus,
            activo:true,
            mensaje: respuesta.data.resultadoOperacion
        })
        consultar()
      }
  }

  console.log(proyectos)
  const consultar = async() => {
    const respuesta = await obtenerProyectos()
    console.log(respuesta)
    if(respuesta.data.estatus){
      setProyectos(respuesta.data.data.proyectos)
    } else {
      setModalMensajeEstatus({
        ...modalMensajeEstatus,
          activo:true,
          mensaje: respuesta.data.resultadoOperacion
      })
    }
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
            <Menu.Item 
              as='a'
              onClick={() => salir()}
            >
              <Icon 
                name='log out'   
              />
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

                  MIS PROYECTOS
                  <Popup
                      content="Debido a que esta pagina es un proyecto estudiantil, no cuenta con una base de datos paga, eso implica que no se puede almacenar imagenes, para crear un proyecto se recomienda subir la imagen a facebook de forma privada y copiar la direccion de enlace, para el video se puede copiar la url"
                      trigger={
                        <label>
                          <Icon 
                            name="info circle"
                            color="red"
                          />
                        </label>
                      }
                  />
                  <span>
                    <Button size="tiny" onClick={() => setModalProyecto(true)} style={{backgroundImage: `url(${bg})`, color: 'white'}} floated='right'>
                      <Icon name="add"/>
                      NUEVO PROYECTO
                    </Button>
                  </span>
                </Header>
                <Grid columns={2}>
                  {proyectos !== undefined && proyectos.length>0 ?
                  proyectos.map(i => (
                    <TarjetaProyecto
                        item={i}
                        key={i._id}
                    />
                  ))
                  :'No hay proyectos'}
                </Grid>
                <FormularioTrabajo
                    modalProyecto={modalProyecto}
                    proyecto={proyecto}
                    guardar={proyectoNuevo}
                    setProyecto={setProyecto}
                    setModalProyecto={setModalProyecto}
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