
import React, { useContext, useState, useMemo } from 'react'
import RCForm, { Field, FormProps } from 'rc-field-form'
import { FieldData } from 'rc-field-form/es/interface';
import _isArray from 'lodash/isArray'
import _get from 'lodash/get'
import { FormItemProps } from './types';
import { t } from '@/utils/translate';

export const FormContext = React.createContext({ errors: {} });

export const FormItem = ({
  children,
  label,
  listName,
  className,
  required,
  ...props
}: FormItemProps) => {
  const { errors } = useContext(FormContext);

  const rawName = props.name as string | string[];
  const name = listName
    ? `${listName}__${Array.isArray(rawName) ? rawName.join("__") : rawName}`
    : Array.isArray(rawName) ? rawName.join("__") : rawName

  const error = _get(errors, name);
  const rules = props.rules || [];

  if (required) {
    rules.push({
      required: true,
      message: t("common_info_required_field"),
    });
  }

  const Child = React.cloneElement(children as React.ReactElement, {
    id: name,
    "data-testid": name,
  });

  return (
    <div
      id={name}
      className={`group ${error ? "field-error" : ""} ${className || ''} mb-4`}
    >
      <p className={`line-clamp-1 text-sm ${label ? 'mb-1' : ''}`}>
        {label}
        {!required && <span style={{ marginLeft: 5, fontSize: 12, color: '#bdbdbd' }}>(optional)</span>}
      </p>
      <Field {...props} rules={rules}>
        {Child}
      </Field>
      <div className="text-error text-xs h-2 mt-[-1px] mb-[-2px]">
        {error}
      </div>
    </div>
  );
};

const Form = ({ children, onFieldsChange, onFinishFailed, ...props }: FormProps) => {
  const [errors, setErrors] = useState({});
  const memoError = useMemo(() => ({ errors }), [errors]);

  const handleOnFinishFailed = (data) => {
    const { errorFields } = data;
    const res = {};
    for (const error of errorFields) {
      const name = error.name.join("__");
      const [err] = error.errors;
      res[name] = err;
    }
    setErrors(res);
    if (onFinishFailed) onFinishFailed(data);
  };

  const handleOnFieldsChange = (changedFields: FieldData[], allFields: FieldData[]) => {
    const res = {};
    for (const error of allFields.filter((i) => i.errors.length)) {
      const key: string[] = _isArray(error.name) ? (error.name as string[]) : [error.name as string];
      const name = key.join("__");
      const [err] = error.errors;
      res[name] = err;
    }
    setErrors(res);
    if (onFieldsChange) onFieldsChange(changedFields, allFields);
  };

  return (
    <FormContext.Provider value={memoError}>
      <RCForm {...props} onFinishFailed={handleOnFinishFailed} onFieldsChange={handleOnFieldsChange}>
        {children}
      </RCForm>
    </FormContext.Provider>
  );
};

export const FormList = RCForm.List

export const useWatch = RCForm.useWatch
export const useForm = RCForm.useForm

export default Form;