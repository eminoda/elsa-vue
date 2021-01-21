import axios from 'axios';
import { Message } from 'element-ui';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 60 * 1000,
});
// request拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    let { message } = error;
    if (message == 'Network Error') {
      message = '网络异常，请稍后再试';
    } else if (message.includes('timeout')) {
      message = '网络繁忙，请稍后再试';
    } else if (message.includes('Request failed with status code')) {
      // message = '系统接口' + message.substr(message.length - 3) + '异常'
      message = '服务异常，请稍后再试';
    }
    Message({
      message: message,
      type: 'error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
