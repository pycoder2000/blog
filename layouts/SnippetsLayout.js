import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'

export default function SnippetsLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search snippets"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search snippets"
              className="block w-full rounded-md border border-gray-400 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <Link
                key={slug}
                href={`/snippets/${slug}`}
                className="bg-day·dark:bg-night·group group relative z-50 flex transform cursor-pointer flex-wrap rounded-md border border-gray-200 bg-opacity-50 p-px py-px transition duration-300 hover:scale-105 dark:border-gray-700 dark:bg-opacity-50"
              >
                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transform bg-primary-500 duration-300 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 h-full w-1 origin-bottom scale-y-0 transform bg-primary-500 duration-300 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 h-1 w-full origin-right scale-x-0 transform bg-primary-500 duration-300 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 h-full w-1 origin-top scale-y-0 transform bg-primary-500 duration-300 group-hover:scale-y-100" />
                <div className="bg-day dark:bg-night relative space-y-2 rounded-2xl p-4">
                  <article>
                    <div>
                      <h2 className="text-2xl font-bold leading-8 tracking-tight ">
                        <Link
                          href={`/snippets/${slug}`}
                          className="text-gray-900 transition  duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500"
                        >
                          {title}
                        </Link>
                      </h2>
                      <div className="prose prose-base max-w-none text-gray-500 dark:text-gray-400 sm:prose-lg">
                        {summary}
                      </div>

                      <div className="flex flex-wrap pt-2">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                  </article>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
