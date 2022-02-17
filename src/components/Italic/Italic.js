import React from "react";
import styled from "styled-components";

const Italic = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

const Wrapper = styled.div`
    font-style: italic;
`;

export default Italic;