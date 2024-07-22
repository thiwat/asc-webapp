import { requestList } from '@/apis/client/entity'
import { Entity } from '@/enums/entity'
import { useRequest } from 'ahooks'
import { useRef, useState } from 'react'

export const useEvents = () => {

  const [open, setOpen] = useState<boolean>(false)
  const [qty, setQty] = useState<number>(1)
  const eventData = useRef<any>({})

  const { data } = useRequest(requestList, {
    defaultParams: [{
      entity: Entity.event,
      page: 1,
      page_size: 20
    }]
  })

  const onToggle = () => {
    setOpen(prev => !prev)
  }

  const onOpen = (code: string) => {
    const exists = data['rows'].find(i => i.code === code)
    eventData.current = exists
    setQty(1)
    setOpen(true)
  }

  const onChangeQty = (qty: number) => {
    setQty(qty)
  }

  const onPlaceOrder = () => {
    alert(`Purchase ${qty} ticket`)
  }

  return {
    open,
    data: data?.['rows'] || [],
    eventData: eventData.current,
    qty,
    onOpen,
    onChangeQty,
    onToggle,
    onPlaceOrder
  }
}