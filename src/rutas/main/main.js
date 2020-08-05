import React, {useState, useEffect, Fragment} from 'react'
import VistaPublica from '../vistaPublica/vistaPublica';
import VistaPrivada from '../vistaPrivada/VistaPrivada';
import VistaPrivadaProfesor from '../vistaPrivada/VistaPrivadaProfesor';
import { useSelector } from 'react-redux';
import { obtenerUsuario } from '../../servicios/autenticarUsuario.srv';
import { TIPO_ROL } from '../../enum/tipo-rol';


const Main = () => {

    const [ autenticado, setAutenticado ] = useState(false)
    const token = useSelector(state => state.usuario.token)
    console.log(token)
    const usuario = localStorage.getItem('usuario')
    const usuarioOb = JSON.parse(usuario)
    const cargarUsuario = () => {
        const respuesta = obtenerUsuario()
        return(respuesta)
    }
    useEffect(() => {
        const respuesta = cargarUsuario()
        setAutenticado(respuesta)
    }, [token])


    const vistaPrivada = () => {
        if(usuarioOb.rol === TIPO_ROL.PROFESOR && usuarioOb.rol !== null) {
            return <VistaPrivadaProfesor/>
        } else if (usuarioOb.rol === TIPO_ROL.ESTUDIANTE && usuarioOb.rol !== null) {
            return <VistaPrivada/>
        } else {
            return null
        }
    }
    return ( 
        <Fragment>
            <React.StrictMode>
                {autenticado ? vistaPrivada() : <VistaPublica/> } 
            </React.StrictMode>
        </Fragment>
    );

}
 
export default Main;