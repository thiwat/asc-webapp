import _template from 'lodash/template'

let TRANSLATES: object = {
  events_title: 'Upcoming Events'
}

export const t = (key: string, data?: unknown): string => {
  return _template(TRANSLATES[key] || key)(data)
}

export const setTranslate = (translate: object) => {
  TRANSLATES = translate
}