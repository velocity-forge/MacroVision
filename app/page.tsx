import Image from 'next/image';
import heroPlaceholder from '../public/images/hero-placeholder.jpg';
import Section from '../source/02-layouts/Section/Section';
import HeroBgImage from '../source/03-components/HeroBgImage/HeroBgImage';
import Wysiwyg from '../source/03-components/Wysiwyg/Wysiwyg';
import LandingPage from '../source/04-templates/LandingPage/LandingPage';

function Home() {
  const title = 'Forum One Next.js Starter App';
  return (
    <LandingPage
      title={title}
      description="Next app using TypeScript and PostCSS"
    >
      <Section>
        <HeroBgImage
          hasOverlay={true}
          title={title}
          heroImage={
            <Image
              src={heroPlaceholder}
              alt="Alt text goes here"
              width={1600}
              height={800}
            />
          }
        />
      </Section>
      <Section>
        <Wysiwyg>
          <p>
            Quibusdam reprehenderit vestibulum magnam congue alias, purus
            quisque, harum. Faucibus dolorum malesuada velit quae, faucibus.
            Laudantium, beatae doloremque, sociis sagittis primis lacinia
            eiusmod exercitation cupiditate nisl perferendis. Amet. Consectetuer
            quas faucibus repellat, eaque sociis malesuada molestiae, nisl
            recusandae vehicula mollis. Alias molestie! Unde vestibulum nec,
            neque totam ipsam! Montes tempor reiciendis non aliqua ridiculus,
            numquam rutrum, vulputate volutpat mus labore.
          </p>

          <p>
            Repellat veniam aperiam ornare harum litora natus modi, doloribus
            autem aute volutpat? Ridiculus vestibulum nostrud mattis nihil mi
            sociis quidem. Magna proident error libero! Voluptates earum! Eum.
            Praesentium quasi ultrices, senectus vero? Eros ea consequatur
            omnis! Cillum dolorem augue. Rhoncus quasi aenean luctus nec
            aliquid, alias neque minus? Animi litora massa aperiam veritatis
            eveniet tortor aptent fugiat aenean sapien doloribus.
          </p>

          <p>
            Lorem rutrum expedita sociis occaecati! Reprehenderit quasi,
            sagittis quisque reiciendis, ornare nostra, tempora aut justo ante.
            At, dignissim. Posuere! Deserunt, laoreet, integer. Dolores
            laudantium, excepteur cubilia aspernatur tempor quisque tortor,
            torquent, rhoncus vel cupiditate nibh aliqua, deserunt maecenas
            exercitation culpa! Venenatis irure reiciendis rem reprehenderit
            phasellus elementum rem? Repellat! Congue ipsum ante vestibulum
            aliquet sapien dapibus! Fugit hac, aenean nobis.
          </p>
        </Wysiwyg>
      </Section>
    </LandingPage>
  );
}

export default Home;
