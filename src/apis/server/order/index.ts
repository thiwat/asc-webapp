import { request } from "../request";
import { RequestPlaceOrderInput, RequestUploadSlipInput } from "./types";

export const requestPlaceOrder = (data: RequestPlaceOrderInput, headers: object) => {
  return request('v1/order', 'POST', data, headers)
}

export const requestUploadSlip = (data: RequestUploadSlipInput, headers: object) => {
  return request('v1/order/slip', 'PATCH', data, headers)
}