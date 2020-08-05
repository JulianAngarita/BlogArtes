import {clienteAxios} from '../config/axios';
import tokenAuth from '../config/tokenAuth';

const usuarioAutenticado = () => {
    const token = localStorage.getItem('token')
    if(token){
        tokenAuth(token)
    }
}

export const obtenerComentarios = async () => {
    usuarioAutenticado()
    try {
        const respuesta = await clienteAxios.get('comentarios');
        console.log(respuesta)
        return(respuesta)
    } catch (error) {
        return({
            estatus:false,
            resultadoOperacion: "Ha ocurrido un error"
        })
    }
}


export const agregarComentarios = async proyecto => {
    console.log(proyecto)
    usuarioAutenticado()
    try {
        const respuesta = await clienteAxios.post('comentarios', proyecto);
        console.log(respuesta)
        return(respuesta)
    } catch (error) {
        return({
            data: {
                estatus: false,
                resultadoOperacion: "Ha ocurrido un error"
            }
        })
    }
}