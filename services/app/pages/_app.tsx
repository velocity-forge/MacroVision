import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../source/00-config/index.css';
import '../source/01-global/index.css';
import '../source/02-layouts/constrain/constrain.css';
import Footer from '../source/02-layouts/Footer/Footer';
import Main from '../source/02-layouts/Main/Main';
import SiteContainer from '../source/02-layouts/SiteContainer/SiteContainer';
import BackToTop from '../source/03-components/BackToTop/BackToTop';
import addBasePath from '../source/06-utility/addBasePath';
import '../source/06-utility/index.css';

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
      <BackToTop text="Back to Top" topElement="top" />
    </>
  );
}
export default MyApp;
