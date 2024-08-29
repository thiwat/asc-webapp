import { requestGetPage } from "@/apis/client/cms"
import { useRequest } from "ahooks"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { PageServiceProps } from "./types"

const usePage = ({ pageKey }: PageServiceProps) => {

  const router = useRouter()

  const { data, run } = useRequest(requestGetPage, {
    manual: true,
    onSuccess: (r) => {
      const hash = router.asPath.split('#')[1]
      if (hash) {
        setTimeout(() => {
          scrollToHash(hash)
        }, 100)
      }
    }
  })

  const scrollToHash = (hash: string) => {
    const element = document.getElementById(hash)
    if (!element) return

    const y = element.getBoundingClientRect().top
    window.scrollTo(0, y)
  }

  useEffect(() => {
    if (pageKey) {
      run({ pageKey })
    }
  }, [pageKey])

  return {
    blocks: data?.blocks || []
  }
}

export default usePage