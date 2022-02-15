import * as React from 'react'

import Title from "~/components/Title/";
import Footer from "~/components/Footer/";
import Paragraph from "~/components/Paragraph/";
import Navigation from '~/components/Navigation';


export default function Contact() {
    return (
        <div>
            <Navigation />
            <Title>About Us</Title>
            <Paragraph>More content from copy for this page</Paragraph>
            <Footer />
        </div>
    );
}