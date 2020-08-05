import React, {Fragment} from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom';
import PrincipalProfesor from '../../vistas/principal/principalProfesor';
import Comentarios from '../../vistas/comentarios/comentarios';
import ProyectosId from '../../vistas/proyectos/proyectoId';
import Footer from '../../components/footer/footer';



const VistaPrivadaProfesor = () => {

    return ( 
        <Fragment>
            <HashRouter basename="/">
                <Switch>
                    <Route exact path="/principalProfesor" component={PrincipalProfesor} />
                    <Route exact path="/comentarios" component={Comentarios} />
                    <Route exact path="/verProyectos/:id" component={ProyectosId} />
                    <Route component={PrincipalProfesor} />
                </Switch>
                <Footer/>
            </HashRouter>
        </Fragment>
    );

}
 
export default VistaPrivadaProfesor;