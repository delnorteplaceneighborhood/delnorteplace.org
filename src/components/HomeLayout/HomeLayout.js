import React from "react";
import styled from "styled-components";
import H1 from "~/components/H1"
import Paragraph from "~/components/Paragraph"

const HomeLayout = ({frontmatter, children}) => {
  return (
    <Wrapper>
      <H1>{frontmatter.title }</H1>
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
  /* CSS Goes Here */
`;

const ChildrenWrapper = styled.div`
  padding: 1em 0 1em 0;
`;

const HrWrapper = styled.div`
  padding: 0.75em 0 0.25em 0;
`;

export default HomeLayout;