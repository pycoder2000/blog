const siteMetadata = {
  title: 'Blog | Henok Shiferaw',
  author: 'Henok Shiferaw',
  headerTitle: 'Mere Musings',
  description: 'My personal blog where I share my musings',
  snippets: 'Reuseable code snippets collected by Henok',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://hshiferaw.com',
  siteRepo: 'https://github.com/hshiferaw/henoks.xyz',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avator.jpeg',
  socialBanner: '/static/images/twitter1-card.png',
  email: 'henok@hshiferaw.com',
  github: 'https://github.com/hshiferaw',
  twitter: 'https://twitter.com/meaty_pirate',
  linkedin: 'https://www.linkedin.com/in/hshiferaw/',
  website: 'https://hshiferaw.com',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-MB6NWDGBDE', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailoctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'meaty_pirate',
  },
}

module.exports = siteMetadata
