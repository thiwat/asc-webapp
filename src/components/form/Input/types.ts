export type InputProps = {
  value?: string;
  disabled?: boolean;
  type?: 'password' | 'number' | 'textarea';
  mask?: 'number';
  min?: number;
  suffix?: string;
  withPolicy?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
}