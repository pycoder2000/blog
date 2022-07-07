import { currentDayName } from '@/lib/utils/dateUtils'
import siteMetadata from '@/data/siteMetadata'
import Link from './Link'
import NowPlayingFooter from './NowPlayingFooter'

export default function Footer() {
  return (
    <footer>
      <div className="mt-10 flex flex-col items-center">
        <div className="">
          <NowPlayingFooter />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>
            <Link href="https://parthdesai.vercel.app">Parth</Link>
          </div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>
            <Link href="https://qod.shakiltech.com/" className="link-underline">
              Have a good {currentDayName()}!
            </Link>
          </div>
          <div>{` • `}</div>
          <div>
            <Link href="/contact" className="link-underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
