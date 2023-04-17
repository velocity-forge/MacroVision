import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useId } from 'react';
import '../source/00-config/index.css';
import '../source/01-global/index.css';
import Footer from '../source/02-layouts/Footer/Footer';
import Header from '../source/02-layouts/Header/Header';
import SiteContainer from '../source/02-layouts/SiteContainer/SiteContainer';
import BackToTop from '../source/03-components/BackToTop/BackToTop';
import ResponsiveMenu from '../source/03-components/Menu/ResponsiveMenu/ResponsiveMenu';
import SiteName from '../source/03-components/SiteName/SiteName';
import Skiplink from '../source/03-components/Skiplink/Skiplink';
import addBasePath from '../source/06-utility/addBasePath';
import '../source/06-utility/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  const mainId = useId();

  return (
    <>
      <Head>
        <link rel="icon" href={addBasePath('/favicon.ico')} />
      </Head>
      <Skiplink id={mainId} />
      <SiteContainer>
        <Header>
          <SiteName siteName="NextJS Starter" />
          <ResponsiveMenu
            items={[
              {
                title: 'Home',
                url: '/',
              },
            ]}
          />
        </Header>
        {/* Breadcrumb */}
        <Component mainId={mainId} {...pageProps} />
        <Footer>[FOOTER CONTENT]</Footer>
      </SiteContainer>
      <BackToTop text="Back to Top" topElement="top" />
    </>
  );
}
export default MyApp;
