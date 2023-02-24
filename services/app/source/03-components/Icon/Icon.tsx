import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { lazy, Suspense } from 'react';
import styles from './icon.module.css';

interface IconProps extends GessoComponent {
  isHidden: boolean;
  label?: string;
  iconName: string;
}

function Icon({
  iconName,
  label,
  isHidden = !label,
  modifierClasses,
}: IconProps): JSX.Element {
  const IconSvg = lazy(() => import(`./icons/${iconName}.svg`));
  return (
    <Suspense fallback={<svg className={clsx(styles.icon, modifierClasses)} />}>
      <IconSvg
        title={label}
        aria-hidden={isHidden}
        role={isHidden ? undefined : 'img'}
        className={clsx(styles.icon, modifierClasses)}
      />
    </Suspense>
  );
}

export default Icon;
