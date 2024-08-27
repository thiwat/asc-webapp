import TicketList from "@/components/ui/List/TicketList"
import Typography from "@/components/ui/Typography"
import { t } from "@/utils/translate"

const TicketsPage = () => {

  return (
    <>
      <Typography type={'title'} className={'mb-3'}>
        {t('tickets_title')}
      </Typography>
      <TicketList />
    </>

  )
}

export default TicketsPage