import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Timeline from '@/components/Timeline'
import { motion } from 'framer-motion'

export default function Journey() {
  return (
    <>
      <PageSEO title={`Journey - ${siteMetadata.author}`} description="My journey" />
      <div className="mx-auto max-w-2xl">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Journey
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            Trying not to compare myself to others. Taking baby steps everyday.
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
        >
          <Timeline />
        </motion.div>
      </div>
    </>
  )
}
