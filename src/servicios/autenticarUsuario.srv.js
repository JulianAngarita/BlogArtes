import {clienteAxios} from '../config/axios';
import {LOGIN_EXITOSO, CERRAR_SESION} from '../tipos/usuario';

export const autenticarUsuario = async(payload) => {
    try {
        const respuesta = await clienteAxios.post('auth', payload)
        localStorage.setItem('token', respuesta.data.data.token)
        localStorage.setItem('usuario', JSON.stringify(respuesta.data.data.usuario))
        return(respuesta)
    } catch (error) {
        return({
            data: {
                estatus: false,
                resultadoOperacion: "Ha ocurrido un problema"
            }
        })
    }
}

export function cerrarSesion() {  
    return async(dispatch) => {
        localStorage.removeItem('token')
        dispatch(removerToken())
    }
}

const removerToken = () => ({
    type: CERRAR_SESION
})

export const obtenerUsuario = () => {
    let autenticado = false
    const token = localStorage.getItem('token')
    if(token){
        autenticado = true
    } else {
        autenticado = false
    }
    return autenticado
}


