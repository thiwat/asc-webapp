import { request } from "../request";

export const requestMyTickets = async (headers: object): Promise<any> => {
  return request(`v1/event/me`, 'GET', undefined, headers)
}