import { useRouter } from "next/router";
import Header from "../ui/Header";
import { LayoutProps } from "./types";

const MainLayout = ({ children }: LayoutProps) => {

  const router = useRouter()

  if (router.pathname == '/[key]') {
    return (
      <div className={''}>
        <Header />
        <div className={'max-h-[calc(100vh-48px)] overflow-y-auto no-scrollbar'}>
          {children}
        </div>
      </div>
    )
  }

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