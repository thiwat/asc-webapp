import { FieldProps } from 'rc-field-form/es/Field';

export type FormItemProps = FieldProps & {
  label?: string;
  listName?: string;
  className?: string;
  required?: boolean;
}