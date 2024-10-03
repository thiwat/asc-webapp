export type SubmitSurveyAnswer = {
  code: string;
  answer: string;
}

export type SubmitSurveyInput = {
  code: string;
  answers: SubmitSurveyAnswer[];
}