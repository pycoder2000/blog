import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'

export default function Uses() {
  return (
    <>
      <PageSEO title={`Uses - ${siteMetadata.author}`} description="What I use" />
      <div className="mx-auto max-w-4xl divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Uses
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            Software and hardware collection of things I'm using daily.
          </p>
          <div className="mt-5 mb-3 text-xs text-gray-500 dark:text-gray-400">
            Note: This page contains links to buy or download the products. If you click through and
            purchase, I do not receive any compensation for that purchase.
          </div>
        </div>
        <div className="container py-12">
          <div className="flex flex-row flex-wrap">
          </div>
        </div>
        <div className="pt-10">
          <span className="text-base text-gray-500 dark:text-gray-400">
            P.S. I am planning on remaking this site in the future, so stay around to see what I
            come up with ;)
          </span>
        </div>
      </div>
    </>
  )
}
