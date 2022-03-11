import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { MDXProvider } from '@mdx-js/react';
import Paragraph from "~/components/Paragraph/";
import TextLink from "~/components/TextLink/";
import H1 from "~/components/H1";
import H2 from "~/components/H2";
import H3 from "~/components/H3";
import Ul from "~/components/Ul";
import Bold from '~/components/Bold';
import Italic from '~/components/Italic';
import BlockQuote from "~/components/BlockQuote";

import '../styles/globals.css'
import '../styles/reset.css'

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  background: var(--color-neutral-50);
  display:block;
  max-width: 80%;
  margin:0 auto;
  padding: 0;
}

img {
  max-width: 90%;
  margin:0 auto;
}

@media (max-width: 400px) {
    html{
      max-width: 100%;
      margin:0 auto;
    }
  }

body{
  ${'' /* background-color:#fafafa; */}
  min-height:100vh;
  padding: 2rem;
  ${'' /* margin-top:0; */}
  font-family:Verdana;
}
`;

const theme = {
  colors: {
    primary: "#fafafa",
  },
};

const components = {
  p: Paragraph,
  h1: H1,
  h2: H2,
  h3: H3,
  ul: Ul,
  blockquote: BlockQuote,
  b: Bold,
  i: Italic,
  a: TextLink,
}

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>{"Del Norte Place Neighborhood"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <MDXProvider components={components}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </MDXProvider>
    </div>
  );
}

export default MyApp;