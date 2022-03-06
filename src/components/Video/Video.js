import React from "react";
import styled from "styled-components";

const Video = ({name, src }) => {
  return (
    <Wrapper>
      <video controls="controls" name={name}>
        <source src={src} />
      </video>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  ${'' /* max-width: 100%; */}
  width: 90%;
  padding: 10px 0 10px 0;
  margin-left: auto;
  margin-right: auto;
`;

export default Video;