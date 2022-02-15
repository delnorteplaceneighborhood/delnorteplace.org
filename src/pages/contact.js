import * as React from 'react'

import Title from "~/components/Title/";
import Footer from "~/components/Footer/";
import ContactForm from "~/components/ContactForm/";
import Paragraph from "~/components/Paragraph/";
import Navigation from '~/components/Navigation';

export default function Contact() {
  return (
    <div>
      <Navigation />
      <Title>Hello Neighbor</Title>
      <Paragraph>Feel free to reach out if you are current or potential resident, have a question, or need to contact the neighborhood association.</Paragraph>
      <ContactForm />
      <Footer />
    </div>
  );
}