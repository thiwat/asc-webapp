export type RadioGroupOptionProps = {
  label: string;
  value: any;
}

export type RadioGroupProps = {
  id?: string;
  disabled?: boolean;
  value?: any;
  options: RadioGroupOptionProps[];
  onChange?: (value: any) => void;
}