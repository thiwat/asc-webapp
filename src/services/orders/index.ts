import { requestList } from '@/apis/client/entity'
import { Entity } from '@/enums/entity'
import { OrderStatus } from '@/enums/order'
import { useRequest } from 'ahooks'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

export const useOrders = () => {

  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)
  const orderData = useRef<any>({})

  const { data } = useRequest(requestList, {
    defaultParams: [{
      entity: Entity.order,
      page: 1,
      page_size: 20,
      sort: '-created_at'
    }]
  })

  const onToggle = () => {
    setOpen(prev => !prev)
  }

  useEffect(() => {
    if (router.query.order_no) {
      onOpen(router.query.order_no as string)
    }
  }, [router.query, data])

  const onOpen = (orderNo: string) => {
    const exists = (data?.['rows'] || []).find(i => i.order_no === orderNo)
    if (!exists) return
    if (exists.status !== OrderStatus.pending_payment) return
    orderData.current = exists
    setOpen(true)
  }

  return {
    open,
    data: data?.['rows'] || [],
    orderData: orderData.current,
    onOpen,
    onToggle,
  }
}