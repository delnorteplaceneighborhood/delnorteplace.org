import React from "react";
import styled from "styled-components";

const H3 = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

const Wrapper = styled.div`
   font-size: 1.2em;
   font-weight: 700; /* bold */
   padding: 0.4em 0 0.4em 0;
   @media (max-width: 400px) {
    font-size: 1.1em;
  }

`;

export default H3;