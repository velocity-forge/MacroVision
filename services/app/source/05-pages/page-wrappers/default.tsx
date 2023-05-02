import React, { ReactNode, useId } from 'react';
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
  const mainId = useId();

  return (
    <>
      <Skiplink id={mainId} />
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
        {React.Children.map(children, el => {
          if (React.isValidElement(el)) {
            return React.cloneElement(el, { mainId });
          }
        })}
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
