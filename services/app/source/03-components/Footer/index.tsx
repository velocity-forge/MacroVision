import styles from './footer.module.css';

function Footer(): JSX.Element {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.inner}>
        <div>[FOOTER CONTENT]</div>
      </div>
    </footer>
  );
}

export default Footer;
