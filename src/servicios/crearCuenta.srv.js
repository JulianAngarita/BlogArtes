import {clienteAxios} from '../config/axios';

export const crearCuenta = async(payload) => {
    try {
        const respuesta = await clienteAxios.post('usuarios', payload)
        return(respuesta.data)
    } catch (error) {
        return({
            data: {
                estatus: false,
                resultadoOperacion: "Ha ocurrido un problema"
            }
        })
    }
}