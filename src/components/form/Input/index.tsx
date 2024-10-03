import InputMask from "./InputMask";
import { InputProps } from "./types";

const Input = ({
  value,
  type,
  min,
  mask,
  suffix,
  disabled,
  withPolicy,
  placeholder,
  onChange
}: InputProps) => {

  const _onChange = (e) => {
    onChange(e.target.value)
  }

  if (mask === 'number') {
    return (
      <InputMask
        value={value || ''}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
    )
  }

  if (type === 'textarea') {
    return (
      <textarea
        rows={5}
        value={value || ''}
        placeholder={placeholder}
        onChange={_onChange}
        disabled={disabled}
        className={'border border-line rounded-lg px-2 py-2 text-font text-xs outline-none w-full focus:border-secondary focus:text-secondary group-[.field-error]:border-error'}
      />
    )
  }

  if (!!suffix) {
    return (
      <div className={'flex h-[40px] pr-2 flex-row items-center overflow-hidden border border-line rounded-lg text-font text-xs w-full focus:border-secondary focus:text-secondary group-[.field-error]:border-error'}>
        <input
          value={value || ''}
          placeholder={placeholder}
          onChange={_onChange}
          type={type}
          disabled={disabled}
          min={min}
          className={'flex-1 px-2 py-2 h-full outline-none w-full'}
        />
        {suffix}
      </div>
    )
  }

  return (
    <input
      value={value || ''}
      placeholder={placeholder}
      onChange={_onChange}
      type={type}
      disabled={disabled}
      min={min}
      className={'border border-line rounded-lg px-2 py-2 h-[40px] text-font text-xs outline-none w-full focus:border-secondary focus:text-secondary group-[.field-error]:border-error'}
    />
  )
}

export default Input