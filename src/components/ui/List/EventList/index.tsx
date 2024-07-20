import { useEvents } from "@/services/events"
import List from ".."
import EventListItem from "./Item"

const EventList = () => {

  const { data } = useEvents()

  return (
    <List
      data={data}
      renderItem={(row) => <EventListItem item={row} />}
    />
  )
}

export default EventList