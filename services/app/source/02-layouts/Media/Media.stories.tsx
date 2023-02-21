import { ComponentMeta, ComponentStory } from '@storybook/react';
import Media from './Media';
import styles from './media.module.css';

const settings = {
  title: 'Layouts/Media',
  component: Media,
} as ComponentMeta<typeof Media>;

const Template: ComponentStory<typeof Media> = args => <Media {...args} />;

const Default = Template.bind({});
Default.args = {
  media: (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="http://fpoimg.com/200x150?text=Media Image" alt="Media Image" />
  ),
  mediaContent: (
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
      necessitatibus fuga provident aut.
    </p>
  ),
};

const Column = Template.bind({});
Column.args = {
  ...Default.args,
  modifierClasses: styles['media--column'],
};

const Reversed = Template.bind({});
Reversed.args = {
  ...Default.args,
  modifierClasses: styles['media--reversed'],
};

export default settings;
export { Default, Column, Reversed };
