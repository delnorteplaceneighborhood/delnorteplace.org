import React from "react";
import styled from "styled-components";

const H2 = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

const Wrapper = styled.div`
  font-size: 1.3em;
  font-weight: 700; /* bold */
  padding: 0.5em 0 0.5em 0;
  @media (max-width: 400px) {
    font-size: 1.2em;
  }
`;

export default H2;