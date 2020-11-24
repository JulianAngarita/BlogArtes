import axios from 'axios'

export const clienteAxios = axios.create({
    baseURL: 'https://merntas.herokuapp.com/api/'
    // baseURL: 'http://localhost:4000/api/'
})