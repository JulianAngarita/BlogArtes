import {LOGIN_EXITOSO} from '../tipos/usuario'
import { autenticarUsuario } from '../servicios/autenticarUsuario.srv'


export function iniciarSesionAction(datos)  {
    return async(dispatch) => {
        try {
            const respuesta = await autenticarUsuario(datos)
            if(!respuesta) return
            dispatch(verificarUsuario())
            return(respuesta)
        } catch (error) {
            
        }
    }
}

const verificarUsuario = () => ({
    type: LOGIN_EXITOSO
})