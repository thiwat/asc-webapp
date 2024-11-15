import { request } from "../request";
import { RequestMarkUsedTicketInput } from "./types";

export const requestMyTickets = async (headers: object): Promise<any> => {
  return request(`v1/event/me`, 'GET', undefined, headers)
}

export const requestMarkUsedTicket = async (data: RequestMarkUsedTicketInput): Promise<any> => {
  return request('v1/ticket/mark_used', 'PATCH', data)
}