import axios from 'axios'

export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000'
    // baseURL: 'http://106.54.54.237:8000/api/hy'
  });

  // 2.axios拦截
  // 请求拦截
  instance.interceptors.request.use((config) => {
    return config
  }, (err) => {

  });

  //响应拦截
  instance.interceptors.response.use((result) => {
    return result
  }, (err) => {

  });

  //3.发送网络请求 
 return instance(config)
    
}
