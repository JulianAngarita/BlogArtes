import { LOGIN_EXITOSO, CERRAR_SESION } from "../tipos/usuario"


const initialState = {
    token: localStorage.getItem('token')
}

export default function(state = initialState, action) {
    switch(action.type){
        case LOGIN_EXITOSO: 
            return {
                ...state,
                token: localStorage.getItem('token')
            }
        case CERRAR_SESION: 
            return {
                ...state,
                token: localStorage.removeItem('token')
            }
        default:
            return state
    }
}