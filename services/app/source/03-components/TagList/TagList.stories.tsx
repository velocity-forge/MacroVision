import { ComponentMeta, ComponentStory } from '@storybook/react';
import TagList from './TagList';

const settings = {
  title: 'Components/TagList',
  component: TagList,
} as ComponentMeta<typeof TagList>;

const Template: ComponentStory<typeof TagList> = args => <TagList {...args} />;

const _TagList = Template.bind({});
_TagList.args = {
  items: [
    {
      url: '#0',
      title: 'Tag 1',
    },
    {
      url: '#0',
      title: 'Tag 2',
    },
    {
      url: '#0',
      title: 'Tag 3',
    },
    {
      url: '#0',
      title: 'Tag 4',
    },
  ],
  modifierClasses: '',
};

export default settings;
export { _TagList };
