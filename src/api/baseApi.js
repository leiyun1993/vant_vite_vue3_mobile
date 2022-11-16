"use strict";
import axios from 'axios'
import qs from 'qs'


const service = axios.create({
	timeout: 300 * 1000,
	headers: {
		"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
	}
})

service.interceptors.request.use(
	config => {
		config.he
		if (config.method == "POST") {
			config.data = qs.stringify(config.data);
		}
		return config
	},
	e => {
		return Promise.reject(e)
	}
)

service.interceptors.response.use(
	response => {
		let { data } = response;
		if (data) {
			if (data.code == 0) {
				return Promise.resolve(data);
			} else if (data.code === 406) {	//登录失效
				window.location.href = "/login";
				return Promise.reject(data);
			} else {
				return Promise.reject(data);
			}
		} else {
			return Promise.reject({ code: 501, data: {}, list: [], msg: "您的访问出现错误，请联系管理人员" });
		}
	},
	e => {
		let message = "";
		if (e) {
			let { response } = e;
			console.log('e', response);
			switch (response.status) {
				case 400:
					message = "请求错误(400)";
					break;
				case 401:
					message = "未授权，请重新登录(401)";
					break;
				case 403:
					message = "拒绝访问(403)";
					break;
				case 404:
					message = "请求出错(404)";
					break;
				case 408:
					message = "请求超时(408)";
					break;
				case 500:
					message = "服务器错误(500)";
					break;
				case 501:
					message = "服务未实现(501)";
					break;
				case 502:
					message = "网络错误(502)";
					break;
				case 503:
					message = "服务不可用(503)";
					break;
				case 504:
					message = "网络超时(504)";
					break;
				case 505:
					message = "HTTP版本不受支持(505)";
					break;
				default:
					message = `连接出错(${response.status})!`;
			}
		} else {
			message = "网络连接异常,请稍后再试!";
		}
		return Promise.reject({ code: 501, data: {}, list: [], msg: message });
	}
)


export function request (url, params = {}, method = "POST") {
	return new Promise((resolve, reject) => {
		let promise;
		if (method.toUpperCase() === 'POST') {
			promise = service({
				url,
				data: params,
				method
			})
		} else {
			promise = service({
				url,
				params,
			})
		}
		promise.then(res => {
			resolve(res);
		}).catch(e => {
			reject(e);
		})
	})
}