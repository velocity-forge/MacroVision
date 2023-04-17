import { ComponentMeta, ComponentStory } from '@storybook/react';
import { _WYSIWYG as Wysiwyg } from '../../03-components/Wysiwyg/Wysiwyg.stories';
import Page from './Page';

const settings: ComponentMeta<typeof Page> = {
  title: 'Templates/Page',
  component: Page,
};

const Template: ComponentStory<typeof Page> = args => <Page {...args} />;

const _Page = Template.bind({});
_Page.args = {
  title: 'Page Title',
  children: <Wysiwyg {...Wysiwyg.args} />,
};

export default settings;
export { _Page };
