import Head from "next/head";
import * as React from 'react'
import {getMDXComponent} from 'mdx-bundler/client'

import { getIndexData } from '@/lib/content'

import Title from "~/components/Title/";
import TextLink from "~/components/TextLink/";
import Footer from "~/components/Footer/";
import ContactForm from "~/components/ContactForm/";
import Paragraph from "~/components/Paragraph/";
import H1 from "~/components/H1";
import H2 from "~/components/H2";
import H3 from "~/components/H3";
import Ul from "~/components/Ul";
import HomeLayout from "~/components/HomeLayout";
import BlockQuote from "~/components/BlockQuote";

export async function getStaticProps() {
  const indexData = await getIndexData("index")
  return {
    props: {
      indexData,
    }
  }
}

export default function Home({ indexData }) {
  const MdxIndexComponent = React.useMemo(() => getMDXComponent(indexData.code), [indexData.code])
  return (
    <div>
      <Head>
        <title>{"Del Norte Place Neighborhood"}</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <HomeLayout frontmatter={indexData.frontmatter}>
        <MdxIndexComponent components={{p: Paragraph, h1: H1, h2: H2, h3: H3, ul: Ul, blockquote: BlockQuote}}/>
      
      </HomeLayout>
      <Title>Hello Neighbor</Title>
      <Paragraph>Feel free to reach out if you are current or potential resident, have a question, or need to contact the neighborhood association.</Paragraph>
      <ContactForm />
      <Footer />
    </div>
  );
}