import Header from "../ui/Header";
import { LayoutProps } from "./types";

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className={''}>
      <Header />
      <div className={'p-3'}>
        {children}
      </div>
    </div>
  )
}

export default MainLayout