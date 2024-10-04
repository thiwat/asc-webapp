import dayjs from 'dayjs'
import Sheet from 'react-modal-sheet'
import { TicketBottomSheetProps } from "./types";
import Typography from '../../Typography';
import { ClockIcon, MapIcon } from '@heroicons/react/24/outline'
import Slider from "react-slick";
import Badge from '../../Badge';
import QRCode from 'react-qr-code';

const TicketBottomSheet = ({
  data,
  isOpen,
  onClose,
}: TicketBottomSheetProps) => {

  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      detent={'content-height'}
    >
      <Sheet.Backdrop />
      <Sheet.Container className={'!rounded-t-3xl'}>
        <Sheet.Header style={{ marginTop: -30, marginBottom: -10 }} />
        <Sheet.Content>
          <Sheet.Scroller draggableAt="both">
            <img
              src={data?.event?.cover?.url}
              className={'w-full rounded-t-3xl'}
            />
            <div className={'p-3'}>
              <Typography type={'title'}>
                {data?.event?.name}
              </Typography>
              <div className={'flex flex-row space-x-3 items-center mt-3'}>
                <Badge
                  label={dayjs(data?.event?.event_start_date).format('DD')}
                  sublabel={dayjs(data?.event?.event_start_date).format('MMM')}
                />
                <div className={'space-y-1'}>
                  <div className={'flex flex-row items-center space-x-2'}>
                    <ClockIcon height={18} width={18} />
                    <div className={'text-sm'}>{`${dayjs(data?.event?.event_start_date).format('HH:mm')} - ${dayjs(data?.event?.event_end_date).format('HH:mm')}`}</div>
                  </div>
                  <div className={'flex flex-row items-center space-x-2'}>
                    <MapIcon height={18} width={18} />
                    <div className={'text-sm'}>{data?.event?.location}</div>
                  </div>
                </div>
              </div>
              <div className={'mt-6 mb-12 overflow-x-hidden no-scrollbar pb-[30px]'}>
                <Slider
                  dots
                  infinite={false}
                >
                  {(data.tickets || []).map(i => (
                    <QRCode
                      key={i.code}
                      value={i.code}
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet >
  )
}

export default TicketBottomSheet