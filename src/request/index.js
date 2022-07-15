import axios from "axios"
const service = axios.create({
    baseURL: '/service',
    timeout: '10000',
})


service.interceptors.request.use(
    config => {
        console.log('请求拦截',config);
        return config
    },
    error => {
        return Promise.reject(error)
    }
)


service.interceptors.response.use(
    response => {
        console.log('响应拦截',response);
        const resData = response.data
        return resData
    },
    error => {
        return Promise.reject(error)
    }
)
export default service