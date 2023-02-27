import { ComponentMeta, ComponentStory } from '@storybook/react';
import Grid from '../../02-layouts/Grid/Grid';
import Card from './Card';
import styles from './card.module.css';

const settings = {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;
const Template: ComponentStory<typeof Card> = args => (
  <Card {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
      accumsan augue. Morbi non laoreet lorem.
    </p>
  </Card>
);

const Default = Template.bind({});
Default.args = {
  title: 'Card title',
  url: '#0',
  footer: '',
  date: 'September 28, 2018',
  readMore: true,
  media: (
    <img
      src="https://picsum.photos/id/1015/800/600"
      alt="Placeholder card image"
    />
  ),
  tags: [
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
};
Default.decorators = [
  Story => (
    <Grid numCols={3}>
      <Story />
    </Grid>
  ),
];

const FeatureCard = Template.bind({});
FeatureCard.args = {
  ...Default.args,
  modifierClasses: styles['card--feature'],
};

export default settings;
export { Default, FeatureCard };
