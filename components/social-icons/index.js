import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineGlobal,
} from 'react-icons/ai'

import { FiExternalLink } from 'react-icons/fi'
// Icons taken from: https://simpleicons.org/

const components = {
  mail: AiOutlineMail,
  github: AiOutlineGithub,
  facebook: AiOutlineFacebook,
  linkedin: AiOutlineLinkedin,
  twitter: AiOutlineTwitter,
  website: AiOutlineGlobal,
  external: FiExternalLink,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`text-gray-700 hover:text-primary-color-500 dark:text-gray-200 dark:hover:text-primary-color-dark-500 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
