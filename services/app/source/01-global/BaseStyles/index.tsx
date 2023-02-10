import { Global } from '@emotion/react';
import createBaseStyles from './createBaseStyles';

const BaseStyles = () => <Global styles={createBaseStyles} />;

export default BaseStyles;
