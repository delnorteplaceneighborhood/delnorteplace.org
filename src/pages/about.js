import * as React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import { getIndexData } from '@/lib/content'

import Title from "~/components/Title/";
import Footer from "~/components/Footer/";
import Paragraph from "~/components/Paragraph/";
import Navigation from '~/components/Navigation';
import TextLink from "~/components/TextLink/";
import H1 from "~/components/H1";
import H2 from "~/components/H2";
import H3 from "~/components/H3";
import Ul from "~/components/Ul";
import Bold from '~/components/Bold';
import Italic from '~/components/Italic';
import AboutLayout from "~/components/AboutLayout";
import BlockQuote from "~/components/BlockQuote";

export async function getStaticProps() {
    const aboutData = await getIndexData("about")
    return {
        props: {
            aboutData,
        }
    }
}


export default function About({ aboutData }) {
    const MdxAboutComponent = React.useMemo(() => getMDXComponent(aboutData.code), [aboutData.code])

    return (
        <div>
            <Navigation />
            <AboutLayout frontmatter={aboutData.frontmatter}>
                <MdxAboutComponent components={{ p: Paragraph, h1: H1, h2: H2, h3: H3, ul: Ul, blockquote: BlockQuote, b: Bold, i: Italic, a: TextLink}} />

            </AboutLayout>
            <Footer />
        </div>
    );
}