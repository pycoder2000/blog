// import Link from '@/components/Link'
import Analytics from 'components/metrics/Analytics'
import Twitter from '@/components/metrics/Twitter'
import GithubPersonal from '@/components/metrics/GithubPersonal'
import GitHub from '@/components/metrics/Github'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function Dashboard() {
  return (
    <>
      <PageSEO
        title={`Stats - ${siteMetadata.author}`}
        description="Statistics about my blog, Github, Twitter and more"
      />
      <div className="mx-auto max-w-2xl">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Stats
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            I use this dashboard to track various metrics across platforms like Twitter, GitHub and
            more.
          </p>
        </div>
        <hr />
        <div className="space-y-2 pt-12 md:space-y-2">
          <div className="flex w-full flex-col">
            <GithubPersonal />
            <GitHub />
          </div>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <Analytics />
            <Twitter />
          </div>
        </div>
      </div>
    </>
  )
}
