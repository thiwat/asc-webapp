import Sheet from 'react-modal-sheet'
import { OrderBottomSheetProps } from "./types";
import Button from '../../Button';
import { t } from '@/utils/translate';
import useOrder from '@/services/order';
import { OrderStep } from '@/enums/step';
import Upload from '@/components/form/Upload';
import Image from 'next/image';
import Typography from '../../Typography';

const OrderBottomSheet = ({
  data,
  isOpen,
  onClose,
}: OrderBottomSheetProps) => {

  const {
    slip,
    step,
    onNext,
    onUpload
  } = useOrder({ orderNo: data.order_no, onClose })

  return (
    <Sheet
      isOpen={isOpen}
      detent={'content-height'}
      onClose={onClose}
    >
      <Sheet.Backdrop />
      <Sheet.Container className={'!rounded-t-3xl'}>
        <Sheet.Header style={{ marginTop: -30, marginBottom: -10 }} />
        <Sheet.Content>
          {step === OrderStep.payment &&
            <>
              <img
                src={data.qrcode}
                className={'w-full rounded-t-3xl'}
              />
              <div className={'px-3'}>
                <div
                  className={'p-3 bg-gray-100 rounded-2xl'}
                  dangerouslySetInnerHTML={{
                    __html: t('order_payment_description', {
                      total_amount: data.total_amount
                    })
                  }}
                />
              </div>
              <div className={'p-3 flex flex-col items-center space-y-3'}>
                <Button type={'primary'} onClick={onNext}>
                  {t('order_button_next')}
                </Button>
              </div>
            </>
          }
          {step === OrderStep.upload &&
            <>
              <div className='p-12'>
                <Upload
                  value={slip}
                  onChange={onUpload}
                />
              </div>
              <div className={'p-3 flex flex-col items-center space-y-3'}>
                <Button type={'primary'} onClick={onNext}>
                  {t('order_button_next')}
                </Button>
              </div>
            </>
          }
          {step === OrderStep.completed &&
            <>
              <div className='p-12 flex flex-col items-center justify-center'>
                <Image
                  src={'/images/correct-circle.svg'}
                  height={120}
                  width={120}
                  alt='correct'
                />
                <Typography type='subtitle' className='mt-6'>
                  {t('order_paid_success')}
                </Typography>
              </div>
              <div className={'p-3 flex flex-col items-center'}>
                <Button type={'primary'} onClick={onNext}>
                  {t('order_button_next')}
                </Button>
              </div>
            </>
          }
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  )
}

export default OrderBottomSheet