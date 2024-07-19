import List from "@/components/ui/List"
import Typography from "@/components/ui/Typography"
import { t } from "@/utils/translate"

const EventsPage = () => {
  return (
    <>
      <Typography type={'title'}>
        {t('events_title')}
      </Typography>
      <List data={[]} />
    </>

  )
}

export default EventsPage