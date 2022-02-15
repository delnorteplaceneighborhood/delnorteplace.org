import React, { Component } from 'react';
import styled from 'styled-components';

const Intro = ({h1, h2}) => {
    return (
      <Wrapper>
        <H1>{h1}</H1>
        <H2>{h2}</H2>
      </Wrapper>
    );
  };

// Create a <Title> react component that renders an <h1> which is
// centered and sized at 1.5em
const H1 = styled.h1`
  font-size: 2.5em;
  @media (max-width: 400px) {
      font-size: 1.75em;
  }
  text-align: left;
  padding: 30px 0 10px 0;
`;

const H2 = styled.h2`
  font-size: 2.5em;
  @media (max-width: 400px) {
      font-size: 1.75em;
  }
  text-align: left;
  padding: 10px 0
`;

const Accent = styled.strong`
  color: var(--color-primary-400);
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding
const Wrapper = styled.section`
  padding: 0em;
`;

export default Intro;
