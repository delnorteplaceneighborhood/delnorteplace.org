import React from "react";
import styled from "styled-components";
import TextLink from "src/components/TextLink";

const currentyear = new Date().getFullYear()  // returns the current year


const name = "Del Norte Place Neighborhood Association";

const Footer = () => {
  return (
    <Wrapper>
      <div>© 2021-{currentyear} {name}.</div>
      <div>All Rights Reserved.</div>
      <div>Designed by <TextLink href="https://iancleary.me">Ian Cleary</TextLink>.</div>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  font-size: 1.25em;
  text-align: center;
  padding: 30px 0;
`;

export default Footer;
