export type RequestPlaceOrderInput = {
  event: string;
  quantity: number;
}

export type RequestUploadSlipInput = {
  order_no: string;
  slip_url: string;
}