import Constrain from '../source/02-layouts/Constrain/Constrain';

const withGlobalWrapper = Component => (
  <Constrain modifierClasses="u-spacing-block-4">
    <Component />
  </Constrain>
);

export { withGlobalWrapper };
