import React from "react";
import styled from "styled-components";
import Paragraph from "~/components/Paragraph"
import IntroImage from "~/components/IntroImage";
import Title from "~/components/Title";

const AboutLayout = ({frontmatter, children}) => {
  return (
    <Wrapper>
      <Title>{frontmatter.title }</Title>
      <Paragraph>{frontmatter.description}</Paragraph>
      <HrWrapper>
        <hr />
      </HrWrapper>
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
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

export default AboutLayout;