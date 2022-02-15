import React from "react";
import styled from "styled-components";

const Backdrop = ({opacity, color, children}) => {
  return (
    <Wrapper
      style={{
        '--color': color,
        '--opacity': opacity,
      }}
    >
      {children}
    </Wrapper>
  )
};

const Wrapper = styled.div`
  opacity: var(--opacity, 0.75);
  background-color: var(--color, var(--color-neutral-900));
`;

export default Backdrop;
