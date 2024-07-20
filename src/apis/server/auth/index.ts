import { request } from "../request";
import { AuthInput } from "./types";

export const requestAuthLogin = (data: AuthInput) => {
  data['app_key'] = process.env.APP_KEY
  data['secret_key'] = process.env.SECRET_KEY
  return request('v1/auth/login', 'POST', data)
}