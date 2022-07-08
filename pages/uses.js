import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import usesData from '@/data/usesData'
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
            {usesData.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group mb-4 w-full cursor-pointer rounded-xl p-6 backdrop-filter transition duration-200 hover:bg-gray-300 hover:bg-opacity-40 dark:hover:bg-gray-500 dark:hover:bg-opacity-40 md:w-1/2"
              >
                <div className="flex items-center justify-start">
                  <div className="flex-shrink-0 p-3 font-sans text-gray-700 dark:text-gray-50 ">
                    <svg
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-12 w-12 stroke-current text-center align-middle leading-6 text-gray-700 dark:text-gray-50"
                    >
                      <path d="M4 17L10 11 4 5" />
                      <path d="M12 19L20 19" />
                    </svg>
                  </div>
                  <div className="flex flex-col p-3">
                    <h3 className="truncate text-sm font-bold leading-5 text-gray-800 dark:text-white sm:text-base lg:text-base">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base lg:text-sm xl:text-base">
                      {d.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
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
