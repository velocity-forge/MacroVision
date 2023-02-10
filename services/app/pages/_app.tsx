import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../source/00-config/vars.css';
import BaseStyles from '../source/01-global/BaseStyles';
import SiteContainer from '../source/02-layouts/SiteContainer';
import Footer from '../source/03-components/Footer';
import addBasePath from '../source/06-utility/addBasePath';

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
