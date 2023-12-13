import { Source_Sans_3 as SourceSansPro } from 'next/font/google';

const sourceSansPro = SourceSansPro({
  display: 'swap',
  subsets: ['latin'],
  weight: 'variable',
});

function SourceSansFontStyle() {
  return (
    <style jsx global>
      {`
        :root {
          --font-family-primary: ${sourceSansPro.style.fontFamily};
        }
      `}
    </style>
  );
}

export default SourceSansFontStyle;
export { sourceSansPro };
