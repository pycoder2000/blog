import siteMetadata from '@/data/siteMetadata'
import ContactLink from '@/components/ContactLink'
import { PageSEO } from '@/components/SEO'

const Contact = () => {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="All my contacts" />
      <div className="mx-auto max-w-3xl overflow-hidden">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Contact
        </h1>
        <div className="pt-10 pb-8">
          <ul className="font-semi-bold flex flex-col space-y-4">
            <ContactLink href="mailto:henok@hshiferaw.com" title="E-mail" icon="henok" />
            <ContactLink href="https://github.com/hshiferaw" title="github" icon="hshiferaw" />
            <ContactLink
              href="https://twitter.com/meaty_pirate"
              title="twitter"
              icon="meaty_pirate"
            />
            <ContactLink
              href="https://www.linkedin.com/in/hshiferaw/"
              title="linkedin"
              icon="henok"
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact
