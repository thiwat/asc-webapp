import { request } from "../request"
import { SubmitSurveyInput } from "./types"

export const requestSubmitSurvey = ({ code, answers }: SubmitSurveyInput) => {
  return request('survey/submit', 'POST', { code, answers })
}