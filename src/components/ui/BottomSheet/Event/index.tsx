import dayjs from 'dayjs'
import Sheet from 'react-modal-sheet'
import { EventBottomSheetProps } from "./types";
import Typography from '../../Typography';
import { ClockIcon, MapIcon, BanknotesIcon } from '@heroicons/react/24/outline'
import Badge from '../../Badge';
import Button from '../../Button';
import { t } from '@/utils/translate';
import QtyInput from '@/components/form/QtyInput';

const EventBottomSheet = ({
  data,
  qty,
  isOpen,
  onClose,
  onChangeQty,
  onPlaceOrder,
}: EventBottomSheetProps) => {

  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
    >
      <Sheet.Backdrop />
      <Sheet.Container className={'!rounded-t-3xl'}>
        <Sheet.Header style={{ marginTop: -30, marginBottom: -10 }} />
        <Sheet.Content>
          <Sheet.Scroller draggableAt="both">
            <img
              src={data.cover}
              className={'w-full rounded-t-3xl'}
            />
            <div className={'p-3'}>
              <Typography type={'title'}>
                {data.name}
              </Typography>
              <div className={'flex flex-row space-x-3 items-center mt-3'}>
                <Badge
                  label={dayjs(data.event_start_date).format('DD')}
                  sublabel={dayjs(data.event_start_date).format('MMM')}
                />
                <div className={'space-y-1'}>
                  <div className={'flex flex-row items-center space-x-2'}>
                    <ClockIcon height={18} width={18} />
                    <div className={'text-sm'}>{`${dayjs(data.event_start_date).format('HH:mm')} - ${dayjs(data.event_end_date).format('HH:mm')}`}</div>
                  </div>
                  <div className={'flex flex-row items-center space-x-2'}>
                    <MapIcon height={18} width={18} />
                    <div className={'text-sm'}>{data.location}</div>
                  </div>
                  <div className={'flex flex-row items-center space-x-2'}>
                    <BanknotesIcon height={18} width={18} />
                    <div className={'text-sm'}>{`${data.price}฿`}</div>
                  </div>
                </div>
              </div>
              <div className={'mt-3'}>
                <Typography className={'mt-3'}>
                  <div dangerouslySetInnerHTML={{ __html: data.detail }} />
                </Typography>
              </div>
            </div>
          </Sheet.Scroller>
          <div className={'p-3 flex flex-col items-center space-y-3'}>
            <QtyInput
              min={1}
              max={data.available_seat}
              value={qty}
              onChange={onChangeQty}
            />
            <Button type={'primary'} onClick={onPlaceOrder}>
              {t('event_button_buy')}
            </Button>
          </div>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  )
}

export default EventBottomSheet