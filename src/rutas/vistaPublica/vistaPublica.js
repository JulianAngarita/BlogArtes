import React, {Fragment} from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom';
import InicioSesion from '../../vistas/inicioSesion/inicioSesion';
import CrearCuenta from '../../vistas/inicioSesion/crearCuenta';



const VistaPublica = () => {

    return ( 
        <Fragment>
            <HashRouter basename="/">
                <Switch>
                    <Route exact path="/iniciarSesion" component={InicioSesion} />
                    <Route exact path="/crearCuenta" component={CrearCuenta} />
                    <Route component={InicioSesion} />
                </Switch>
            </HashRouter>
        </Fragment>
    );

}
 
export default VistaPublica;