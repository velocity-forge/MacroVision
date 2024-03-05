import { Source_Sans_3 as SourceSansPro } from 'next/font/google';

const sourceSansPro = SourceSansPro({
  display: 'auto',
  subsets: ['latin'],
  weight: 'variable',
  fallback: ['Arial', 'sans-serif'],
  variable: '--font-family-primary',
});

export default sourceSansPro;
