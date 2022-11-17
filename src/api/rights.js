import { request } from "@/api/baseApi.js";
import Api from "@/config/interfaces.js";
import PROXY from "@/config/apiProxy";

console.log('PROXY',PROXY);


export function getUnitInfo (params) {
	return request(PROXY.BASE_API + Api.INTERFACE_GET_UNIT_INFO_BY_UNIT_ID, params)
}