import dayjs from 'dayjs'
import { OrderListItemProps } from './types'
import { BanknotesIcon, TicketIcon } from '@heroicons/react/24/outline'
import Typography from '../../Typography'
import Tag from '../../Tag'
import { ORDER_STATUS_COLOR } from '@/constants/color'
import { t } from '@/utils/translate'

const OrderListItem = ({
  item,
  onClick
}: OrderListItemProps) => {

  const _onClick = (orderNo: string) => () => {
    onClick(orderNo)
  }

  return (
    <div
      onClick={_onClick(item.order_no)}
      className={'border rounded-3xl shadow flex flex-col overflow-hidden'}
    >
      <div className={'px-3 py-2 text-gray-600'}>
        <div className={'flex flex-row justify-between items-center'}>
          <Typography type={'subtitle'} className={'text-black'}>
            {item.order_no}
          </Typography>
          <Typography>
            {dayjs(item.created_at).format('DD MMM YY, HH:mm')}
          </Typography>
        </div>
        <div className={'mt-2 flex flex-row justify-between items-end'}>
          <div className={'flex flex-col space-y-1'}>
            <div className={'flex flex-row items-center space-x-2'}>
              <BanknotesIcon height={18} width={18} />
              <div className={'text-sm'}>{`${item.total_amount}฿`}</div>
            </div>
            <div className={'flex flex-row items-center space-x-2'}>
              <TicketIcon height={18} width={18} />
              <div className={'text-sm'}>{item.quantity}</div>
            </div>
          </div>
          <Tag
            color={ORDER_STATUS_COLOR[item.status]}
            label={t(`order_status_${item.status}`)}
          />
        </div>
      </div>
    </div>
  )
}

export default OrderListItem