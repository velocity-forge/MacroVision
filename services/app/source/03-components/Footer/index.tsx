import styled from '@emotion/styled';
import styles from './footer.module.css';

// const FooterWrapper = styled('footer')`
//   ${VarNames.TextLink}: ${PALETTE.white};
//   ${VarNames.TextLinkHover}: ${PALETTE.white};
//   ${VarNames.TextLinkActive}: ${PALETTE.white};
//   ${VarNames.TextLinkVisited}: ${PALETTE.white};
//   background: var(${VarNames.UiAccentDark});
//   color: ${PALETTE.white};
//   padding: ${SPACING['2']} 0 ${SPACING['2']};
//
//   ${mediaMin(BREAKPOINT.tabletLg)} {
//     padding: ${SPACING['5']} 0 ${SPACING['7']};
//   }
// `;

const FooterInner = styled('div')`
  text-align: center;
`;

function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <FooterInner>
        <div>[FOOTER CONTENT]</div>
      </FooterInner>
    </footer>
  );
}

export default Footer;
