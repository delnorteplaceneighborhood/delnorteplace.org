import React from "react";
import styled from "styled-components";

const H1 = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

const Wrapper = styled.div`
  font-size: 1.4em;
  font-weight: 700; /* bold */
  @media (max-width: 400px) {
    font-size: 1.3em;
  }
`;

export default H1;