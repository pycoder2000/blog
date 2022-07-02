import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Now() {
  return (
    <>
      <PageSEO
        title={`Now - ${siteMetadata.author}`}
        description="What I'm working on now"
        url={siteMetadata.url}
      />
      <div>
        <div className="my-2">
          <h3>Where am I and what am I doing?</h3>
          <div className="mt-3 mb-4 text-sm">Last updated: 14 June 2022</div>
        </div>
        {/* Misc */}
        <div className="flex justify-between">
          <div className="mt-2 mb-10 w-1/4 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
            <span className="ml-2 font-semibold">Location:</span> <span>Reykjavík</span>
            <br />
            <span className="ml-2 font-semibold">Weather:</span> <span>9°C, mostly cloudy</span>
          </div>

          <div className="mt-2 mb-10 w-2/5 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
            <span className="ml-2 font-semibold">Reading:</span>{' '}
            <span>Tools & Weapons - Brad Smith</span>
            <br />
            <span className="ml-2 font-semibold">Podcast:</span>{' '}
            <span>Where it Happens: Ryan Hoover</span>
          </div>

          <div className="mt-2 mb-10 w-1/4 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
            <span className="ml-2 font-semibold">Eating:</span> <span>N/A</span>
            <br />
            <span className="ml-2 font-semibold">Drinking:</span> <span>Coffee</span>
          </div>
        </div>
        {/* Work */}
        <div className="pb-4">
          <span>
            I work as a software developer at{' '}
            <Link
              href={'https://maul.is'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
            >
              Maul{' '}
            </Link>
            <br />
          </span>
          <p>We deliver various and delicous lunch to workplaces in Reykjavík.</p>
          <br />
          <p>
            We at Maul strive to improve the quality of your lunch by offering courses from multiple
            restaurants and saving you from the constant "what should I have for lunch" conundrum.
          </p>
          <br />
          <p>
            At this moment I'm mostly using technology such as React, Tailwind, AWS lambda, S3, and
            more.
          </p>
          <br />
          <p>
            I'm always trying to learn more, and at the moment I'm doing execute program{' '}
            <Link
              href={'https://www.executeprogram.com/courses'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
            >
              TypeScript courses.
            </Link>
          </p>
        </div>
        <div className="justify-center text-center text-2xl font-medium text-gray-200 dark:text-gray-600">
          &#126;&#126;&#126;
        </div>

        {/* Personal life */}
        <div className="pt-6">
          <p>
            I've been slowly building this website, trying to share interesting things with anyone
            who wants to read it.{' '}
            <Link
              href={'https://www.swyx.io/learn-in-public'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
            >
              This
            </Link>{' '}
            article is a great reason to start your blog.
          </p>
          <br />
          <p>I recently started to quantify my life. Collect various data about my daily life.</p>
          <p>
            I published a short e-book about how to make LaTeX templates for your homework, aimed
            towards beginners. It's only availabe in Icelandic -&gt;{' '}
            <Link
              href={'https://einargudni.gumroad.com/l/ufidy'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
            >
              here
            </Link>
            . But I want to translate it to english as well.
          </p>
          <br />
          <p>
            I recently started to draft a post about my new Obsidian worklfow, it will be a good
            one!
          </p>
        </div>
        <div className="mt-3 text-sm">
          For more examples of folks with /now pages, check out{' '}
          <Link
            href={'https://nownownow.com/'}
            className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
          >
            nownownow.com
          </Link>
        </div>
      </div>
    </>
  )
}
