import { JSX, ReactNode } from 'react';
import { MAIN_ID } from '../../00-config/constants';
import Main from '../../02-layouts/Main/Main';
import Article from '../../03-components/Article/Article';

interface PageProps {
  mainId?: string;
  title: string;
  children?: ReactNode;
  preContent?: ReactNode;
}

function Page({
  title,
  children,
  mainId = MAIN_ID,
  preContent,
}: PageProps): JSX.Element {
  return (
    <>
      {preContent}
      <Main id={mainId}>
        <Article title={title} showFooter={false}>
          {children}
        </Article>
      </Main>
    </>
  );
}

export default Page;
export type { PageProps };
