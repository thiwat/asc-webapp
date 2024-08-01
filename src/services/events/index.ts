import { requestList } from '@/apis/client/entity'
import { requestPlaceOrder } from '@/apis/client/order'
import { Entity } from '@/enums/entity'
import { t } from '@/utils/translate'
import { useRequest } from 'ahooks'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import toast from 'react-hot-toast'

export const useEvents = () => {

  const router = useRouter()
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

  const placeOrderRequest = useRequest(requestPlaceOrder, {
    manual: true,
    onSuccess: (r) => {
      setOpen(false)
      toast.success(t('event_place_order_success'))
      setTimeout(() => {
        router.push({
          pathname: '/orders',
          query: {
            order_no: r.order_no
          }
        })
      }, 500)
    },
    onError: (e) => {
      toast.error(e.message)
    }
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
    placeOrderRequest.run({
      quantity: qty,
      event: eventData.current.code
    })
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