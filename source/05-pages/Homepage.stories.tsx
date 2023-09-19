import { Meta, StoryObj } from '@storybook/react';
import Grid from '../02-layouts/Grid/Grid';
import Section from '../02-layouts/Section/Section';
import Card, { CardProps } from '../03-components/Card/Card';
import { Default as CardStory } from '../03-components/Card/Card.stories';
import HeroBgImage, {
  HeroBgImageProps,
} from '../03-components/HeroBgImage/HeroBgImage';
import { Default as HeroStory } from '../03-components/HeroBgImage/HeroBgImage.stories';
import LandingPage from '../04-templates/LandingPage/LandingPage';
import PageWrapper from './page-wrappers/default';

interface HomepageStoryArgs {
  card: Partial<CardProps>;
  hero: Partial<HeroBgImageProps>;
}

const settings: Meta<HomepageStoryArgs> = {
  title: 'Pages/Homepage',
};

const Homepage: StoryObj<HomepageStoryArgs> = {
  render: args => (
    <PageWrapper>
      <LandingPage title="Homepage" hidePageTitle={true}>
        <Section>
          <HeroBgImage {...args.hero} />
        </Section>
        <Section title="You Don’t Vote For Kings">
          <Grid numCols={2}>
            <Card
              {...args.card}
              title="It’s Only a Model"
              media={
                <img
                  src="https://picsum.photos/800/600?image=1069"
                  alt="Orange jellyfish swimming in blue water"
                />
              }
            />
            <Card
              {...args.card}
              title="Let Us Ride to Camelot"
              media={
                <img
                  src="https://picsum.photos/800/600?image=1025"
                  alt="A doggo wrapped in a blanket"
                />
              }
            >
              <p>
                Well, we did do the nose. I don’t want to talk to you no more,
                you empty-headed animal food trough water!
              </p>
            </Card>
            <Card
              {...args.card}
              title="What a Strange Person"
              media={
                <img
                  src="https://picsum.photos/800/600?image=1040"
                  alt="Castle against a verdant landscape"
                />
              }
            />
            <Card
              {...args.card}
              title="The Knights Who Say Ni"
              media={
                <img
                  src="https://picsum.photos/800/600?image=870"
                  alt="Close-up of a lighthouse against a night sky"
                />
              }
            />
          </Grid>
        </Section>
      </LandingPage>
    </PageWrapper>
  ),
};
Homepage.args = {
  hero: HeroStory.args,
  card: CardStory.args,
};

export default settings;
export { Homepage };
