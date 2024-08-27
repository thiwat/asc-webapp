import { requestMyTickets } from "@/apis/client/ticket"
import { useRequest } from "ahooks"
import { useRef, useState } from "react"

const useMyTickets = () => {

  const [open, setOpen] = useState<boolean>(false)
  const { data } = useRequest(requestMyTickets)
  const eventData = useRef<any>({})

  const onToggle = () => {
    setOpen(prev => !prev)
  }

  const onOpen = (code: string) => {
    const exists = (data || []).find(i => i?.event?.code === code)
    eventData.current = exists
    setOpen(true)
  }

  return {
    data: data || [],
    eventData: eventData.current,
    open,
    onOpen,
    onToggle
  }
}

export default useMyTickets