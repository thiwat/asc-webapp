import { request } from "../request";

export const requestMyProfile = async (): Promise<any> => {
  return request('me', 'GET')
}