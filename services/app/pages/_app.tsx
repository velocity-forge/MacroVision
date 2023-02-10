import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../source/00-config/vars.css';
import '../source/01-global/index.css';
import siteContainerStyles from '../source/02-layouts/site-container/site-container.module.css';
import Footer from '../source/03-components/Footer';
import addBasePath from '../source/06-utility/addBasePath';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href={addBasePath('/favicon.ico')} />
      </Head>
      <div className={siteContainerStyles['site-container']}>
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
export default MyApp;
