import CustomLink from '@/components/CustomLink'
import { AiFillStar } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'

const NowReading = ({ title, description, href, rating, showLink = true }) =>
  showLink ? (
    <CustomLink
      href={href}
      aria-label={`Link to ${title}`}
      className="md max-w-[34rem] p-2"
      showIcon={false}
    >
      <div className="h-full cursor-pointer overflow-hidden rounded-md border border-zinc-200 bg-zinc-200 hover:border-primary-500 dark:border-zinc-900 dark:bg-zinc-900 dark:hover:border-primary-500">
        <div className="p-6">
          <h4 className="mb-3 text-xl font-bold leading-8 tracking-tight text-black dark:text-white">
            {title}
            <FiExternalLink className="ml-1 -mt-0.5 inline-block h-5 w-5" />
          </h4>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
            {description} (Currently Reading)
          </p>
        </div>
      </div>
    </CustomLink>
  ) : (
    <div className="md max-w-[34rem] p-4">
      <div className="h-full overflow-hidden rounded-md border-2 border-solid border-gray-200 hover:border-primary-500 dark:border-gray-800 dark:hover:border-primary-500">
        <div className="p-6">
          <h4 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-black dark:text-white">
            {title}
          </h4>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
            (Coming soon) {description}
          </p>
        </div>
      </div>
    </div>
  )

export default NowReading
