import axios from 'axios';

// Cliente axios
const clienteAxios = axios.create({
    // baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`
    baseURL: process.env.REACT_APP_API_URL
})

export default clienteAxios;