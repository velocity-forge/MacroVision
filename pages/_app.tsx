import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import BaseStyles from '../source/base/BaseStyles'
import { theme } from '../source/config/theme'
import addBasePath from '../source/helpers/addBasePath';
import SiteContainer from '../source/layouts/SiteContainer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles />
      <Head>
        <title>F1 Next.js Starter App</title>
        <meta name="description" content="Next app using TypeScript and Emotion" />
        <link rel="icon" href={addBasePath('/favicon.ico')} />
      </Head>
      <SiteContainer>
        <Component {...pageProps} />
      </SiteContainer>
    </ThemeProvider>
  );
}
export default MyApp
