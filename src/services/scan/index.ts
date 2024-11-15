import { requestMarkUsedTicket } from "@/apis/client/ticket"
import { useRequest } from "ahooks"
import { useState } from "react"

const useScan = () => {

  const [pause, setPause] = useState<boolean>(false)
  const [status, setStatus] = useState<string>('')


  const scanRequest = useRequest(requestMarkUsedTicket, {
    manual: true,
    onSuccess: (r) => {
      setStatus(r.status ? 'success' : 'failed')
    }
  })

  const onScan = (code: string) => {
    scanRequest.run({ code })
  }

  const onCloseModal = () => {
    setPause(false)
    setStatus('')
  }

  return {
    pause,
    status,
    showModal: !!status,
    onScan,
    onCloseModal
  }
}

export default useScan