import React from "react";
import styled from "styled-components";
import Link from "next/link";
import TextLink from "~/components/TextLink";


const Navigation = ({children}) => {
  return (
    <Wrapper>
      <LinkWrapper><TextLink href="/">Home</TextLink></LinkWrapper>
      <LinkWrapper><TextLink href="/about">About</TextLink></LinkWrapper>
      <LinkWrapper><TextLink href="/accomplishments">ccomplishments</TextLink></LinkWrapper>
      <LinkWrapper><TextLink href="/events">Events</TextLink></LinkWrapper>
      <LinkWrapper><TextLink href="/contact">Contact</TextLink></LinkWrapper>
      {children}
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: inline flex;
  padding: 40px 0px;
  @media (max-width: 400px) {
    padding: 20px 0px;
    display: block;
  }
  margin: auto;
  justify-content: center;
  width: 100%;
  text-align: center;

`;

const LinkWrapper = styled.div`
  /* effectively the padding on each navigation item */
  padding: 0px 15px;
  @media (max-width: 400px) {
    padding: 3px 0px;
  }
`;

export default Navigation;