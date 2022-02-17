import axios from 'axios'
//A URL SERA ATE WS E O CEP SERA OS NUMEROS
//https://viacep.com.br/ws/01310930/json

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api