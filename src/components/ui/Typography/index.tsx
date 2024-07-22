import { TypographyProps } from "./types"

const Typography = ({
  children,
  type,
  className
}: TypographyProps) => {

  if (type === 'title') {
    return (
      <h3 className={`text-primary text-xl font-medium${className ? ` ${className}` : ''}`}>
        {children}
      </h3>
    )
  }

  return (
    <span className={`text-sm${className ? ` ${className}` : ''}`}>
      {children}
    </span>
  )
}

export default Typography