import { ComponentMeta, ComponentStory } from '@storybook/react';
import styles from './text-styles.module.css';

const TextStyles = () => {
  return (
    <>
      {Object.entries(styles).map(([name, style]) => (
        <div key={name} style={{ marginBottom: '3rem' }}>
          <div style={{ textTransform: 'uppercase' }}>{name}</div>
          <div className={style as string}>
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

const settings = {
  title: 'Global/Typography/Text Styles',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as ComponentMeta<typeof TextStyles>;

const Template: ComponentStory<typeof TextStyles> = () => <TextStyles />;
const _TextStyles = Template.bind({});

export default settings;
export { _TextStyles };
