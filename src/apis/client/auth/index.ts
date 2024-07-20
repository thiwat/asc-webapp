import { request } from "../request";
import { LoginInput } from "./types";

export const requestAuthLogin = async (data: LoginInput): Promise<any> => {
  return request('/auth/login', 'POST', data)
}