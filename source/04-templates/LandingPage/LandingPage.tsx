import Head from 'next/head';
import { ReactNode } from 'react';
import { MAIN_ID } from '../../00-config/constants';
import Main from '../../02-layouts/Main/Main';
import PageTitle from '../../03-components/PageTitle/PageTitle';

interface PageProps {
  mainId?: string;
  title: string;
  hidePageTitle?: boolean;
  description?: string;
  children?: ReactNode;
}

function LandingPage({
  mainId = MAIN_ID,
  title,
  hidePageTitle,
  description,
  children,
}: PageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <Main id={mainId}>
        {!hidePageTitle && title && <PageTitle pageTitle={title} />}
        {children}
      </Main>
    </>
  );
}

export default LandingPage;
