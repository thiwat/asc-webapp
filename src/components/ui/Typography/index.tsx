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

  if (type === 'subtitle') {
    return (
      <h5 className={`text-black text-md font-medium${className ? ` ${className}` : ''}`}>
        {children}
      </h5>
    )
  }

  return (
    <span className={`text-sm font-light${className ? ` ${className}` : ''}`}>
      {children}
    </span>
  )
}

export default Typography