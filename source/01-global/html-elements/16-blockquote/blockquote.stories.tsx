import { Meta, StoryObj } from '@storybook/react';
import Constrain from '../../../02-layouts/Constrain/Constrain';

const meta: Meta = {
  title: 'Global/HTML Elements/Blockquote',
  decorators: [
    Component => (
      <Constrain modifierClasses="u-spacing-block-4">
        <Component />
      </Constrain>
    ),
  ],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const Blockquote: StoryObj = {
  render: (): JSX.Element => {
    return (
      <>
        <blockquote>
          <p>
            A block quotation (also known as a long quotation or extract) is a
            quotation in a written document, that is set off from the main text
            as a paragraph, or block of text, and typically distinguished
            visually using indentation and a different typeface or smaller size
            quotation.
          </p>
          <cite>
            Jane Doe <em>President and CEO</em>
          </cite>
        </blockquote>
      </>
    );
  },
};

export default meta;
export { Blockquote };
