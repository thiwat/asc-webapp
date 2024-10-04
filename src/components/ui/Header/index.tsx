import Link from "next/link";
import { HeaderProps } from "./types";
import { useRouter } from "next/router";
import {
  ListBulletIcon,
  TicketIcon
} from '@heroicons/react/24/outline'

const Header = ({ }: HeaderProps) => {

  const router = useRouter()

  if (router.pathname == '/[key]') {
    return (
      <div className={'flex flex-row justify-center items-center text-primary font-bold text-2xl py-2'}>
        <div>ASC</div>
      </div>
    )
  }

  return (
    <div className={'flex flex-row justify-center items-center text-primary font-bold text-2xl py-2'}>
      <div className={'flex-1'} />
      <Link href={'/events'}>
        <div>ASC</div>
      </Link>
      <div className={'flex flex-1 flex-row justify-end items-center pr-3 space-x-3'}>
        <Link href={'/orders'}>
          <ListBulletIcon
            width={24}
            height={24}
          />
        </Link>
        <Link href={'/tickets'}>
          <TicketIcon
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
  )
}

export default Header