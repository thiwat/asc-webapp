import _get from 'lodash/get'
import { t } from "./translate";
import { isEmail, isMatchCase, isMobileNo, isThaiCharacter, isThaiCitizenIdFormat } from "./validate";

export const validateEmail = ({ }) => ({
  validator(_, value) {
    if (!value || isEmail(value)) {
      return Promise.resolve();
    }
    return Promise.reject(
      new Error(t('info_invalid_email_format'))
    );
  },
})

export const validateMobileNo = ({ }) => ({
  validator(_, value) {
    if (!value || isMobileNo(value)) {
      return Promise.resolve();
    }
    return Promise.reject(
      new Error(t('info_invalid_mobile_number_format'))
    );
  },
})

export const validateThaiCharacter = ({ }) => ({
  validator(_, value) {
    if (!value || isThaiCharacter(value)) {
      return Promise.resolve();
    }
    return Promise.reject(
      new Error(t('info_invalid_format'))
    );
  },
})

export const validateConfirmPassword = ({ getFieldValue }) => ({
  validator(_, value) {
    if (!value || getFieldValue("password") === value || getFieldValue('new_password') === value) {
      return Promise.resolve();
    }
    return Promise.reject(
      new Error(t('info_invalid_password_not_match'))
    );
  },
})

export const validateIsTrue = () => ({
  validator(_, value) {
    if (value) {
      return Promise.resolve();
    }

    return Promise.reject(
      new Error(t('info_required_field'))
    )
  }
})

export const validateCitizenId = ({ }) => {
  return {
    validator(rule, value) {
      if (!value || isThaiCitizenIdFormat(value)) {
        return Promise.resolve();
      }
      return Promise.reject(
        new Error(t('info_invalid_citizen_id_format'))
      );
    }
  };
};

export const validateAsset = (name: string[]) => ({ getFieldsValue }) => ({
  validator(_, value) {
    const values = getFieldsValue()
    if (!value && _get(values, name)) {
      return Promise.reject(
        new Error(t('info_invalid_required_field'))
      )
    }
    return Promise.resolve()
  },
})