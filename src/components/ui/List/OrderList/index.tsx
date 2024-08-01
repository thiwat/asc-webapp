import List from ".."
import OrderBottomSheet from "../../BottomSheet/Order"
import OrderListItem from "./Item"
import { useOrders } from "@/services/orders"

const OrderList = () => {

  const {
    data,
    open,
    orderData,
    onOpen,
    onToggle,
  } = useOrders()

  return (
    <>
      <List
        data={data}
        className={'space-y-3'}
        renderItem={(row) => <OrderListItem item={row} onClick={onOpen} />}
        extractKey={(row) => `${row.order_no}`}
      />
      <OrderBottomSheet
        data={orderData}
        isOpen={open}
        onClose={onToggle}
      />
    </>
  )
}

export default OrderList