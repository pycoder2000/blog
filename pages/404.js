import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title={`Page Not Found - ${siteMetadata.title}`} />
      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:px-3 md:text-8xl md:leading-14">
            404
          </h1>
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="md:border-l-2 md:px-6">
            <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            Whoopsie daisy! Looks like we can't find that page.
            </p>
            <p className="mb-4">
            Uh oh, it looks like you've stumbled upon a page that doesn't exist. 
            Don't worry, it happens to the best of us. To make it up to you, how about checking out some of our latest and greatest content instead? 
            Or, if you're feeling brave, you can use the search bar to try and find what you're looking for. 
            If all else fails, you can always reach out to us for help.
            </p>
            <p>Thanks for stopping by!</p>
          </div>
        </div>
      </div>
      <div className="mt-16 grid place-items-center">
        <Link href="/">
          <button aria-label="Scroll To Top" type="button" className="pushable">
            <span className="shadow"></span>
            <span className="edgeblue"></span>
            <span className="frontblue">Return to Homepage</span>
          </button>
        </Link>
      </div>
    </>
  )
}
