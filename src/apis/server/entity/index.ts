import { request } from "../request";
import { ListQueryInput } from "./types";
import queryString from 'query-string'

export const requestList = (entity: string, query: ListQueryInput, headers: any) => {
  return request(`v1/${entity}?${queryString.stringify(query)}`, 'GET', undefined, headers)
}