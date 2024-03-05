import { JSX, PropsWithChildren } from 'react';
import '../source/00-config/index.css';
import '../source/01-global/index.css';
import SourceSansFontStyle from '../source/01-global/fonts/source-sans';
import Skiplink from '../source/03-components/Skiplink/Skiplink';
import SiteContainer from '../source/02-layouts/SiteContainer/SiteContainer';
import Header from '../source/02-layouts/Header/Header';
import SiteName from '../source/03-components/SiteName/SiteName';
import ResponsiveMenu from '../source/03-components/Menu/ResponsiveMenu/ResponsiveMenu';
import Footer from '../source/02-layouts/Footer/Footer';
import Menu from '../source/03-components/Menu/Menu';
import footerStyles from '../source/03-components/Menu/menu-footer.module.css';
import BackToTop from '../source/03-components/BackToTop/BackToTop';
import '../source/06-utility/index.css';

function RootLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <html lang="en">
      <body id="top">
        <SourceSansFontStyle />
        <Skiplink />
        <SiteContainer>
          <Header>
            <SiteName siteName="NextJS Starter" />
            <ResponsiveMenu
              items={[
                {
                  title: 'Home',
                  url: '/',
                },
                {
                  title: 'About',
                  url: '/about',
                },
              ]}
            />
          </Header>
          {/* Breadcrumb */}
          {children}
          <Footer>
            <Menu
              items={[
                {
                  title: 'Home',
                  url: '/',
                },
                {
                  title: 'About',
                  url: '/about',
                },
              ]}
              modifierClasses={footerStyles.menu}
              itemClasses={footerStyles.item}
            />
          </Footer>
        </SiteContainer>
        <BackToTop text="Back to Top" topElement="top" />
      </body>
    </html>
  );
}

export default RootLayout;
