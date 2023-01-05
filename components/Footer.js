import { currentDayName } from '@/lib/utils/dateUtils'
import Link from './Link'
import NowPlayingFooter from './NowPlayingFooter'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="mt-10 mb-4 flex flex-col items-center justify-between md:flex-row">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="github" href={siteMetadata.github} size="5" />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size="5" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="5" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="5" />
        </div>
        <div className="mb-3 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          {siteMetadata.author}
          {` © ${new Date().getFullYear()}`} | Have a good {currentDayName()}!
        </div>
      </div>
    </footer>
  )
}

{
  /*export default function Footer() {
  return (
    <footer>
      <div className="mt-10 flex flex-col items-center">
        <div className="">
          <NowPlayingFooter />
        </div>
        <div className="mb-2 hidden text-sm text-gray-500 dark:text-gray-400 md:flex">
          <div className="mx-1">
            <Link href="https://hshiferaw.com" className="link-underline">
              Henok Shiferaw{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
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
        <div className="mb-2 text-sm text-gray-500 dark:text-gray-400 sm:block md:hidden lg:hidden">
          <div className="mx-1">
            <Link href="https://hshiferaw.com" className="link-underline">
              Henok{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} */
}
