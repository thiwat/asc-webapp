import Sheet from 'react-modal-sheet'
import { OrderBottomSheetProps } from "./types";
import Button from '../../Button';
import { t } from '@/utils/translate';

const OrderBottomSheet = ({
  data,
  isOpen,
  onClose,
}: OrderBottomSheetProps) => {

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
            <Button type={'primary'} onClick={() => { }}>
              {t('order_button_next')}
            </Button>
          </div>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  )
}

export default OrderBottomSheet