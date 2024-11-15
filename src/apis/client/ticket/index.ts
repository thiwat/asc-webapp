import { request } from "../request";
import { RequestMarkUsedTicketInput } from "./types";

export const requestMyTickets = async (): Promise<any> => {
  return request(`event/me`, 'GET')
}

export const requestMarkUsedTicket = async (data: RequestMarkUsedTicketInput): Promise<any> => {
  return request('ticket/mark_used', 'PATCH', data)
}