import { ComponentMeta, ComponentStory } from '@storybook/react';
import ReadMoreLink from './ReadMoreLink';

const settings = {
  title: 'Components/Read More Link',
  component: ReadMoreLink,
} as ComponentMeta<typeof ReadMoreLink>;

const Template: ComponentStory<typeof ReadMoreLink> = args => (
  <ReadMoreLink {...args} />
);

const _ReadMoreLink = Template.bind({});
_ReadMoreLink.args = {
  title: 'Title',
  url: '#0',
  hideDescription: false,
  modifierClasses: '',
};

export default settings;
export { _ReadMoreLink };
