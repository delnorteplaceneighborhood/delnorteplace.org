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
   font-size: 1.4em;
   font-weight: 700; /* bold */
   padding: 0.4em 0 0.4em 0;

`;

export default H3;