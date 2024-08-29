import { request } from "../request"
import { GetBlockProps, GetPageProps } from "./types"

export const requestGetBlock = async ({ blockKey }: GetBlockProps): Promise<any> => {
  return request(`cms/block/${blockKey}`, 'GET')
}

export const requestGetPage = async ({ pageKey }: GetPageProps): Promise<any> => {
  return request(`cms/page/${pageKey}`, 'GET')
}