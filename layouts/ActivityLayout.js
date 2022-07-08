import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function ActivityLayout({ children, frontMatter }) {
  const { name } = frontMatter
  return (
    <>
      <PageSEO title={`Activity - ${siteMetadata.author}`} description="My activities" />
      <div className="mx-auto max-w-2xl">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Activity
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">List my activity.</p>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="prose prose-lg max-w-none pb-8 dark:prose-dark xl:col-span-3">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
