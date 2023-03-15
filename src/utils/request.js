import axios from 'axios'

const BASE_URL = 'http://192.168.3.38:9925'

const service = axios.create({
    baseURL: BASE_URL,
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default service