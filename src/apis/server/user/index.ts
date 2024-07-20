import { request } from "../request"

export const requestMyProfile = async (headers?: object): Promise<unknown> => {
  return request('v1/user/me', 'GET', undefined, headers)
}
