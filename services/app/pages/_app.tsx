import type { AppProps } from 'next/app';
import Head from 'next/head';
import BaseStyles from '../source/base/BaseStyles';
import Footer from '../source/components/Footer';
import addBasePath from '../source/helpers/addBasePath';
import SiteContainer from '../source/layouts/SiteContainer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BaseStyles />
      <Head>
        <link rel="icon" href={addBasePath('/favicon.ico')} />
      </Head>
      <SiteContainer>
        <Component {...pageProps} />
        <Footer />
      </SiteContainer>
    </>
  );
}
export default MyApp;
