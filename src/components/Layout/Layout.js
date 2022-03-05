import React from "react";
import styled from "styled-components";
import Paragraph from "~/components/Paragraph"
import Title from "~/components/Title";
import Navigation from "~/components/Navigation"
import Footer from "~/components/Footer"

const HomeLayout = ({frontmatter, children}) => {
  return (
    <Wrapper>
      <Navigation />
      <Title>{frontmatter.title }</Title>
      <Paragraph>{frontmatter.description}</Paragraph>
      <HrWrapper>
        <hr />
      </HrWrapper>
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
      <Footer />
    </Wrapper>
  )
};

const Wrapper = styled.div`
`;

const ChildrenWrapper = styled.div`
  padding: 1em 0 1em 0;
`;

const HrWrapper = styled.div`
  padding: 0.75em 0 0.25em 0;
`;

export default HomeLayout;