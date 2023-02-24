import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../source/00-config/index.css';
import '../source/01-global/index.css';
import Footer from '../source/02-layouts/Footer/Footer';
import Main from '../source/02-layouts/Main/Main';
import SiteContainer from '../source/02-layouts/SiteContainer/SiteContainer';
import addBasePath from '../source/06-utility/addBasePath';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href={addBasePath('/favicon.ico')} />
      </Head>
      <SiteContainer>
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer>[FOOTER CONTENT]</Footer>
      </SiteContainer>
    </>
  );
}
export default MyApp;
