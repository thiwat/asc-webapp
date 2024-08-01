import { TagProps } from "./types"

const Tag = ({
  color,
  label
}: TagProps) => {
  return (
    <div
      className={'rounded-2xl py-0.5 px-3 font-light'}
      style={{
        borderColor: color,
        backgroundColor: `${color}20`,
        color
      }}
    >
      {label}
    </div>
  )
}

export default Tag