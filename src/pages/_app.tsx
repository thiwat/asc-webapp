import '../styles/globals.css';
import _get from 'lodash/get'
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { getRGBColor } from '@/utils/color';
import { RecoilRoot } from 'recoil';
import { Prompt } from 'next/font/google'
import { setTranslate } from '@/utils/translate';
import { Toaster } from 'react-hot-toast';
import parse from 'html-react-parser'
import Layout from '@/components/layout';
import { useRouter } from 'next/router';

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const REQUIRE_AUTH = ['/profile', '/project']
const NOT_REQUIRE_AUTH = ['/login'];


const MyApp = ({ Component, pageProps }) => {

  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const siteSetting = useRef<any>({})

  useEffect(() => {
    initialData()
  }, [])

  const initialData = () => {
    if (pageProps.settings) {
      siteSetting.current = pageProps.settings
    }
    if (pageProps.translates) {
      setTranslate(pageProps.translates)
    }
    if (pageProps?.token && NOT_REQUIRE_AUTH.includes(router.pathname)) {
      return router.push('/').then(() => setTimeout(() => setLoading(false), 500))
    }
    if (!pageProps?.token && REQUIRE_AUTH.includes(router.pathname)) {
      return router.push('/login').then(() => setTimeout(() => setLoading(false), 500))
    }
    setLoading(false)
  }

  const _setInitialState = (data) => ({ set }) => { }

  const primaryColor = _get(pageProps, 'settings.site.primary_color')
    || _get(siteSetting.current, 'site.primary_color')
  const secondaryColor = _get(pageProps, 'settings.site.secondary_color')
    || _get(siteSetting.current, 'site.secondary_color')
  const headerScript = _get(pageProps, 'site.header_script')
    || _get(siteSetting.current, 'site.header_script')
    || ''
  const metaData = _get(pageProps, 'settings.site.meta_data')
    || _get(siteSetting.current, 'site.meta_data')
    || {}

  return (
    <>
      <Head>
        <title>{metaData?.meta_title || 'ASC'}</title>
        <style>{`
          :root {
            ${getRGBColor(primaryColor || '#134074', 'primary')}
            ${getRGBColor(secondaryColor || '#8DA9C4', 'secondary')}
            --font-prompt: ${prompt.style.fontFamily}
          }

          body {
            font-family: var(--font-prompt);
          }

        `}</style>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="shortcut icon" href="/images/logo.svg" />
        <meta name="description" content={metaData?.meta_description}></meta>
        <meta name="keywords" content={metaData?.meta_keywords} />
        <meta property="og:title" content={metaData?.['meta_title']} key="title" />
        <meta property="og:description" content={metaData?.['meta_description']}></meta>
        <meta property="og:image" content={'/images/logo.svg'}></meta>
        <meta name="twitter:image" content={'/images/logo.svg'}></meta>
        {parse(headerScript)}
      </Head>
      <RecoilRoot initializeState={_setInitialState(pageProps)}>
        {loading
          ? <div></div>
          :
          <Layout>
            <Component
              {...pageProps}
            />
            <Toaster />
          </Layout>
        }
      </RecoilRoot>
    </>
  )
}

MyApp.getInitialProps = async ({ ctx }) => {
  const pageProps = {}

  const isServer = typeof window === 'undefined'

  if (isServer) {

  }

  return { pageProps }
}


export default MyApp