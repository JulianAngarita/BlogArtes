import React, { Fragment } from 'react';
import {TIPO_ROL} from '../../enum/tipo-rol'
import { Menu, 
        Container,  
        Icon,
        Responsive, 
        Button, 
    } 
from 'semantic-ui-react';
import {Link} from 'react-router-dom';



const NavBar = ({
    setSideBar
}) => {

    const usuario = localStorage.getItem('usuario')
    let usuarioOb = JSON.parse(usuario)
    console.log(usuarioOb);
    const nombreBoton = () => {
        if(usuarioOb.rol === TIPO_ROL.PROFESOR && usuarioOb.rol !== null) {
            return 'NOTAS:3'
        } else if (usuarioOb.rol === TIPO_ROL.ESTUDIANTE && usuarioOb.rol !== null) {
            return 'MIS NOTAS'
        } else {
            return null
        }
    }
    return ( 
        <Fragment>
            <Responsive minWidth={Responsive.onlyTablet.minWidth} >
                <Menu fixed="top" style={{maxHeight:'10px !important', borderBottom:'3px solid black', height:40, fontSize:12, color:'#B9072F', textTransform:'uppercase', fontWeight: 'bold'}} >
                    <Container>
                        {usuarioOb !== null ? <Menu.Item as="h3">
                            <Icon size="large" style={{marginRight: 15}} name="heart"/>
                            {usuarioOb.nombres} {usuarioOb.apellidos}
                        </Menu.Item>: null}
                        <Menu.Item style={{textTransform:'uppercase', fontWeight: 'bold'}}>
                            <Link to={'/principal'} style={{textDecoration:'none', color:'#333333'}}>
                            {nombreBoton()}
                            </Link>
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
 
export default NavBar;