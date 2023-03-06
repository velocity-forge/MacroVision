import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import Link from 'next/link';
import { ElementType, ReactNode } from 'react';
import Media from '../../02-layouts/Media/Media';
import styles from './image-teaser.module.css';

interface ImageTeaserProps extends GessoComponent {
  url?: string;
  title: string;
  image?: ReactNode;
  date?: string;
  summary?: ReactNode;
  titleElement?: ElementType;
}

function ImageTeaser({
  url,
  title,
  image,
  date,
  summary,
  titleElement: TitleElement = 'h2',
  modifierClasses,
}: ImageTeaserProps): JSX.Element {
  const teaserContent = (
    <>
      <TitleElement>
        {url ? <Link href={url}>{title}</Link> : title}
      </TitleElement>
      {date}
      {summary}
    </>
  );

  return (
    <div className={clsx(styles['image-teaser'], modifierClasses)}>
      <Media
        media={url ? <Link href={url}>{image}</Link> : image}
        mediaContent={teaserContent}
      />
    </div>
  );
}

export default ImageTeaser;
