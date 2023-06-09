import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'
import { ReactElement, ReactNode } from 'react'

import Layout from 'components/layouts'

import 'styles/globals.scss'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    (() => (
      <>
        <Head>
          <title>bookcycle home</title>
          <meta name='description' content='중고책 사고 팔기 서비스' />
        </Head>
        <Layout>
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
        </Layout>
      </>
    ))

  return getLayout(<Component {...pageProps} />)
}
