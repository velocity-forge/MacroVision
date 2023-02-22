import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { ReactNode } from 'react';

interface WysiwygProps extends GessoComponent {
  children?: ReactNode;
}

function Wysiwyg({ children, modifierClasses }: WysiwygProps): JSX.Element {
  return <div className={clsx(modifierClasses)}>{children}</div>;
}

export default Wysiwyg;
