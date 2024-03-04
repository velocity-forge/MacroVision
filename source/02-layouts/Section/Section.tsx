import clsx from 'clsx';
import { ConstrainComponent } from 'gesso';
import { ElementType, ReactNode } from 'react';
import Constrain from '../Constrain/Constrain';
import styles from './section.module.css';

interface SectionProps extends ConstrainComponent {
  children?: ReactNode;
  title?: string;
  titleElement?: ElementType;
}

function Section({
  children,
  title,
  titleElement: TitleElement = 'h2',
  modifierClasses,
  hasConstrain = true,
  constrainClasses,
}: SectionProps): JSX.Element {
  return (
    <section className={clsx(styles.section, modifierClasses)}>
      <Constrain isHidden={!hasConstrain} modifierClasses={constrainClasses}>
        {title && <TitleElement className={styles.title}>{title}</TitleElement>}
        <div className={styles.content}>{children}</div>
      </Constrain>
    </section>
  );
}

export default Section;
