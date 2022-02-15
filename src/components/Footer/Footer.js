import React from "react";
import styled from "styled-components";

const currentyear = new Date().getFullYear()  // returns the current year


const name = "Del Norte Place Neighborhood Association";

const Footer = () => {
  return (
    <Wrapper>
      <div>© 2021-present {name}.</div>
      <div>All Rights Reserved.</div>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  font-size: 1.25em;
  text-align: center;
  padding: 30px 0;
`;

export default Footer;
