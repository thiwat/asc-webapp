import dayjs from 'dayjs'
import { EventListItemProps } from './types'
import { ClockIcon, MapIcon } from '@heroicons/react/24/outline'
import Badge from '../../Badge'

const EventListItem = ({
  item,
  onClick
}: EventListItemProps) => {

  const _onClick = (code: string) => () => {
    onClick(code)
  }

  return (
    <div
      onClick={_onClick(item.code)}
      className={'border rounded-3xl shadow flex flex-col overflow-hidden'}
    >
      <img
        src={item.cover.url}
        className={'max-h-[120px] object-cover'}
      />
      <div className={'px-3 py-2 text-gray-600 space-x-3 flex flex-row items-center'}>
        <Badge
          label={dayjs(item.event_start_date).format('DD')}
          sublabel={dayjs(item.event_start_date).format('MMM')}
        />
        <div>
          <div className={'text-md font-medium text-primary'}>{item.name}</div>
          <div className={'flex flex-row items-center space-x-2'}>
            <ClockIcon height={18} width={18} />
            <div className={'text-sm'}>{`${dayjs(item.event_start_date).format('HH:mm')} - ${dayjs(item.event_end_date).format('HH:mm')}`}</div>
          </div>
          <div className={'flex flex-row items-center space-x-2'}>
            <MapIcon height={18} width={18} />
            <div className={'text-sm'}>{item.location}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventListItem