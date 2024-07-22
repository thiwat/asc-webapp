import { useEvents } from "@/services/events"
import List from ".."
import EventListItem from "./Item"
import EventBottomSheet from "../../BottomSheet/Event"

const EventList = () => {

  const {
    data,
    open,
    qty,
    eventData,
    onChangeQty,
    onOpen,
    onToggle,
    onPlaceOrder,
  } = useEvents()

  return (
    <>
      <List
        data={data}
        renderItem={(row) => <EventListItem item={row} onClick={onOpen} />}
        extractKey={(row) => `${row.code}`}
      />
      <EventBottomSheet
        data={eventData}
        isOpen={open}
        qty={qty}
        onClose={onToggle}
        onChangeQty={onChangeQty}
        onPlaceOrder={onPlaceOrder}
      />
    </>
  )
}

export default EventList