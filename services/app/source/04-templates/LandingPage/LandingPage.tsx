import Head from 'next/head';
import { ReactNode } from 'react';
import Main from '../../02-layouts/Main/Main';

interface PageProps {
  mainId?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

function LandingPage({
  mainId,
  title,
  description,
  children,
}: PageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <Main id={mainId}>{children}</Main>
    </>
  );
}

export default LandingPage;
