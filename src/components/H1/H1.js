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
  font-size: 1.75em;
  font-weight: 700; /* bold */
`;

export default H1;