import { request } from "../request";

export const requestSiteSetting = async (): Promise<any> => {
  return request(`v1/setting/site/config`, 'GET', undefined, {
    Authorization: `Basic ${Buffer.from(`${process.env.APP_KEY}:${process.env.SECRET_KEY}`).toString('base64')}`
  })
}

export const requestRewriteUrl = async (path: string): Promise<any> => {
  return request(`v1/rewrite_url/${path}`, 'GET')
}

export const requestGetTranslate = async (site: string, locale: string, headers: object) => {
  return request(`v1/setting/translate/${site}/${locale}`, 'get', undefined, headers)
}