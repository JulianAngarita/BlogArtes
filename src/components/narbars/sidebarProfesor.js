import React, { useState, useEffect } from 'react'
import {
  Loader,
  Grid,
  Header,
  Icon,
  Dimmer,
  Menu,
  Segment,
  Sidebar,
  Button,
  Container,
  Popup,
  Table,
} from 'semantic-ui-react'
import {estadoInicialProyecto} from '../../estadosIniciales/estadoInicial- proyecto';
import {obtenerUsuarios} from '../../servicios/usuarios.srv';
import { cerrarSesion } from '../../servicios/autenticarUsuario.srv';
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import ModalMensaje from '../../components/modales/modalMensaje';
import bg from '../../assets/69.jpg'
import TarjetaProyecto from '../tarjetas/tarjeta-proyecto';


const SideBarProfesor = ({
  sideBar,
  setSideBar
}) => {

  const [ modalMensajeEstatus, setModalMensajeEstatus ] = useState({
    activo: false,
    mensaje: ''
  })
  const [ usuarios, setUsuarios ] = useState([])
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


  const consultar = async() => {
    const respuesta = await obtenerUsuarios()
    if(respuesta.data.estatus){
      setUsuarios(respuesta.data.data.usuarios)
    } else {
      setModalMensajeEstatus({
        ...modalMensajeEstatus,
          activo:true,
          mensaje: respuesta.data.resultadoOperacion
      })
    }
  }

  console.log(usuarios);
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
                <Header as="h1" textAlign="center" style={{marginBottom:50 }}> 
                  ESTUDIANTES
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
                <Grid columns={3}>
                    {usuarios !== undefined && usuarios.length>0? 
                    <Table 
                      inverted
                      size="small"
                    >
                      <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>NOMBRE</Table.HeaderCell>
                            <Table.HeaderCell>CORREO ELECTRONICO</Table.HeaderCell>
                            <Table.HeaderCell>CURSO</Table.HeaderCell>
                            <Table.HeaderCell>VER PROYECTOS</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {usuarios.map(i => (
                          <Table.Row>
                            <Table.Cell width="4"> {i.nombres} {i.apellidos} </Table.Cell>
                            <Table.Cell width="4"> {i.email}</Table.Cell>
                            <Table.Cell width="4"> {i.curso} </Table.Cell>
                            <Table.Cell width="4">
                              <Button
                                style={{ 
                                    color:"white",
                                    backgroundColor:"transparent",
                                    borderColor:"#F6F6F6 !important",
                                    borderRadius:25,
                                }}
                              >
                                <Icon name="eye"/>
                                <Link  
                                  style={{textDecoration: 'none', color: 'white', fontFamily: 'sans-serif', fontSize: 10}}
                                  to={`/verProyectos/${i._id}`}
                                >
                                  VER
                                </Link>
                              </Button>
                            </Table.Cell>
                          </Table.Row>
                        ))}
                      </Table.Body>
                    </Table>: 
                    <Dimmer 
                      inverted
                      active>
                        <Loader
                          size="large"
                        />
                    </Dimmer>
                    }
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

export default SideBarProfesor;