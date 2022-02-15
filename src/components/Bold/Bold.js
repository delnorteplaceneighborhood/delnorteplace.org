import React from "react";
import styled from "styled-components";

const Bold = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

const Wrapper = styled.div`
  font-weight: 700; /* bold */
`;

export default Bold;