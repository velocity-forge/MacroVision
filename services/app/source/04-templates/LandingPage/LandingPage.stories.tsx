import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { WYSIWYG } from '../../03-components/Wysiwyg/Wysiwyg.stories';
import LandingPageTemplate from './LandingPage';

const meta: Meta<typeof LandingPageTemplate> = {
  title: 'Templates/Landing Page',
  component: LandingPageTemplate,
};

const LandingPage: StoryObj<typeof LandingPageTemplate> = {
  render: args => (
    <LandingPageTemplate {...args}>
      {WYSIWYG.render && <WYSIWYG.render {...WYSIWYG.args} />}
    </LandingPageTemplate>
  ),
  args: {
    title: 'Landing Page Title',
  },
};

export default meta;
export { LandingPage };
