import useMyTickets from "@/services/tickets"
import List from ".."
import TicketListItem from "./Item"
import TicketBottomSheet from "../../BottomSheet/Ticket"

const TicketList = () => {

  const {
    data,
    open,
    eventData,
    onOpen,
    onToggle
  } = useMyTickets()

  return (
    <>
      <List
        data={data}
        renderItem={(row) => <TicketListItem item={row?.event} onClick={onOpen} />}
        extractKey={(row) => `${row.code}`}
      />
      <TicketBottomSheet
        data={eventData}
        isOpen={open}
        onClose={onToggle}
      />
    </>
  )
}

export default TicketList