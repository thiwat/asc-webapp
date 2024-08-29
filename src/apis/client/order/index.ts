import { request } from "../request";
import { RequestPlaceOrderInput, RequestUploadSlipInput } from "./types";

export const requestPlaceOrder = (data: RequestPlaceOrderInput) => {
  return request('order', 'POST', data)
}

export const requestUploadSlip = (data: RequestUploadSlipInput) => {
  return request('order/slip', 'PATCH', data)
}