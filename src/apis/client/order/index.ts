import { request } from "../request";
import { RequestPlaceOrderInput } from "./types";

export const requestPlaceOrder = (data: RequestPlaceOrderInput) => {
  return request('order', 'POST', data)
}