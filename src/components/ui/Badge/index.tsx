import { BadgeProps } from "./types"

const Badge = ({
  label,
  sublabel,
}: BadgeProps) => {
  return (
    <div className={'bg-primary-200 px-3 py-1 rounded-lg text-primary flex flex-col justify-center items-center'}>
      <div>{sublabel}</div>
      <div className={'text-3xl'}>{label}</div>
    </div>
  )
}

export default Badge