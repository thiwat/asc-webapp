import Header from "../ui/Header";
import { LayoutProps } from "./types";

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className={''}>
      <Header />
      <div className={'p-3 max-h-[calc(100vh-48px)] overflow-y-auto no-scrollbar'}>
        {children}
      </div>
    </div>
  )
}

export default MainLayout