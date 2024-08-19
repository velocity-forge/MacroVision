import { Meta, StoryObj } from '@storybook/react';
import { withGlobalWrapper } from '../../../.storybook/decorators';
import styles from './text-styles.module.css';

const TextStylesComponent = () => {
  return (
    <>
      {Object.entries(styles).map(([name, style]) => (
        <div key={name} style={{ marginBottom: '3rem' }}>
          <div style={{ textTransform: 'uppercase' }}>{name}</div>
          <div className={style}>
            Alice was beginning to get very tired of sitting by her sister on
            the bank, and of having nothing to do: once or twice she had peeped
            into the book her sister was reading, but it had no pictures or
            conversations in it, ‘and what is the use of a book,’ thought Alice
            ‘without pictures or conversations?’
          </div>
        </div>
      ))}
    </>
  );
};

const meta: Meta<typeof TextStylesComponent> = {
  title: 'Global/Typography/Text Styles',
  component: TextStylesComponent,
  decorators: [withGlobalWrapper],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const TextStyles: StoryObj<typeof TextStylesComponent> = {};

export default meta;
export { TextStyles };
