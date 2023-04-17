import Head from 'next/head';
import { ReactNode } from 'react';
import Main from '../../02-layouts/Main/Main';
import Article from '../../03-components/Article/Article';
import { _Breadcrumb as Breadcrumb } from '../../03-components/Breadcrumb/Breadcrumb.stories';

interface PageProps {
  mainId?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

function Page({
  title,
  description,
  children,
  mainId,
}: PageProps): JSX.Element {
  return (
    <>
      <Breadcrumb breadcrumb={Breadcrumb.args?.breadcrumb || []} />
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
