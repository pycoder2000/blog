import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import Experience from '@/components/Experience'
import experienceData from '@/data/experienceData'
import { RoughNotation } from 'react-rough-notation'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
    text1,
    text2,
    text3,
  } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 xl:sticky xl:top-0">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} size="6" />
              <SocialIcon kind="github" href={github} size="6" />
              <SocialIcon kind="linkedin" href={linkedin} size="6" />
              <SocialIcon kind="twitter" href={twitter} size="6" />
              <SocialIcon kind="website" href={`https://parthdesai.vercel.app`} size="6" />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <p>
              <RoughNotation
                type="bracket"
                brackets={['left', 'right']}
                show={true}
                color="#FF0000"
                animationDelay={300}
                animationDuration={3000}
              >
                {text1} Currently, I am focused on building data pipelines and automating them at{' '}
                <Link
                  href={'/now'}
                  className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                >
                  Accenture
                </Link>
                .
              </RoughNotation>
            </p>
            <br />
            <p>
              I am always looking to learn new things. I am currently working on a few projects
              related to
              <RoughNotation
                animationDelay="1000"
                animationDuration="3000"
                type="highlight"
                color="#0ea4e9"
                strokeWidth="3"
                show={true}
              >
                <span className="text-black dark:text-white">
                  Natural Language Processing and Machine Learning.
                </span>
              </RoughNotation>
              At the same time I am{' '}
              <RoughNotation
                type="underline"
                show={true}
                color="#FBCFE8"
                animationDelay={1500}
                animationDuration={3000}
                multiline={true}
              >
                actively on the lookout for remote internships which I can pursue in field of Data
                Science.
              </RoughNotation>
            </p>
            <br />
            <p>
              I am a strong advocate for open source and I am always interested in working on new
              projects with new people. Feel free to reach out if you have anything to talk about,
              you can reach me on{' '}
              <RoughNotation
                type="box"
                show={true}
                color="#FF5733"
                animationDelay={200}
                animationDuration={3000}
              >
                <Link
                  href={'mailto:desaiparth2000@gmail.com'}
                  className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                >
                  email{' '}
                </Link>
                or{' '}
                <Link
                  href={'https://api.whatsapp.com/send?phone=916358190818&text=hi'}
                  className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                >
                  Whatsapp{' '}
                </Link>
              </RoughNotation>
            </p>
            <br />
            <p>
              <Link
                href={'/uses'}
                className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-800"
              >
                Here{' '}
              </Link>
              you can see what I use on daily basis.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Experience
            </h1>
          </div>
          <div className="max-w-none pt-8 pb-8 xl:col-span-2">
            {experienceData.map((d) => (
              <Experience
                key={d.company}
                title={d.title}
                company={d.company}
                location={d.location}
                range={d.range}
                url={d.url}
                text1={d.text1}
                text2={d.text2}
                text3={d.text3}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
