import { Meta, StoryObj } from '@storybook/react';
import parse from 'html-react-parser';
import Constrain from '../../02-layouts/Constrain/Constrain';
import Grid from '../../02-layouts/Grid/Grid';
import CardComponent from './Card';
import styles from './card.module.css';
import cardArgs from './card.yml';

const meta: Meta<typeof CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  decorators: [
    Component => (
      <Constrain modifierClasses="u-spacing-block-4">
        <Component />
      </Constrain>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
    tags: {
      control: false,
    },
    media: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof CardComponent>;
const Default: Story = {
  args: {
    ...cardArgs,
    media: parse(cardArgs.media),
    children: parse(cardArgs.children),
  },
  decorators: [
    Component => (
      <Grid numCols={3}>
        <Component />
      </Grid>
    ),
  ],
};

const FeatureCard: Story = {
  args: {
    ...Default.args,
    modifierClasses: styles['card--feature'],
  },
};

export default meta;
export { Default, FeatureCard };
