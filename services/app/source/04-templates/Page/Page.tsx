import Head from 'next/head';
import { ReactNode } from 'react';
import { MAIN_ID } from '../../00-config/constants';
import Main from '../../02-layouts/Main/Main';
import Article from '../../03-components/Article/Article';

interface PageProps {
  mainId?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  preContent?: ReactNode;
}

function Page({
  title,
  description,
  children,
  mainId = MAIN_ID,
  preContent,
}: PageProps): JSX.Element {
  return (
    <>
      {preContent}
      <Main id={mainId}>
        <Article title={title} showFooter={false}>
          <Head>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
          </Head>
          {children}
        </Article>
      </Main>
    </>
  );
}

export default Page;
export type { PageProps };
