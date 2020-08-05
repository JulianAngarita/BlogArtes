import React, { Fragment } from 'react';
import { Menu, 
        Container,  
        Icon, 
        Dropdown,
        Responsive, 
        Dimmer, 
        Button, 
        List, 
        Header} 
from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { cerrarSesion } from '../../servicios/autenticarUsuario.srv';



const NavBarProfesor = ({
    setSideBar
}) => {

    const usuario = localStorage.getItem('usuario')
    const usuarioOb = JSON.parse(usuario)

    return ( 
        <Fragment>
            <Responsive minWidth={Responsive.onlyTablet.minWidth} >
                <Menu fixed="top" style={{maxHeight:'10px !important', borderBottom:'3px solid black', height:40, fontSize:12, color:'#B9072F', textTransform:'uppercase', fontWeight: 'bold'}} >
                    <Container>
                        {usuarioOb !== null ? <Menu.Item as="h3">
                            <Icon size="large" style={{marginRight: 15}} name="paint brush"/>
                            {usuarioOb.nombres} {usuarioOb.apellidos}
                        </Menu.Item>: null}
                        <Menu.Item style={{textTransform:'uppercase', fontWeight: 'bold'}}>
                            <Link to={'/estudiantes'} style={{textDecoration:'none', color:'#333333'}}>ESTUDIANTES</Link>
                        </Menu.Item>
                        <Menu.Item style={{textTransform:'uppercase', fontWeight: 'bold'}}>
                            <Link to ={'/comentarios'}style={{textDecoration:'none', color:'#333333'}}>COMENTARIOS</Link>
                        </Menu.Item>
                    </Container>
                    <Menu.Item>
                        <Button  
                            size="mini"
                            onClick={() => setSideBar(true)}
                            style={{ 
                                color:"black",
                                backgroundColor:"transparent",
                                borderColor:"#F6F6F6 !important",
                                borderRadius:25,
                            }}
                            floated='right'>
                        <Icon name="italic"/> 
                            OPCIONES 
                        </Button>
                    </Menu.Item>
                </Menu>
        </Responsive>
        </Fragment>
     );
}
 
export default NavBarProfesor;