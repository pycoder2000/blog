import { currentDayName } from '@/lib/utils/dateUtils'
import Link from './Link'
import NowPlayingFooter from './NowPlayingFooter'

export default function Footer() {
  return (
    <footer>
      <div className="mt-10 flex flex-col items-center">
        <div className="">
          <NowPlayingFooter />
        </div>
        <div className="mb-2 flex text-sm text-gray-500 dark:text-gray-400">
          <div className="mx-1">
            <Link href="https://parthdesai.vercel.app" className="link-underline">
              Parth Desai
            </Link>
          </div>
          {`•`}
          <div className="mx-1">{`© ${new Date().getFullYear()}`}</div>
          {`•`}
          <div className="mx-1">
            <Link href="https://qod.shakiltech.com/" className="link-underline">
              Have a good {currentDayName()}!
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link href="/contact" className="link-underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
