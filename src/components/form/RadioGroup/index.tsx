import React from "react"
import { RadioGroupProps } from "./types"

const RadioGroup = ({
  id,
  value,
  disabled,
  options,
  onChange,
}: RadioGroupProps) => {

  const _onChange = (e) => {
    onChange(e.target.id.replace(`${id}-`, ''))
  }

  return (
    <fieldset
      id={id}
      className={'flex flex-row space-x-6 items-center'}
      onChange={_onChange}
      disabled={disabled}
    >
      {options.map(i => (
        <React.Fragment key={i.value}>
          <label
            htmlFor={`${id}-${i.value}`}
            className={`${i.value === value ? 'text-secondary accent-secondary' : 'text-font accent-font'} flex flex-row items-center text-sm`}
          >
            <input
              type="radio"
              id={`${id}-${i.value}`}
              name={id}
              onChange={() => { }}
              checked={i.value === value}
              key={i.value}
              className={'mr-1 mb-px'}
            />
            {i.label}
          </label>
        </React.Fragment>
      ))}
    </fieldset>
  )
}

export default RadioGroup