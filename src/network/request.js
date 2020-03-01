import axios from 'axios'

//网络请求封装
export function request(config) {
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout: 5000
  })

  instance.interceptors.request.use(
    config => {return config},
    error => {}
    )
  instance.interceptors.response.use(
    result =>{return result},
    error => {}
  )

  return instance(config)
}
