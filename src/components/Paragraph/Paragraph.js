import React, { Component } from 'react';
import styled from 'styled-components';

const Paragraph = ({children}) => {
    return (
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    );
  };

// Create a <Title> react component that renders an <h1> which is
// centered and sized at 1.5em
const Content = styled.p`
  font-size: 1.25em;
  font-weight: 500; /*slightly bolder than normal */
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding
const Wrapper = styled.section`
  padding: 0.75em 0em;
`;

export default Paragraph;
