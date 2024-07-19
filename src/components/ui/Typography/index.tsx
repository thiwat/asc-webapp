import { TypographyProps } from "./types"

const Typography = ({
  children,
  type
}: TypographyProps) => {

  if (type === 'title') {
    return (
      <h3 className={'text-primary text-xl text-bold mb-3'}>
        {children}
      </h3>
    )
  }

  return (
    <span className={'text-sm'}>
      {children}
    </span>
  )
}

export default Typography