import NotFound from "@/components/ui/NotFound"
import Page from "@/components/ui/Page"
import { RewriteUrlType } from "@/enums/rewrite_url"
import useRewriteUrl from "@/services/rewrite_url"
import { useRouter } from "next/router"

const RewriteUrlPage = () => {

  const router = useRouter()

  const {
    ref,
    type,
    loading
  } = useRewriteUrl({ path: `${router.query.key}` })

  if (loading) return null

  if (type === RewriteUrlType.cms_page) {
    return (
      <Page pageKey={ref} />
    )
  }

  return (
    <NotFound />
  )
}

export default RewriteUrlPage