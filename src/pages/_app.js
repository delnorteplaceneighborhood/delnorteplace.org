import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
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

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>{"Del Norte Place Neighborhood"}</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;