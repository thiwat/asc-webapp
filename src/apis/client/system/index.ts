import { request } from "../request";
import { RequestRewriteUrlInput } from "./types";

export const requestRewriteUrl = ({ path }: RequestRewriteUrlInput) => {
  return request(`/rewrite_url/${path}`, 'GET')
}