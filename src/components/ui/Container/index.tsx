import useAuth from "@/services/auth"
import { ContainerProps } from "./types"

const Container = ({
  children
}: ContainerProps) => {

  const {
    loading
  } = useAuth()

  if (loading) return null

  return (
    <>
      {children}
    </>
  )
}

export default Container