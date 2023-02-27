import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tag from './Tag';

const settings = {
  title: 'Components/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />;

const _Tag = Template.bind({});
_Tag.args = {
  title: 'Title',
  url: '#0',
  type: 'full',
  size: 'normal',
};

export default settings;
export { _Tag };
