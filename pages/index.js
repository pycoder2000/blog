import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { RoughNotation } from 'react-rough-notation'

import NewsletterForm from '@/components/NewsletterForm'
import Image from '@/components/Image'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row">
          <div className="pt-6">
            <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hi, I am{' '}
              <span className="text-primary-color dark:text-primary-color-dark">Parth</span>
            </h1>
            <h2 className="prose text-lg text-gray-600 dark:text-gray-300">
              {`Welcome to ${siteMetadata.description}. I am a Data Engineer who is passionate about Data Science and Automation. In my free time, I like developing `}
              <Link href="/projects">side projects</Link>
              {' and '}
              <Link href="/blog">blogging</Link>
              {' about them.'}
            </h2>
            <p className="pt-3 text-lg leading-7 text-slate-600 dark:text-slate-300">
              This is my place for{' '}
              <RoughNotation
                type="box"
                show={true}
                color="cyan"
                animationDelay={800}
                animationDuration={1200}
              >
                thoughts, reflections & everything&nbsp;
              </RoughNotation>
              in between. Have a good read!
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="my-2 flex flex-col items-center space-x-2 rounded-full border-2 border-gray-200 border-opacity-60 pt-8 hover:border-primary-600 dark:border-gray-800 dark:hover:border-primary-400">
              <Image
                src={siteMetadata.image}
                alt="avatar"
                width="250px"
                height="250px"
                className="h-48 w-48 rounded-full"
              />
            </div>
          </div>
        </div>
        <h2 className="flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
          Latest
        </h2>
        <hr className="border-gray-200 dark:border-gray-700" />
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 group-hover:text-primary-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="pb-3 text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="mr-3 rounded-lg border border-primary-500 py-1 px-3 text-sm font-medium uppercase text-primary-500 transition duration-500 ease-in-out hover:bg-primary-500 hover:text-gray-100 group-hover:bg-primary-500 group-hover:text-gray-100 dark:group-hover:text-gray-900"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
