"use strict";

import Vue from 'vue';
import axios from "axios";
import {Loading, Message} from 'element-ui'
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

let loadingInstance
_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    loadingInstance = Loading.service({
      fullscreen: true,
      background: 'rgba(0, 0, 0, 0.5)'
    })
    return config;
  },
  function(error) {
    // Do something with request error
    loadingInstance.close()
    Message.error({
      message: '加载超时'
    })
    window.console.error(error)
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    // response => {
    //     loadingInstance.close()
    //     if (response.data === 'tosignin') { // token失效
    //       router.push('/login')
    //     }
    //     if (!Array.isArray(response.data)) { // {} res为对象
    //       if (response.data.success) {
    //         if (response.data.msg) {
    //           Message.success({
    //             message: response.data.msg
    //           })
    //         }
    //       } else {
    //         if (response.data.msg) {
    //           Message.error({
    //             message: response.data.msg
    //           })
    //         }
    //       }
    //     } else { // [] res为数组
    //       if (!Array.isArray(response.data[0].data)) { // {} 不带分页
    //         if (response.data[0].success) {
    //           if (response.data[0].msg) {
    //             Message.success({
    //               message: response.data[0].msg
    //             })
    //           }
    //         } else {
    //           if (response.data[0].msg) {
    //             Message.error({
    //               message: response.data[0].msg
    //             })
    //           }
    //         }
    //       } else { // [] 带分页
    //       }
    //     }
    return response;
  },
  function(error) {
    // Do something with response error
    loadingInstance.close()
    Message.error({
      message: '请求出错或超时！'
    })
    window.console.error(error)
    return Promise.reject(error);
  }
);

// eslint-disable-next-line no-unused-vars
Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;

// export const uploadUrl = 'http://172.16.11.84:8087/upload/c'
export const serverUrl = 'http://172.16.11.84:8087/BaiJieOA'

const instance = axios.create({
  baseURL: serverUrl,
  // withCredentials: true, // 跨域凭证
  timeout: 25000
  // headers: {'token': tk}
})

export function $post(url, params = {}) {
  // let isQuestionMark = url.indexOf('?') > -1
  // let mark = isQuestionMark ? '&' : '?'
  return new Promise((resolve, reject) => {
    instance
      // .post(url, qs.stringify(params))
      // .post(url + mark + 'tk=' + tk, params)
      .post(url, params)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}