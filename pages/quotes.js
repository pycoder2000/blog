import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { quotes } from '@/data/quotesData'
import { motion } from 'framer-motion'

export default function Quotes() {
  return (
    <>
      <PageSEO title={`Quotes - ${siteMetadata.author}`} description="Some of my favorite quotes" />
      <div className="mx-auto max-w-2xl">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Quotes
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            Some of my favorite quotes
          </p>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.9 }}
          variants={{
            hidden: {
              opacity: 0.5,
              y: 10,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          className="flex flex-col gap-y-14"
        >
          {quotes.map((item) => (
            <li key={item.quote} className="flex cursor-default flex-col gap-y-2">
              <blockquote className="border-l-4 border-gray-400 py-3 hover:border-primary-500 dark:border-gray-600 dark:hover:border-primary-500">
                <p className="px-4  font-serif text-neutral-800 dark:text-neutral-200">
                  {item.quote}
                </p>
              </blockquote>
              <p className="ml-auto font-serif text-sm text-neutral-700 dark:text-neutral-300">
                - {item.author}
              </p>
            </li>
          ))}
        </motion.div>
      </div>
    </>
  )
}
