import React from "react";
import styled from "styled-components";

const Ul = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

const Wrapper = styled.div`
  font-size: 1.25em;
  font-weight: 500; /*slightly bolder than normal */
  ${'' /* padding: 1em 0 1em 0; */}
  li::marker {
    font-size: 1.25em;
  }
  li {
    padding: 0 0 0 1em;
  }
`;

export default Ul;