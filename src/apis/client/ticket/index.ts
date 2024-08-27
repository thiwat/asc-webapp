import { request } from "../request";

export const requestMyTickets = async (): Promise<any> => {
  return request(`event/me`, 'GET')
}