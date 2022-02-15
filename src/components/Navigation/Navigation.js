import React from "react";
import styled from "styled-components";
import Link from "next/link";
import TextLink from "~/components/TextLink";


const Navigation = ({children}) => {
  return (
    <Wrapper>
      <LinkWrapper><TextLink href="/" text="Home"/></LinkWrapper>
      <LinkWrapper><TextLink href="/about" text="About"/></LinkWrapper>
      <LinkWrapper><TextLink href="/contact" text="Contact"/></LinkWrapper>
      {children}
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flow;
  margin: auto;
  justify-content: center;
  width: 50%;
  text-align: center;
  padding: 40px 0px;

`;

const LinkWrapper = styled.div`
  margin: 0px 10px;
`;

export default Navigation;