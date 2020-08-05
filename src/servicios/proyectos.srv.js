import {clienteAxios} from '../config/axios';
import tokenAuth from '../config/tokenAuth';

const usuarioAutenticado = () => {
    const token = localStorage.getItem('token')
    if(token){
        tokenAuth(token)
    }
}

export const obtenerProyectos = async () => {
    usuarioAutenticado()
    try {
        const respuesta = await clienteAxios.get('proyectos');
        console.log(respuesta)
        return(respuesta)
    } catch (error) {
        return({
            estatus:false,
            resultadoOperacion: "Ha ocurrido un error"
        })
    }
}


export const agregarProyecto = async proyecto => {
    console.log(proyecto)
    usuarioAutenticado()
    try {
        const respuesta = await clienteAxios.post('proyectos', proyecto);
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

export const obtenerProyectosId = async (id) => {
    usuarioAutenticado()
    try {
        const respuesta = await clienteAxios.post('proyectos/consultaId', id);
        console.log(respuesta)
        return(respuesta)
    } catch (error) {
        return({
            estatus:false,
            resultadoOperacion: "Ha ocurrido un error"
        })
    }
}
