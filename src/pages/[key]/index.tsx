import NotFound from "@/components/ui/NotFound"
import Page from "@/components/ui/Page"
import SurveyPage from "@/components/ui/Survey"
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

  if (loading || !type) return null

  if (type === RewriteUrlType.cms_page) {
    return (
      <Page pageKey={ref} />
    )
  }

  if (type == RewriteUrlType.survey) {
    return (
      <SurveyPage code={ref} />
    )
  }

  return (
    <NotFound />
  )
}

export default RewriteUrlPage