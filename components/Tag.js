import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mt-2 mr-3 text-sm font-medium uppercase text-primary-500 hover:text-blue-600 dark:text-primary-color-dark-500 dark:hover:text-yellow-300">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
