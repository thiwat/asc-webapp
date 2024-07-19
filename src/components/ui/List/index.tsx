import { ListProps } from "./types";
import { ClockIcon, MapIcon } from '@heroicons/react/24/outline'

const List = ({ }: ListProps) => {

  const data = [
    {
      name: 'Annual Student Concert 2024',
      code: 'asc_2024',
      date: new Date(),
      time: '18:00 - 22:00',
      location: 'Satorn'
    },
    {
      name: 'Annual Student Concert 2025',
      code: 'asc_2025',
      date: new Date(),
      location: 'Satorn'
    },
  ]

  return (
    <div className={'space-y-6'}>
      {data.map(i => (
        <div key={i.code} className={'border rounded-3xl shadow flex flex-col overflow-hidden'}>
          <img
            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZwjH7j5vtkoC_UsFTelv-WEyW3tibdrK-Q&s'}
            className={'max-h-[120px] object-cover'}
          />
          <div className={'px-3 py-2 text-gray-600 space-x-3 flex flex-row items-center'}>
            <div className={'bg-primary-200 px-2 py-1 rounded-lg text-primary flex flex-col justify-center items-center'}>
              <div>APR</div>
              <div className={'text-3xl'}>20</div>
            </div>
            <div>
              <div className={'text-md font-medium text-primary'}>{i.name}</div>
              <div className={'flex flex-row items-center space-x-2'}>
                <ClockIcon height={18} width={18} />
                <div className={'text-sm'}>{'18:00 - 22:00'}</div>
              </div>
              <div className={'flex flex-row items-center space-x-2'}>
                <MapIcon height={18} width={18} />
                <div className={'text-sm'}>{'Satorn'}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default List