// import Link from '@/components/Link'
import Analytics from 'components/metrics/Analytics'
import Twitter from '@/components/metrics/Twitter'
import GithubPersonal from '@/components/metrics/GithubPersonal'
import GitHub from '@/components/metrics/Github'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import TopTracks from '@/components/TopTracks'
import NowPlaying from '@/components/NowPlaying'

export default function Stats() {
  return (
    <>
      <PageSEO
        title={`Stats - ${siteMetadata.author}`}
        description="Statistics about my blog, Github, Twitter and more"
      />
      <div className="mx-auto max-w-2xl overflow-hidden">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Stats
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            I use this dashboard to track various metrics across platforms like Spotify, Twitter,
            GitHub, and more.
          </p>
        </div>
        <div className="pt-2">
          <div className="flex w-full flex-col">
            <GithubPersonal />
            <GitHub />
          </div>
          <div className="grid w-full grid-cols-1 gap-4 py-2  sm:grid-cols-2">
            <Twitter type="followers" />
            <Twitter type="following" />
          </div>
          <div className="grid w-full grid-cols-1 gap-4 py-2 sm:grid-cols-2">
            <Twitter type="total_tweets" />
            <Analytics />
          </div>
        </div>
        <h2 className="mb-4 mt-16 text-3xl font-bold tracking-tight text-black dark:text-white">
          My <span className="text-green-500">Spotify</span> Top Songs
        </h2>
        <p className="text-md mb-4 text-gray-600 dark:text-gray-400">
          Curious what I'm currently jamming to? Here's my top tracks on Spotify updated daily.
        </p>
        <div>
          <NowPlaying />
        </div>
        <TopTracks />
        <div className="flex flex-col pl-4 pt-10">
          <p className="text-md text-gray-600 dark:text-gray-400">
            Do you know a good song I should listen to?
          </p>
          <a
            className="text-md mt-4 rounded-full border px-8 py-2 text-center font-normal text-gray-800 transition-colors hover:border-green-600 hover:bg-green-600 hover:text-white dark:text-gray-200"
            href="https://twitter.com/messages/compose?recipient_id=4302974298&text=Hey Parth, you should listen to:"
            data-screen-name="@lone_Musk"
            target="_blank"
            rel="noreferrer noopener"
          >
            Parth you should listen to...
          </a>
        </div>
      </div>
    </>
  )
}
