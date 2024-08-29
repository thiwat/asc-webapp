import { useEffect } from "react";
import { RewriteUrlServiceProps } from "./types";
import { useRequest } from "ahooks";
import { requestRewriteUrl } from "@/apis/client/system";
import { RewriteUrlType } from "@/enums/rewrite_url";

const useRewriteUrl = ({ path }: RewriteUrlServiceProps) => {

  const { data, loading, run } = useRequest(requestRewriteUrl, {
    manual: true
  })

  useEffect(() => {
    if (path) {
      run({ path })
    }
  }, [path])

  return {
    loading,
    ref: data?.ref,
    type: data?.type as RewriteUrlType
  }

}

export default useRewriteUrl