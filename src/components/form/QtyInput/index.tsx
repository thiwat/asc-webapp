import { QtyInputProps } from "./types"
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline'

const QtyInput = ({
  min,
  max,
  value,
  onChange
}: QtyInputProps) => {

  const onAdd = () => {
    if (value + 1 > max) return
    onChange(value + 1)
  }

  const onRemove = () => {
    if (value - 1 < min) return
    onChange(value - 1)
  }

  return (
    <div className={'flex flex-row space-x-6 items-center text-font'}>
      <div className={'cursor-pointer'} onClick={onRemove}>
        <MinusCircleIcon width={40} height={40} />
      </div>
      <div className={'text-primary text-2xl min-w-[30px] text-center font-medium'}>{value || min}</div>
      <div className={'cursor-pointer'} onClick={onAdd}>
        <PlusCircleIcon width={40} height={40} />
      </div>
    </div>
  )
}

export default QtyInput