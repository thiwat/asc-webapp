import { InputProps } from './types'

const InputMask = ({
  value,
  placeholder,
  onChange
}: InputProps) => {

  const _onChange = (e) => {
    onChange((e.target.value || '').replaceAll(',', '').replace(/[^0-9]/g, ''))
  }

  const formatValue = () => {
    return `${(value || '')}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <input
      value={formatValue()}
      placeholder={placeholder}
      onChange={_onChange}
      className={`border border-line rounded-lg px-2 py-2 h-[40px] text-font text-xs outline-none w-full focus:border-secondary focus:text-secondary group-[.field-error]:border-error`}
    />
  )
}

export default InputMask