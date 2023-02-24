import { ComponentMeta, ComponentStory } from '@storybook/react';

const Blockquote = (): JSX.Element => {
  return (
    <>
      <blockquote>
        <p>
          A block quotation (also known as a long quotation or extract) is a
          quotation in a written document, that is set off from the main text as
          a paragraph, or block of text, and typically distinguished visually
          using indentation and a different typeface or smaller size quotation.
        </p>
        <cite>
          Jane Doe <em>President and CEO</em>
        </cite>
      </blockquote>
    </>
  );
};

const settings = {
  title: 'Global/HTML Elements/Blockquote',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as ComponentMeta<typeof Blockquote>;

const Template: ComponentStory<typeof Blockquote> = () => <Blockquote />;

const _Blockquote = Template.bind({});

export default settings;
export { _Blockquote };
