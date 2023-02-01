import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "@fontsource/barlow-semi-condensed"

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

import Layout from './components/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}