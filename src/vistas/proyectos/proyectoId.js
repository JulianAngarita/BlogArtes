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
  Table,
} from 'semantic-ui-react'
import {obtenerProyectosId} from '../../servicios/proyectos.srv';
import { cerrarSesion } from '../../servicios/autenticarUsuario.srv';
import {useDispatch} from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import ModalMensaje from '../../components/modales/modalMensaje';
import TarjetaProyecto from '../../components/tarjetas/tarjeta-proyecto';


const ProyectosId = ({
  sideBar,
  setSideBar
}) => {

  const [ modalMensajeEstatus, setModalMensajeEstatus ] = useState({
    activo: false,
    mensaje: ''
  })
  const [ proyectos, setProyectos ] = useState([])
  const [ filtro, setFiltro ] = useState({
    activo: true
  })
  let id = useParams()
  const dispatch = useDispatch()

  const salir = () => {
      dispatch(cerrarSesion())
  }

  useEffect(() => {
    consultar(id)
  }, [filtro])


  const consultar = async(payload) => {
    const respuesta = await obtenerProyectosId(payload)
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
                <Header as="h1" textAlign="right">
                  <span>
                      <Button
                        circular
                        style={{
                          backgroundColor: '#FFFFFF'
                        }}
                        size="tiny"
                      >
                         
                        <Link 
                          to={'/principalProfesor'}
                          style={{
                            textDecoration: 'none',
                            color:"#000000"
                          }}
                        > <Icon name="left arrow"/> Volver </Link> 
                      </Button>
                  </span> </Header>
                <Header as="h1" textAlign="center" style={{marginBottom:50 }}> 
                  Proyectos
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
                </Header>
                <Grid>
                  <Grid.Row columns={2}>
                {proyectos !== undefined && proyectos.length>0 ?
                  proyectos.map(i => (
                    <TarjetaProyecto
                        item={i}
                        key={i._id}
                    />
                  ))
                  :null}
                  </Grid.Row>
                </Grid>
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

export default ProyectosId;