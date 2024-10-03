import { ButtonProps } from "./types"

const Button = ({
  children,
  htmlType,
  onClick
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={htmlType}
      className={'bg-primary w-full text-white min-h-[50px] rounded-lg'}
    >
      {children}
    </button>
  )
}

export default Button