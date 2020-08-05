import {clienteAxios} from '../config/axios';
import tokenAuth from '../config/tokenAuth';

const usuarioAutenticado = () => {
    const token = localStorage.getItem('token')
    if(token){
        tokenAuth(token)
    }
}

export const obtenerUsuarios = async () => {
    usuarioAutenticado()
    try {
        const respuesta = await clienteAxios.get('usuarios');
        console.log(respuesta)
        return(respuesta)
    } catch (error) {
        return({
            estatus:false,
            resultadoOperacion: "Ha ocurrido un error"
        })
    }
}
