import '@/css/tailwind.css'
import '@/css/prism.css'
import '@/css/extra.css'
import 'katex/dist/katex.css'
import '@fontsource/inter/variable-full.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import ProgressBar from 'react-scroll-progress-bar'
import ScrollTop from '@/components/ScrollTop'
import { SessionProvider } from 'next-auth/react'
import { Provider } from '@lyket/react'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

NProgress.configure({ showSpinner: false })

Router.onRouteChangeStart = () => {
  // console.log('onRouteChangeStart triggered');
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  // console.log('onRouteChangeComplete triggered');
  NProgress.done()
}

Router.onRouteChangeError = () => {
  // console.log('onRouteChangeError triggered');
  NProgress.done()
}

const defaultTheme = {
  colors: {
    primary: '#71717a',
    secondary: '#ff00c3',
    text: '#fff',
    highlight: '#ff00c3',
    icon: '#fff',
    background: 'transparent',
  },
  fonts: {
    body: 'inherit',
  },
}

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider apiKey="pt_7c8b6840f5ba39cd3b2b471cd8efc2" theme={defaultTheme}>
        <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
          <ProgressBar bgcolor="#DE1D8D" />
          <ScrollTop />
          <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
          </Head>
          {isDevelopment && isSocket && <ClientReload />}
          <Analytics />
          <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  )
}
