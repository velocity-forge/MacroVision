import styled from '@emotion/styled';
import { BREAKPOINT, PALETTE, SPACING, mediaMin } from '../../config/theme';

const FooterWrapper = styled('footer')`
  background: ${PALETTE['ocean-blue']['dark-1']};
  color: ${PALETTE.white};
  padding: ${SPACING['2']} 0 ${SPACING['2']};

  ${mediaMin(BREAKPOINT.tabletLg)} {
    padding: ${SPACING['5']} 0 ${SPACING['7']};
  }
`;

const FooterInner = styled('div')`
  text-align: center;
`;

function Footer(): JSX.Element {
  return (
    <FooterWrapper>
      <FooterInner>
        <div>[FOOTER CONTENT]</div>
      </FooterInner>
    </FooterWrapper>
  );
}

export default Footer;
