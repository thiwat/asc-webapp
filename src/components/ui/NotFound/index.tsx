import { InformationCircleIcon } from '@heroicons/react/24/outline'
import Typography from '../Typography'
import { t } from '@/utils/translate'

const NotFound = () => {
  return (
    <div className={'h-[calc(100svh-100px)] flex flex-col space-y-3 justify-center items-center'}>
      <InformationCircleIcon
        height={150}
        width={150}
        className='text-error'
      />
      <Typography type={'title'} className={'!text-error'}>
        {t('common_page_not_found')}
      </Typography>
    </div>
  )
}

export default NotFound