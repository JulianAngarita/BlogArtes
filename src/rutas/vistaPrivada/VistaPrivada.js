import React, {Fragment} from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom';
import Principal from '../../vistas/principal/principal';
import Comentarios from '../../vistas/comentarios/comentarios';
import Footer from '../../components/footer/footer';



const VistaPrivada = () => {

    return ( 
        <Fragment>
            <HashRouter basename="/">
                <Switch>
                    <Route exact path="/principal" component={Principal} />
                    <Route exact path="/comentarios" component={Comentarios} />
                    <Route component={Principal} />
                </Switch>
                <Footer/>
            </HashRouter>
        </Fragment>
    );

}
 
export default VistaPrivada;