const EMAIL_REGEX = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
const PHONE_REGEX = /^0[0-9]{8,9}$/;
const THAI_REGEX = /^[\u0E00-\u0E7F ]{1,50}$/;

const UPPER_REGEX = /[A-Z]/
const LOWER_REGEX = /[a-z]/
const DIGIT_REGEX = /[0-9]/
const SPECIAL_REGEX = /(.*\W.*)/


const REGEX_MATCH_WITH_CASE = {
  upper_case: UPPER_REGEX,
  lower_case: LOWER_REGEX,
  digit_case: DIGIT_REGEX,
  special_case: SPECIAL_REGEX,
};

export const isEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email)
}

export const isMobileNo = (mobileNo: string): boolean => {
  return PHONE_REGEX.test(mobileNo)
}

export const isThaiCharacter = (text: string): boolean => {
  return THAI_REGEX.test(text)
}

export const isThaiCitizenIdFormat = (id: string): boolean => {
  if (id == null || id.length !== 13 || !/^[0-9]\d+$/.test(id)) {
    return false;
  }
  let i; let sum = 0;
  for ((i = 0), (sum = 0); i < 12; i++) {
    sum += parseInt(id.charAt(i)) * (13 - i);
  }
  const check = (11 - sum % 11) % 10;
  if (check === parseInt(id.charAt(12))) {
    return true;
  }
  return false;
};

export const isMatchCase = (value: string, c: string) => {
  return REGEX_MATCH_WITH_CASE[c].test(value)
}
