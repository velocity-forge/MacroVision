import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import styles from './video.module.css';

interface VideoProps extends GessoComponent {
  iframeSrc?: string;
  iframeTitle?: string;
}

function Video({
  iframeSrc,
  iframeTitle,
  modifierClasses,
}: VideoProps): JSX.Element {
  return (
    <div className={clsx(styles.video, modifierClasses)}>
      <iframe src={iframeSrc} title={iframeTitle} allowFullScreen={true} />
    </div>
  );
}

export default Video;
