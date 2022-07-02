import { currentDayName } from '@/lib/utils/dateUtils'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Link from './Link'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
          <SocialIcon kind="website" href={siteMetadata.website} size="6" />
        </div>
        <br />
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>
            <Link href="https://parthdesai.vercel.app">{siteMetadata.author}</Link>
          </div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div className="background-author-animate bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-sm text-transparent">
            <Link
              href="https://qod.shakiltech.com/"
              className="link-underline link-underline-black"
            >
              Have a good {currentDayName()}!
            </Link>
          </div>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400 md:flex-row">
          <Link
            className="link-underline link-underline-black hover:text-primary-600 dark:hover:text-primary-600"
            href="/"
          >
            Home
          </Link>
          <Link
            className="link-underline link-underline-black hover:text-primary-600 dark:hover:text-primary-600"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="link-underline link-underline-black hover:text-primary-600 dark:hover:text-primary-600"
            href="/tags"
          >
            Tags
          </Link>
          <Link
            className="link-underline link-underline-black hover:text-primary-600 dark:hover:text-primary-600"
            href="/about"
          >
            About
          </Link>
          <Link
            className="link-underline link-underline-black hover:text-primary-600 dark:hover:text-primary-600"
            href="/snippets"
          >
            Snippets
          </Link>
          <Link
            className="link-underline link-underline-black hover:text-primary-600 dark:hover:text-primary-600"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="link-underline link-underline-black hover:text-primary-600 dark:hover:text-primary-600"
            href="/now"
          >
            Now
          </Link>
          <Link
            className="link-underline link-underline-black hover:text-primary-600 dark:hover:text-primary-600"
            href="/feed.xml"
          >
            RSS
          </Link>
          <Link
            className="link-underline link-underline-black hover:text-primary-600 dark:hover:text-primary-600"
            href="/uses"
          >
            Uses
          </Link>
          <Link
            className="link-underline link-underline-black hover:text-primary-600 dark:hover:text-primary-600"
            href="https://parthdesai.vercel.app"
          >
            Website
          </Link>
        </div>
      </div>
    </footer>
  )
}
