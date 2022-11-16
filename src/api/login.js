import { request } from "@/api/baseApi.js";
import Api from "@/config/interfaces.js";
import PROXY from "@/config/apiProxy";

console.log('PROXY',PROXY);

export function login (params) {
	return request(PROXY.BASE_API + Api.INTERFACE_LOGIN_ALL, params)
}
export function getRoleList (params) {
	return request(PROXY.BASE_API + Api.INTERFACE_USER_ROLE_LIST, params)
}
export function switchLoginRole (params) {
	return request(PROXY.BASE_API + Api.INTERFACE_USER_SWITCH, params)
}
export function getUserLoginInfo (params) {
	return request(PROXY.BASE_API + Api.INTERFACE_COMMON_LOGIN_BY_TOKEN, params)
}