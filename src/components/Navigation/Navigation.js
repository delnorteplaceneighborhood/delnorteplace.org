import React from "react";
import styled from "styled-components";
import Link from "next/link";
import TextLink from "~/components/TextLink";


const Navigation = ({children}) => {
  return (
    <Wrapper>
      <LinkWrapper><TextLink href="/">Home</TextLink></LinkWrapper>
      <LinkWrapper><TextLink href="/about">About</TextLink></LinkWrapper>
      <LinkWrapper><TextLink href="/contact">Contact</TextLink></LinkWrapper>
      {children}
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flow;
  @media (max-width: 400px) {
    display: block;
  }
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