import { request } from "../request";
import { AuthSocialInput } from "./types";

export const requestAuthLogin = (data: AuthSocialInput) => {
  data['app_key'] = process.env.APP_KEY
  data['secret_key'] = process.env.SECRET_KEY
  return request('v1/auth/social/line', 'POST', data)
}