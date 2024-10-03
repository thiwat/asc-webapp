import { request } from "../request"
import { SubmitSurveyInput } from "./types"

export const requestSubmitSurvey = async (data: SubmitSurveyInput, headers?: object) => {
  return request('v1/survey/submit', 'POST', data, headers)
}