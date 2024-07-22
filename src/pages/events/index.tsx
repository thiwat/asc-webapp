import EventList from "@/components/ui/List/EventList"
import Typography from "@/components/ui/Typography"
import { t } from "@/utils/translate"

const EventsPage = () => {

  return (
    <>
      <Typography type={'title'} className={'mb-3'}>
        {t('events_title')}
      </Typography>
      <EventList />
    </>

  )
}

export default EventsPage