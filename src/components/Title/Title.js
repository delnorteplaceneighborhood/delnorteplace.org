import React, { Component } from 'react';
import styled from 'styled-components';

const Title = ({children}) => {
    return (
      <Wrapper>
        <Header>{children}</Header>
      </Wrapper>
    );
  };

// Create a <Title> react component that renders an <h1> which is
// centered and sized at 1.5em
const Header = styled.h1`
  font-size: 2.0em;
  padding: 20px 0 20px 0;

  @media (max-width: 400px) {
    padding: 10px 0 20px 0;
  }
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding
const Wrapper = styled.section`
  padding: 0em 0em;
`;

export default Title;
