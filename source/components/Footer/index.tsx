import styled from '@emotion/styled';
import { media, palette, spacing } from '../../config/theme';

const FooterWrapper = styled('footer')`
  background: ${palette('cyan', 'dark1')};
  color: ${palette('grayscale', 'white')};
  padding: ${spacing(2)} 0 ${spacing(2)};

  ${media('tabletLg')} {
    padding: ${spacing(5)} 0 ${spacing(7)};
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
