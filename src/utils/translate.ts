import _template from 'lodash/template'

let TRANSLATES: object = {
  events_title: 'Upcoming Events',
  orders_title: 'My Orders',
  order_status_pending_payment: 'Pending Payment',
  order_status_paid: 'Paid',
  order_status_canceled: 'Canceled',
  order_status_completed: 'Completed',
  event_button_buy: 'Purchase',
  order_button_next: 'Next',
  order_payment_description: '<div class="flex flex-row space-x-3"><img style="width:100px;height:100px;" src="/images/promptpay.png" /><div><div>พร้อมเพย์</div><div>1102800038877</div><div>ทิวัตธ์ นันต์จารุวงศ์</div><div>${total_amount}บาท</div></div></div>',
  event_place_order_success: "Place order success",
  upload_title: "Upload slip",
  upload_description: "Please upload your slip",
  please_upload_slip: "Please upload slip first",
  order_paid_success: "You're order is completed"
}

export const t = (key: string, data?: unknown): string => {
  return _template(TRANSLATES[key] || key)(data)
}

export const setTranslate = (translate: object) => {
  TRANSLATES = translate
}