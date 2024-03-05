import { ReactNode } from 'react';
import Footer from '../../02-layouts/Footer/Footer';
import Header from '../../02-layouts/Header/Header';
import SiteContainer from '../../02-layouts/SiteContainer/SiteContainer';
import BackToTop from '../../03-components/BackToTop/BackToTop';
import { FooterMenu } from '../../03-components/Menu/Menu.stories';
import { ResponsiveMenu } from '../../03-components/Menu/ResponsiveMenu/ResponsiveMenu.stories';
import { SiteName } from '../../03-components/SiteName/SiteName.stories';
import Skiplink from '../../03-components/Skiplink/Skiplink';

interface PageWrapperProps {
  children?: ReactNode;
}

function PageWrapper({ children }: PageWrapperProps): JSX.Element {
  return (
    <>
      <Skiplink />
      <SiteContainer>
        <Header>
          {SiteName.render && (
            <SiteName.render
              siteName={SiteName.args?.siteName || 'Site Name'}
              {...SiteName.args}
            />
          )}
          {ResponsiveMenu.render && (
            <ResponsiveMenu.render items={ResponsiveMenu.args?.items || []} />
          )}
        </Header>
        {children}
        <Footer>
          {FooterMenu.render && (
            <FooterMenu.render
              items={FooterMenu.args?.items || []}
              {...FooterMenu.args}
            />
          )}
        </Footer>
      </SiteContainer>
      <BackToTop text="Back to Top" topElement="top" />
    </>
  );
}

export default PageWrapper;
