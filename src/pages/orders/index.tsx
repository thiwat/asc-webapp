import OrderList from "@/components/ui/List/OrderList"
import Typography from "@/components/ui/Typography"
import { t } from "@/utils/translate"

const OrdersPage = () => {

  return (
    <>
      <Typography type={'title'} className={'mb-3'}>
        {t('orders_title')}
      </Typography>
      <OrderList />
    </>

  )
}

export default OrdersPage