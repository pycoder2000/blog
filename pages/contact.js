import siteMetadata from '@/data/siteMetadata'
import ContactLink from '@/components/ContactLink'
import { PageSEO } from '@/components/SEO'

const Contact = () => {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="All my contacts" />
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Contact
        </h1>
        <div className="pt-10 pb-8">
          <ul className="font-semi-bold flex flex-col md:space-y-4">
            <ContactLink
              href="mailto:desaiparth2000@gmail.com"
              title="gmail"
              icon="desaiparth2000"
            />
            <ContactLink href="https://github.com/pycoder2000" title="github" icon="pycoder2000" />
            <ContactLink href="https://twitter.com/lone_Musk" title="twitter" icon="lone_Musk" />
            <ContactLink
              href="https://www.linkedin.com/in/parth-desai-2bb1b0160/"
              title="linkedin"
              icon="parthdesai"
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact
