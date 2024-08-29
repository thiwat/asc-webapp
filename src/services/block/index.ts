import { requestGetBlock } from "@/apis/client/cms";
import { BlockServiceProps } from "./types";
import { useRequest } from 'ahooks'
import { useEffect } from "react";

const useBlock = ({ blockKey, content }: BlockServiceProps) => {

  const { data, run } = useRequest(requestGetBlock, {
    manual: true,
  })

  useEffect(() => {
    if (blockKey) {
      run({ blockKey })
    }
  }, [blockKey])

  return {
    id: content?.code || data?.code,
    type: content?.type || data?.type,
    data: content?.content || data?.content || {}
  }
}

export default useBlock