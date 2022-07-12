import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getCurrentlyReading } from '@/lib/goodreads'
import fetcher from 'lib/fetcher'
import useSWR from 'swr'

export async function getStaticProps() {
  const currentlyReading = await getCurrentlyReading({ limit: 1 })

  return { props: { currentlyReading } }
}

export default function Now(currentlyReading) {
  const { data } = useSWR('/api/now-playing', fetcher)
  let currentlyReadingData = currentlyReading['currentlyReading']

  var year = new Date().getFullYear()
  var month = new Date().getMonth()
  var date = new Date().getDate()
  var time = new Date().getTime()
  var hour = new Date().getHours()
  var minute = new Date().getMinutes()
  var second = new Date().getSeconds()

  var ParthBirthDate = '2000-04-16'
  var birthDate = new Date(ParthBirthDate)

  var ParthAge = year - birthDate.getFullYear()

  var ParthMonth = 0
  if (month >= birthDate.getMonth()) ParthMonth = month - birthDate.getMonth()
  else {
    ParthAge--
    ParthMonth = 12 + month - birthDate.getMonth()
  }

  var ParthDay = 0
  if (date >= birthDate.getDate()) ParthDay = date - birthDate.getDate()
  else {
    ParthMonth--
    ParthDay = 31 + date - birthDate.getDate()
    if (ParthMonth < 0) {
      ParthMonth = 11
      ParthAge--
    }
  }

  var age = {}
  age = {
    years: ParthAge,
    months: ParthMonth,
    days: ParthDay,
  }

  var ageString = ''
  if (age.years > 0 && age.months > 0 && age.days > 0)
    ageString = age.years + ' years, ' + age.months + ' months, and ' + age.days + ' days old.'
  else if (age.years == 0 && age.months == 0 && age.days > 0)
    ageString = 'Only ' + age.days + ' days old!'
  else if (age.years > 0 && age.months == 0 && age.days == 0)
    ageString = age.years + ' years old. Happy Birthday!!'
  else if (age.years > 0 && age.months > 0 && age.days == 0)
    ageString = age.years + ' years and ' + age.months + ' months old.'
  else if (age.years == 0 && age.months > 0 && age.days > 0)
    ageString = age.months + ' months and ' + age.days + ' days old.'
  else if (age.years > 0 && age.months == 0 && age.days > 0)
    ageString = age.years + ' years, and' + age.days + ' days old.'
  else if (age.years == 0 && age.months > 0 && age.days == 0)
    ageString = age.months + ' months old.'
  else ageString = "Welcome to Earth! <br> It's first day on Earth!"

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
          <div className=" mt-4 mb-8 text-xs text-neutral-700 dark:text-neutral-400">
            This page was automatically updated @ {date}-{month}-{year} {hour}:{minute}:{second}
          </div>
        </div>
        {/* Misc */}
        <div className="flex justify-between">
          <div className="mt-2 mb-10 w-1/4 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
            <span className="ml-2 font-semibold">Location:</span> <span>Ahmedabad</span>
            <br />
            <span className="ml-2 font-semibold">Weather:</span> <span>31°C, extreme rain</span>
          </div>

          <div className="mt-2 mb-10 w-2/5 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
            <span className="ml-2 font-semibold">Reading:</span>{' '}
            <a
              href={currentlyReadingData[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span>{currentlyReadingData[0].title}</span> by{' '}
              <span>{currentlyReadingData[0].author}</span>
            </a>
            <br />
            <span className="ml-2 font-semibold">Age:</span> <span>{ageString}</span>
          </div>

          <div className="mt-2 mb-10 w-1/4 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
            <span className="ml-2 font-semibold">Listening:</span>{' '}
            <span>
              {data?.songUrl ? (
                <a
                  href={data.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <span>{data.title}</span>
                </a>
              ) : (
                <span>Not Playing</span>
              )}
            </span>
            <br />
            <span className="ml-2 font-semibold">Drinking:</span> <span>Mango Milkshake</span>
          </div>
        </div>
        {/* Work */}
        <div className="pb-4">
          <p>
            I work as a Data Engineer at{' '}
            <Link
              href={'https://www.accenture.com/'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
            >
              Accenture{' '}
            </Link>
          </p>
          <br />
          <p>
            I work on building pipelines and automating the entire process using Scala and Gcloud.
          </p>
          <br />
          <p>
            I have been trying to shift my field from Data Engineering to Data Science. I have been
            constantly applying for the same as well.
          </p>
          <br />
          <p>
            My location preference is Bangalore but I am open to shift to another place for a better
            oppurtnity.
          </p>
          <br />
          <p>
            I'm always trying to learn more, and at the moment I'm trying to follow this{' '}
            <Link
              href={
                'https://www.youtube.com/watch?v=_u-PaJCpwiU&list=PLu0W_9lII9ai6fAMHp-acBmJONT7Y4BSG'
              }
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
            >
              Machine Learning tutorial
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
          <p>
            I am also going to start applying for Masters in Data Science in August 2022 for intake
            of Fall 2023. I hope to get a good university near the West Coast. I'll update this page
            after I get my admits.
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
