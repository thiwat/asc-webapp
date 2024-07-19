import MainLayout from "./Main"
import { LayoutProps } from "./types"

const Layout = ({ children }: LayoutProps) => {

  return (
    <MainLayout>
      {children}
    </MainLayout>
  )
}

export default Layout