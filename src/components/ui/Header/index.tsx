import { HeaderProps } from "./types";

const Header = ({ }: HeaderProps) => {
  return (
    <div className={'flex flex-row justify-center items-center text-primary font-bold text-2xl py-2'}>
      <div>ASC</div>
    </div>
  )
}

export default Header