import prisma from 'lib/prisma'
import Guestbook from '@/components/Guestbook'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function GuestbookPage({ fallbackData }) {
  return (
    <>
      <PageSEO
        title={`Guestbook - ${siteMetadata.author}`}
        description="Guestbook for my future visitors"
      />
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
        {/* <h1 className="mb-4 text-3xl font-bold 
      tracking-tight text-black dark:text-white md:text-5xl">
        Guestbook
      </h1>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        Leave a comment below. It could be anything – appreciation, information, wisdom, or even
        humor. Surprise me!
      </p> */}
        <div className="space-y-2 pt-6 pb-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Guestbook
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            An artifact of the 90's webs. Feel free to write anything!
          </p>
        </div>
        <Guestbook fallbackData={fallbackData} />
      </div>
    </>
  )
}
export async function getStaticProps() {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      updated_at: 'desc',
    },
  })

  const fallbackData = entries.map((entry) => ({
    id: entry.id.toString(),
    body: entry.body,
    created_by: entry.created_by.toString(),
    updated_at: entry.updated_at.toString(),
  }))

  return {
    props: {
      fallbackData,
    },
    revalidate: 60,
  }
}
