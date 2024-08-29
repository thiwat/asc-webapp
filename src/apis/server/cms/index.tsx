import { request } from "../request"

export const requestGetBlock = async (blockKey: string, headers?: object): Promise<any> => {
  return request(`v1/cms/block/${blockKey}`, 'GET', undefined, headers)
}

export const requestGetPage = async (pageKey: string, headers?: object): Promise<any> => {
  return request(`v1/cms/page/${pageKey}/content`, 'GET', undefined, headers)
}