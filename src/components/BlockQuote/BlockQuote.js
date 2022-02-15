import React from "react";
import styled from "styled-components";

const BlockQuote = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

const Wrapper = styled.div`
  background-color: var(--color-neutral-100);
  border-left-style: solid;
  border-left-width: 10px;
  border-left-color: var(--color-primary-200);
  padding: 1em 1em 1em 1em;
  margin: 1em 0 1em 0;
`;

export default BlockQuote;