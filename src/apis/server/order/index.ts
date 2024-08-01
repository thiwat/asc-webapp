import { request } from "../request";
import { RequestPlaceOrderInput } from "./types";

export const requestPlaceOrder = (data: RequestPlaceOrderInput, headers: object) => {
  return request('v1/order', 'POST', data, headers)
}